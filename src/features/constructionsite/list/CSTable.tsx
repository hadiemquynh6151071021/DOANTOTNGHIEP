"use client";
import { Order } from "@/utils/functions/sort";
import { Table, TableContainer, TablePagination} from "@mui/material";
import { useEffect, useState } from "react";
import { IConstructionData, headCells } from "./constants";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import useAlert from "@/hooks/useAlert";
import { ConstructionListType } from "@/apis/constructionSite";
import CSTableToolbar from "./CSTableToolbar";
import TableLayout from "@/components/table/TableLayout";
import EnhancedTableHead from "@/components/table/EnhancedTableHead";
import TableRow from "@/components/table/TableRow";

interface IConstructionTableProps {
	constructionType: ConstructionListType
}

export default function CSTable({
	constructionType
}: IConstructionTableProps) {
	// set up page
	const setLoading = useLoadingAnimation();
	const setAlert = useAlert();

	// Data
	const [rows, setRows] = useState<IConstructionData[]>([]);
	const [filteredRows, setFilteredRows] = useState<IConstructionData[]>([]);
	const [selectedCS, setSelectedCS] = useState("");

	// <EnhancedTableHead />
	const [order, setOrder] = useState<Order>('desc');
	const [orderBy, setOrderBy] = useState<keyof IConstructionData>('constructionId');
	const handleRequestSort = (
		event: React.MouseEvent<unknown>,
		property: keyof  IConstructionData,
	) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	}

	// <TablePagination />
	const [rowsPerPage, setRowsPerPage] = useState(15);
	const [page, setPage] = useState(0);
	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};
	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	// useEffect(() => {
	// 	fetchRecentDiaries();
	// }, []);

	// async function fetchRecentDiaries() {
	// 	setLoading(true);
	// 	try {
	// 		const plans = await planAPI.getList(planType);
			
	// 		const convertedPlans = plans.map(plan => ({
	// 			construction: "",
	// 			createdDate: "",
	// 			plan: plan.planname + " " + plan.planid,
	// 			planId: plan.planid + "",
	// 			startDate: getVNLocaleDateString(plan.startdate),
	// 			endDate: getVNLocaleDateString(plan.enddate),
	// 		}));

	// 		setRows(convertedPlans);
	// 		setFilteredRows(convertedPlans);
	// 	}
	// 	catch (ex) {
	// 		setAlert({
	// 			message: "Lấy dữ liệu danh sách Kế hoạch thất bại!",
	// 			severity: "error"
	// 		});
	// 	}
	// 	finally {
	// 		setLoading(false);
	// 	}
	// }

	return (
		<TableLayout>
			{/* Toolbar  */}
			<CSTableToolbar />

			{/* Table  */}
			<TableContainer sx={{ maxHeight: 460 }}>
				<Table
					stickyHeader
					aria-label="sticky table"
				>
					<EnhancedTableHead
						orderBy={orderBy}
						order={order}
						onRequestSort={handleRequestSort}
						headCells={headCells}
					/>
					{filteredRows.map(row => (
						<TableRow
							key={row.constructionId}
							href={`/constructions/${row.constructionId}`}
							cells={[
								{
									value: row.constructionId
								},
								{
									value: row.constructionName
								},
								{
									value: row.startDate
								},
								{
									value: row.endDate
								},
								{
									value: row.createdDate
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
	)
}