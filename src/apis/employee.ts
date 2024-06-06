import { IEmployee } from "@/models/Employee";
import request from "./request";
import CostEstimateTaskSkill from "@/models/CostEstiamteTaskSkill";
import { IAddress } from "@/models/ConstructionSite";

export const enum LaborType {
    Worker = 1,
    Supervisor = 2,
}



const employeeAPI = {
    getList: (laborType: LaborType) =>
        request.get<IEmployee[]>(`/employees/search?labor=${laborType}&name`),
    getEmployees: (costEstimateTaskSkill: CostEstimateTaskSkill, educationLevelId: number, addressIds: number) => request.get<IEmployee[]> (`/a/search?skillIds=${costEstimateTaskSkill.skillid}&skillRankId=${costEstimateTaskSkill.skillrankid}&educationLevelId=${educationLevelId}&addressIds=${addressIds}`),
    getEmployeesByPosition: (positionId: number) => request.get<IEmployee[]>(`/employees/searchPosition?positionId=${positionId}`)
};

export default employeeAPI;