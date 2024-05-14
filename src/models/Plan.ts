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
}

export interface IPlanState {
    planstateid: number;
    planstatename: string;
}

export interface IPlanOverviewProps {
	planid: number;
	planname: string;
	planidcode: string,
	createddate: Date,
	startdate: Date;
	enddate: Date;
	mdEmployee: {
		employeeid: number,
		firstname: string,
		lastname: string,
		dateofbirth: string,
		idcard: string,
		gender: boolean,
		email: string,
		address: string,
		phone: string,
		userid: string,
		status: string,
	}
	mdEmployees: IEmployee[];
	mdConstructionSite: {
		constructionsitecode: string;
		constructionsitename: string;
	}
	cmsPlanState: {
		planstateid: number;
		planstatename: string;
	}
	// totalNumberOfEmployees: number;
	// totalNumberOfLabors: number;
	// Supervision: string;
}

export interface IConstructionSiteInfo{
    constructionsitecode: string;
	constructionsitename: string;
}