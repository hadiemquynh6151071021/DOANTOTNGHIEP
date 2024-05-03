import { IHeadCell } from "@/components/table/constants";

export interface IConstructionData {
    constructionId: number;
    constructionIdCode: string;
    constructionName: string;
    startDate: string;
    endDate: string;
    constructionType: string;
}

export const headCells: IHeadCell<IConstructionData>[] = [
    {
        id: "constructionIdCode",
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
        id: "constructionType",
        numeric: false,
        label: "Loại công trình",
    },
];