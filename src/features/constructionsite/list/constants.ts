import { IHeadCell } from "@/components/Table/constants";

export interface IConstructionData {
    constructionId: string;
    constructionName: string;
    address: string;
    startDate: string;
    endDate: string;
    createdDate: string;
}

export const headCells: IHeadCell<IConstructionData>[] = [
    {
        id: "constructionId",
        numeric: false,
        label: "Mã công trình",
    },
    {
        id: "constructionName",
        numeric: false,
        label: "Tên công trình",
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