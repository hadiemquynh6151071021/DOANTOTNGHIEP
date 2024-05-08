import IConstructionSite from "./ConstructionSite";
import { IEmployee } from "./Employee";

export default interface IPlan {
    mdConstructionSite: IConstructionSite;
    planid: number;
    planname: string;
    planidcode: string;

    startdate: string;
    enddate: string;
    
    mdEmployee: IEmployee;
    cmsPlanState: IPlanState;
    mdEmployees: IEmployee[];

    // mdConstructionSite: number;
    // approvers: number[];
}

export interface IPlanState {
    planstateid: number;
    planstatename: string;
}