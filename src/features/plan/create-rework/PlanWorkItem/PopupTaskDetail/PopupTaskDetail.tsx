import {  Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import TaskLaborSection from "./TaskLaborSection/TaskLaborSection";
import TaskProductSection from "./TaskProductSection/TaskProductSection";
import { IEmployee } from "@/models/Employee";
import Icon from "@/components/Icon";
import { CustomTabPanel } from "@/components/TabPanel";
import ICostEstimateTaskProduct from "@/models/CostEstimateTaskProduct";
import costEstimateAPI from "@/apis/costEstimate";
import CostEstimateTaskSkill from "@/models/CostEstiamteTaskSkill";

export default function PopupTaskDetail({
    costestimatetaskid,
    labors,
    products,

    onChangeLabors,
}: {
    costestimatetaskid: number;
    labors: IEmployee[];
    products: ICostEstimateTaskProduct[];
    
    onChangeLabors: (newLabors: IEmployee[]) => void;
}) {
    const [value, setValue] = useState(0);
    const [costestimatetaskskill, setCostestimatetaskskill] = useState<CostEstimateTaskSkill>();

    const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    useEffect(() => {
        //alert('costestimatetaskid 1 la' + costestimatetaskid);
		setupData();
	}, [labors]);

    async function setupData() {
        const listSkillAndRank = await costEstimateAPI.getCostEstimateTaskSkill(costestimatetaskid);
        //console.log('listSkillAndRank',listSkillAndRank);
        setCostestimatetaskskill(listSkillAndRank);
    }
    return (
        <div className="min-w-[800px] h-[560px] flex flex-col bg-white rounded-2xl overflow-hidden">
            <header className="flex-shrink-0 h-16 px-6 flex gap-6 items-center border-b  ">
                <Icon className="text-apple-gray" name="trowel" size="xl" />
                <p>
                    <span className="font-bold mr-2">Xây dựng cơ bản</span>
                    #WI1093
                </p>
                <p>
                    <span className="font-bold mr-2">Đào móng</span>
                    #TSK0301
                    
                </p>
                <p>
                    <span className="font-bold mr-2">700 m3</span>
                </p>
            </header>
            <Tabs value={value} onChange={handleChangeTab}>
                <Tab label="Nhân công" />
                <Tab label="Vật tư" />
            </Tabs> 
            
            <CustomTabPanel
                className="flex-grow flex flex-col overflow-auto"
                value={value}
                index={0}
            >
                <TaskLaborSection
                    key={labors.toString()}
                    costestimatetaskid={costestimatetaskid}
                    labors={labors}
                    onChangeLabors={onChangeLabors}
                />
            </CustomTabPanel>
            <CustomTabPanel
                className="flex-grow flex flex-col overflow-auto"
                value={value}
                index={1}
            >
                <TaskProductSection
                    products={products}
                />
            </CustomTabPanel>
            <footer className="flex-shrink-0 h-10 border-t">

            </footer>
        </div>
    )
}


