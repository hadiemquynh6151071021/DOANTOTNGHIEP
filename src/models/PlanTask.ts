import { IEmployee } from "./Employee";
import IProduct from "./Product";

export default interface IPlanTask {
    isSelected: boolean;
    amountofwork: number;

    costestimateid: number;
    orderindex: number;
    planid: number;
    plantaskid: number;

    startdate: string;
    enddate: string;

    quantityunitid: number;
    quantityunitname: string;

    taskid: number;
    taskcode: string;
    taskname: string;

    totallaborquantity: number;

    workitemid: number;
    workitemcode: string;
    workitemname: string;
}

export interface IPlanTaskLabor{
    plantasklaborid: number;
    mdEmployee: IEmployee;
}

export interface IPlanTaskProduct {
    planTaskProductId:number;
    mdProduct: IProduct;
}