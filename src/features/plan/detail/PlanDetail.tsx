"use client";

import useAlert from "@/hooks/useAlert";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import IPlan, { IPlanOverviewProps } from "@/models/Plan";
import { useEffect, useState } from "react";
import PlanOverviewSection from "./PlanOverviewSection";
import IPlanWorkItem from "@/models/PlanWorkItem";
import PlanWorkItemLayout from "./PlanWorkItem/PlanWorkItemLayout";
import { ICostEstimate } from "../create-rework/CreatePlan";
import PlanWorkItemSection from "./PlanWorkItem/PlanWorkItemSection";
import planAPI from "@/apis/plan";

interface IPlanDetailProps {
  planId: number;
}

export default function PlanDetail({ planId }: { planId: number }) {
  // SUP
  const setAlert = useAlert();
  const setLoading = useLoadingAnimation();
  const [viewState, setViewState] = useState<"list" | "gantt">("list");

  // Data
  const [planOverview, setPlanOverview] = useState<IPlanOverviewProps>();
  const [planWorkItems, setPlanWorkItems] = useState<IPlanWorkItem[]>([]);
  const [numberOfTasksDone, setNumberOfTasksDone] = useState<number>();
  const [numberOfWIDone, setNumberOfWIDone] = useState<number>();

  const fetchPlanDetail = async () => {
    const planOverview: IPlanOverviewProps[] =
      (await planAPI.getOverviewPlanById(planId)) || [];
    const listPlanWorkItem =
      (await planAPI.getPlanWorkItemsByPlanId(planId)) || [];
    const numberOfTasksDone: number = parseInt((await planAPI.getCountplantask(planId)).valueOf());
    const numberOfWIDone: number = parseInt((await planAPI.getWorlItemDone(planId)).valueOf());

    setPlanOverview(planOverview[0]);
    setPlanWorkItems(listPlanWorkItem);
    setNumberOfTasksDone(numberOfTasksDone);
    setNumberOfWIDone(numberOfWIDone);
  };

  let numberOfWorkItems = 0;
  let numberOfTasks = 0;
  numberOfWorkItems = planWorkItems.length;
  planWorkItems.map((item) => {
    numberOfWorkItems += 1;
    numberOfTasks += item.mdTasks.length;
  });

  useEffect(() => {
    fetchPlanDetail();
  }, []);

  return (
    <div className="pt-5 flex flex-col gap-10">
      {planOverview != undefined && (
        <div>
          <PlanOverviewSection
            plOverView={planOverview as IPlanOverviewProps}
            numberOfWorkItems={numberOfWorkItems}
            numberOfTasks={numberOfTasks}
            numberOfTasksDone={numberOfTasksDone}
            numberOfWIDone={numberOfWIDone}
          />
          <PlanWorkItemLayout
            onClickChangeView={(newState: "list" | "gantt") => {
              //setViewState(newState);
            }}
          >
            {viewState == "list" ? (
              <PlanWorkItemSection
                plworkitem={planWorkItems as IPlanWorkItem[]}
                numberOfWorkItems={numberOfWorkItems}
                numberOfTasks={numberOfTasks}
                planId={planId}
              />
            ) : (
              <div className="w-full min-h-full"></div>
            )}
          </PlanWorkItemLayout>
        </div>
      )}
    </div>
  );
}
