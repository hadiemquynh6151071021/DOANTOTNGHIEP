"use client";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Icon from "@/components/Icon";
import costEstimateAPI from "@/apis/costEstimate";
import PlanWorkItem from "./PlanWorkItem";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import useAlert from "@/hooks/useAlert";
// import { ITempPlanTask } from "./PlanTask";
// import { IEmployee } from "@/models/Employee";
import ICostEstimateTaskProduct from "@/models/CostEstimateTaskProduct";
import { isAxiosError } from "axios";
import IPlanWorkItem from "@/models/PlanWorkItem";

// export interface IPlanWorkItemSectionProps {
// 	costEstimateId: number;
// 	// handleCreatePlan: (workItems: ITempPlanWorkItem[]) => void;
// }


export default function PlanWorkItemSection({
  plworkitem,
  numberOfWorkItems,
  numberOfTasks,
}: {
  plworkitem: IPlanWorkItem[];
  numberOfWorkItems: number;
  numberOfTasks: number;
}) {
  const [formatData,setFormatData] = useState<IPlanWorkItem[]>([]);

  function removeDuplicateTasks(data) {
    return data.map(item => {
        const uniqueTasks = {};
        const newTasks = [];

        item.mdTasks.forEach(task => {
            const taskKey = `${task.taskid}-${task.plantaskid}-${task.startdate}-${task.enddate}`;
            if (!uniqueTasks[taskKey]) {
                uniqueTasks[taskKey] = true;
                newTasks.push(task);
            }
        });

        return {
            ...item,
            mdTasks: newTasks
        };
    });
  }

  useEffect(() => {
    const temp = removeDuplicateTasks(plworkitem);
    setFormatData(temp);
  },[])

  return (
    <section className="flex-grow pb-6 flex flex-col bg-white rounded-md mt-6 ">
      <header className="h-12 px-10 text-apple-gray bg-white flex gap-10 items-center rounded-t-md">
        <p className="w-60">
          <span className="font-semibold">Số lượng hạng mục</span>{" "}
          {numberOfWorkItems}
        </p>
        <p className="w-60">
          <span className="font-semibold">Số lượng công việc</span>{" "}
          {numberOfTasks}
        </p>
      </header>

       {plworkitem.map((wi, idx) => (
        <PlanWorkItem
          key={wi.workitemid}
          orderIndex={idx + 1}
          workItem={wi}
        />
      ))}
    </section>
  );
}

