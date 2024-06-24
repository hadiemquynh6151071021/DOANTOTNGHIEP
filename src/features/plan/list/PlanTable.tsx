"use client";
import EnhancedTableHead from "@/components/table/EnhancedTableHead";
import TableLayout from "@/components/table/TableLayout";
import { Order } from "@/utils/functions/sort";
import { Table, TableContainer, TablePagination } from "@mui/material";
import { useEffect, useState } from "react";
import { IPlanData, headCells } from "./constants";
import PlanTableToolbar from "./PlanTableToolbar";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import useAlert from "@/hooks/useAlert";
import TableRow from "@/components/table/TableRow";
import planAPI, { PlanListType } from "@/apis/plan";
import { getVNLocaleDateString } from "@/utils/functions/getLocaleDateString";
import IPlan from "@/models/Plan";
import { checkPermission } from "@/models/Token";
import { useRouter } from "next/router";

interface IPlanTableProps {
  planType: PlanListType;
  enabled: boolean;
  plansFromCE: boolean;
  constructionsiteid: number;
  readonly: boolean;
}

export default function PlanTable({
  planType,
  enabled,
  plansFromCE,
  constructionsiteid,
  readonly,
}: IPlanTableProps) {
  // set up page
  const setLoading = useLoadingAnimation();
  const setAlert = useAlert();

  // Data
  const [rows, setRows] = useState<IPlanData[]>([]);
  const [filteredRows, setFilteredRows] = useState<IPlanData[]>([]);
  const [selectedCS, setSelectedCS] = useState("");
  const [url, setUrl] = useState<string>("");

  // <EnhancedTableHead />
  const [order, setOrder] = useState<Order>("desc");
  const [orderBy, setOrderBy] = useState<keyof IPlanData>("plan");
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof IPlanData
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // <TablePagination />
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [page, setPage] = useState(0);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const handleDoubleClick = (id: number) => {
  //   if(checkPermission(token)===2){
  // 	router.push("/construction-diaries/" + id);
  //   }
  //   else {
  // 	router.push("/construction-diaries/approve/" + id);}
  // };

  useEffect(() => {
    const employeeId = parseInt(localStorage.getItem("employeeId"));
    setURL();
    fetchRecentPlan();
  }, []);

  function setURL() {
    if (readonly == true) {
      setUrl("/plans/");
    } else {
		setUrl("/plans/approve/");
    }
  }

  async function fetchRecentPlan() {
    setLoading(true);
    try {
      let plans;
      if (plansFromCE.valueOf() === false) {
        plans = (await planAPI.getListPlan(planType.valueOf())) || [];
      } else {
        plans = await planAPI.getListFromCS(
          planType.valueOf(),
          constructionsiteid.valueOf()
        );
      }
      let convertedPlans = plans.map((plan) => ({
        planId: plan.planid,
        construction: plan.mdConstructionSite.constructionsitename,
        createdDate: plan.createddate,
        plan: "#" + plan.planid + "  " + plan.planname,
        startDate: getVNLocaleDateString(plan.startdate),
        endDate: getVNLocaleDateString(plan.enddate),
      }));

      setRows(convertedPlans);
      setFilteredRows(convertedPlans);
    } catch (ex) {
      setAlert({
        message: "Lấy dữ liệu danh sách Kế hoạch thất bại!",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <TableLayout>
      {/* Toolbar  */}
      <PlanTableToolbar enabled={enabled.valueOf()} />

      {/* Table  */}
      <TableContainer sx={{ maxHeight: 460 }}>
        <Table stickyHeader aria-label="sticky table">
          <EnhancedTableHead
            orderBy={orderBy}
            order={order}
            onRequestSort={handleRequestSort}
            headCells={headCells}
          />
          {filteredRows.map((row) => (
            <TableRow
              key={row.planId}
              href={url.toString() + row.planId}
              cells={[
                {
                  value: row.construction,
                },
                {
                  value: row.plan,
                },
                {
                  value: row.startDate,
                },
                {
                  value: row.endDate,
                },
                {
                  value: row.createdDate,
                },
              ]}
            />
          ))}
        </Table>
        {!filteredRows.length && (
          <div className="h-120 grid place-items-center text-apple-gray bg-content">
            Danh sách trống
          </div>
        )}
      </TableContainer>

      {/* Pagigation  */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="section"
        count={filteredRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableLayout>
  );
}
