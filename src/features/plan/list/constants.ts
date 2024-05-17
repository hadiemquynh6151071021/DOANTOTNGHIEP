import { IHeadCell } from "@/components/table/constants";

export interface IPlanData {
    planId: number;
    construction: string;
    plan: string;
    startDate: string;
    endDate: string;
    createdDate: string;
}

export const headCells: IHeadCell<IPlanData>[] = [
    {
        id: "construction",
        numeric: false,
        label: "Công trình",
    },
    {
        id: "plan",
        numeric: false,
        label: "Kế hoạch",
    },
    {
        id: "startDate",
        numeric: false,
        label: "Ngày bắt đầu",
    },
    {
        id: "endDate",
        numeric: false,
        label: "Ngày kết thúc",
    },
    {
        id: "createdDate",
        numeric: false,
        label: "Ngày tạo",
    },
];