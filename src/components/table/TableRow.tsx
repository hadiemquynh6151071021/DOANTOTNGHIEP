"use client";
import { TableRow as MuiTableRow, TableCell } from "@mui/material";
import { useRouter } from "next/navigation";

interface ITableRowProps {
	href?: string;
	cells: {
		value: string;
		align?: "left" | "right"
	}[]
}

export default function TableRow({
	href,
	cells
}: ITableRowProps) {
	const router = useRouter();

	function handleNavigate() {
		if (href) {
			router.push(href);
		}
	}

	return (
		<MuiTableRow
			hover
			className={"bg-gray-50 " + (href && " cursor-pointer") }
			onClick={handleNavigate}
		> 
			{cells.map(cell => (
				// eslint-disable-next-line react/jsx-key
				<TableCell align={cell.align ?? "left"}>
					{cell.value}
				</TableCell>
		))}
		</MuiTableRow>
	)
}