'use client';
import { PlanListType } from "@/apis/plan";
import { CustomTabPanel} from "@/components/TabPanel";
import PlanTable from "@/features/plan/list/PlanTable";
import MainContainer from "@/layouts/MainContainer";
import PageContainer from "@/layouts/PageContainer";
import { checkPermission } from "@/models/Token";
import { Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";

export default function Page({
    params: { id } 
}: {
    params: { id: number }
}) {

    const [tabValue, setTabValue] = useState<number>(0);

	function handleChangeTab(event: React.SyntheticEvent, newValue: number) {
		setTabValue(newValue);
	}

    
    return (
        <PageContainer
            breadcrumbs={[
                {
                    text: "Trang chủ",
                    href: "/home"
                },
                {
                    text: "Kế hoạch công trình",
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
					<PlanTable planType={PlanListType.Approved} enabled={false} plansFromCE={true} constructionsiteid={id.valueOf()} readonly={false}/>
				</CustomTabPanel>
				<CustomTabPanel value={tabValue} index={1}>
					<PlanTable planType={PlanListType.Init} enabled={false} plansFromCE={true} constructionsiteid={id.valueOf()} readonly={false}/>
				</CustomTabPanel>
				<CustomTabPanel value={tabValue} index={2}>
					<PlanTable planType={PlanListType.Rejected} enabled={false} plansFromCE={true} constructionsiteid={id.valueOf()} readonly={false}/>
				</CustomTabPanel>
			</MainContainer>
        
        </PageContainer>
    )
}