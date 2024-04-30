import IConstructionSite from "@/models/ConstructionSite";
import request from "./request";

export const enum ConstructionListType {
    Init = 1,
    Approved = 2,
    Rejected = 3,
}

const constructionSiteAPI = {
    getListActive: () => request.get<IConstructionSite[]>("constructions/active")
};

export default constructionSiteAPI;
