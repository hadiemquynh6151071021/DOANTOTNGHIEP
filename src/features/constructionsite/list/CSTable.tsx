"use client";
import { Order } from "@/utils/functions/sort";
import { Button, Table, TableContainer, TablePagination} from "@mui/material";
import { useEffect, useState } from "react";
import { IConstructionData, headCells } from "./constants";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import useAlert from "@/hooks/useAlert";
import constructionSiteAPI, { ConstructionListType } from "@/apis/constructionSite";
import CSTableToolbar from "./CSTableToolbar";
import TableLayout from "@/components/table/TableLayout";
import EnhancedTableHead from "@/components/table/EnhancedTableHead";
import TableRow from "@/components/table/TableRow";
import { getVNLocaleDateString } from "@/utils/functions/getLocaleDateString";
import router, { useRouter } from "next/router";
import { isTokenExpired } from "@/features/login/LoginSection";

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

	useEffect(() => {
		fetchRecentConstructionSite();
	}, []);

	async function fetchRecentConstructionSite() {
		setLoading(true);
		try {
			const constructionSite = (await constructionSiteAPI.getListActive()) || [];
			
			const convertedConstructionSite = constructionSite.map(constructionSite => ({
				constructionId: constructionSite.constructionsiteid,
				constructionIdCode: constructionSite.constructionsitecode,
				constructionName: constructionSite.constructionsitename,
				startDate: getVNLocaleDateString(constructionSite.startdate),
				endDate: getVNLocaleDateString(constructionSite.enddate),
				constructionType: constructionSite.mdConstructionType.constructiontypename
			}));

			setRows(convertedConstructionSite);
			setFilteredRows(convertedConstructionSite);
		}
		catch (ex) {
			setAlert({
				message: "Lấy dữ liệu danh sách Công trình thất bại!",
				severity: "error"
			});
		}
		finally {
			setLoading(false);
		}
	}
	// async function tokenExpired() {
	// 	const token = localStorage.getItem('accessToken');
	// 	if (isTokenExpired(token)) {
	// 		// Token đã hết hạn, thực hiện các hành động tương ứng (ví dụ: chuyển hướng trang)
	// 		window.location.href = 'https://fahasha.com';
	// 	}
	// }

	

	

	return (
		<TableLayout>
			{/* Toolbar  */}
			{/* <CSTableToolbar /> */}

			{/* Table  */}
			{/* <Button onClick={handle}>AAAA</Button> */}
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
							href={`/construction-sites/${row.constructionId}`}

							// http://localhost:8080/api/plans?constructionsiteid=1
							cells={[
								{
									value: row.constructionIdCode
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
									value: row.constructionType
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