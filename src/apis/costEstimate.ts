import ICostEstimate from "@/models/CostEstimate";
import request from "./request";
import ICostEstimateWorkItem from "@/models/CostEstimateWorkItem";
import ICostEstimateTaskProduct from "@/models/CostEstimateTaskProduct";
import ICostEstimateTaskSkill from "@/models/CostEstiamteTaskSkill";
import { CenterPoint } from "@/models/CenterPoint";

const costEstimateAPI = {
    getListCodeAndName: (constructionSiteId: number) =>
        request.get<ICostEstimate[]>(
            `/costestimate/getcodeandname/${constructionSiteId}`
        ),
    
    getById: (costEstimateId: number) =>
        request.get<ICostEstimate>(`/costestimate/${costEstimateId}`),
    
    getListCostEstimateTasks: (costEstimateId: number) =>
        request.get<ICostEstimateWorkItem[]>(
            `/costestimatetask/getlistbycostestimateid/${costEstimateId}`
        ),
    
    getListCostEstimateTaskProducts: (costEstimateTaskId: number) =>
        request.get<ICostEstimateTaskProduct[]>(`costestimatetaskproduct/getlistbycostestimatetaskid/${costEstimateTaskId}`),
    getCostEstimateTaskSkill: (costEstimateTaskId: number) =>
        request.get<ICostEstimateTaskSkill>(`taskskill?costestimatetaskid=${costEstimateTaskId}`),
    getEducationBackground:(costEstimateTaskId: number) =>
        request.get<number>(`educationbackground?costestimatetaskid=${costEstimateTaskId}`),
    getKmeansInput:(listceInput: number[]) => request.get<CenterPoint[]>(`/Kmeans/searchKmeansInput?listcetid=${listceInput}`),
};

export default costEstimateAPI;
