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
	const [token, setToken] = useState(null);
	const [readonly, setReadonly] = useState<boolean>();

	function handleChangeTab(event: React.SyntheticEvent, newValue: number) {
		setTabValue(newValue);
	}

	useEffect(() => { 
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
		setPermission(storedToken)
    }, []);

	function setPermission(token) {
		  if (checkPermission(token) === 1 || checkPermission(token) === 3) {
			setReadonly(true);
		  } else {
			setReadonly(false);
		  }
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
					<PlanTable planType={PlanListType.Approved} enabled={false} plansFromCE={true} constructionsiteid={id.valueOf()} readonly={true}/>
				</CustomTabPanel>
				<CustomTabPanel value={tabValue} index={1}>
					<PlanTable planType={PlanListType.Init} enabled={false} plansFromCE={true} constructionsiteid={id.valueOf()} readonly={readonly}/>
				</CustomTabPanel>
				<CustomTabPanel value={tabValue} index={2}>
					<PlanTable planType={PlanListType.Rejected} enabled={false} plansFromCE={true} constructionsiteid={id.valueOf()} readonly={true}/>
				</CustomTabPanel>
			</MainContainer>
        
        </PageContainer>
    )
}