import IPlanTask from "./PlanTask";

export default interface IPlanWorkItem {
    isSelected: boolean;
    orderindex: number;
    workitemid: number;
    workitemCode: string;
    workitemname: string;
    employeeid: number;
    firstname: string,
    idcard: string;
    lastname: string,
    userid: string;
    mdTasks: IPlanTask[]; // cmsPlanJSONDetail
}