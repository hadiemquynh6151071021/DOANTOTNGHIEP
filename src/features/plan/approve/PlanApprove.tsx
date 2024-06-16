"use client";

import planAPI from "@/apis/plan";
import useAlert from "@/hooks/useAlert";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import { IPlanOverviewProps } from "@/models/Plan";
import IPlanWorkItem from "@/models/PlanWorkItem";
import { useEffect, useState } from "react";
import PlanOverviewSection from "./PlanOverviewSection";
import PlanWorkItemLayout from "./PlanWorkItem/PlanWorkItemLayout";
import PlanWorkItemSection from "./PlanWorkItem/PlanWorkItemSection";
import { Button } from "@mui/material";
import Icon from "@/components/Icon";
import { ISaveHistory } from "@/models/ISaveHistory";
import router from "next/router";



export default function PlanApprove({ planId }: { planId: number }) {
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
    numberOfTasks += item.mdTasks.length;
  });

  useEffect(() => {
    fetchPlanDetail();
  }, []);

  function rejectConfirm(): void {

    const employeeId = parseInt(localStorage.getItem("employeeId"));

    var temp: ISaveHistory = {
      id: planId,
      actorid: employeeId,
      actionid: 3,
      description: "Đã từ chối duyệt",
    };

    try {
      planAPI.saveApprove(temp);
      setAlert({ severity: "success", message: "Xác nhận thành công" });
      router.push("/plans");
    } catch (error) {
      console.log(error);
    }
  }

  function handleSubmitConfirm(): void {

    const employeeId = parseInt(localStorage.getItem("employeeId"));

    var temp: ISaveHistory = {
      id: planId,
      actorid: employeeId,
      actionid: 2,
      description: "Đã xác nhận duyệt",
    };

    try {
      planAPI.saveApprove(temp);
      setAlert({ severity: "success", message: "Xác nhận thành công" });
      router.push("/plans");
    } catch (error) {
      console.log(error);
    }
  }

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
      <div className="w-5/6 mx-auto flex justify-end gap-3 mb-3">
        <Button
          color="error"
          className="min-w-[100px] bg-red-600 flex justify-center items-center gap-3"
          variant="contained"
          onClick={() => rejectConfirm()}
        >
          <Icon name="xmark" size="xl" />
          Từ chối
        </Button>
        <Button
          color="info"
          className="min-w-[100px] bg-primary flex justify-center items-center gap-3"
          variant="contained"
          onClick={() => handleSubmitConfirm()}
        >
          <Icon name="check" size="xl" />
          Đồng ý
        </Button>
      </div>
    </div>
  );
}
