'use client';
import { PlanListType } from "@/apis/plan";
import Home from "@/app/page";
import { CustomTabPanel } from "@/components/TabPanel";
import CreatePlan from "@/features/plan/create-rework/CreatePlan";
import PlanTable from "@/features/plan/list/PlanTable";
import MainContainer from "@/layouts/MainContainer";
import PageContainer from "@/layouts/PageContainer";
import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";

export default function Page() {
	const [tabValue, setTabValue] = useState<number>(0);
	const [token, setToken] = useState(null);

	function handleChangeTab(event: React.SyntheticEvent, newValue: number) {
		setTabValue(newValue);
	}

    useEffect(() => { 
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
    }, []);

	if(token !== null){
		return (
			<PageContainer
				breadcrumbs={[
					{
						text: "Trang chủ",
						href: "/home"
					},
					{
						text: "Kế hoạch",
					},
				]}
			>
				<MainContainer fixedHeight={true}>
					<Tabs
						value={tabValue}
						onChange={handleChangeTab} 
					>
						<Tab label="Vận hành" />
						<Tab label="Chờ duyệt" />
						<Tab label="Khác" />
					</Tabs>
	
					<CustomTabPanel value={tabValue} index={0}>
						<PlanTable planType={PlanListType.Approved} enabled={true} plansFromCE={false} constructionsiteid={null} readonly={true}/>
					</CustomTabPanel>
					<CustomTabPanel value={tabValue} index={1}>
						<PlanTable planType={PlanListType.Init} enabled={true} plansFromCE={false} constructionsiteid={null} readonly={false}/>
					</CustomTabPanel>
					<CustomTabPanel value={tabValue} index={2}>
						<PlanTable planType={PlanListType.Rejected} enabled={true} plansFromCE={false} constructionsiteid={null} readonly={true}/>
					</CustomTabPanel>
				</MainContainer>
			</PageContainer>
		)
	}
	else{
		return(
			<Home/>
		)
	}
}