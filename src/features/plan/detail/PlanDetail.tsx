"use client";

import useAlert from "@/hooks/useAlert";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import IPlan from "@/models/Plan";
import { useEffect, useState } from "react";
import PlanOverviewSection from "./PlanOverviewSection";
import IPlanWorkItem from "@/models/PlanWorkItem";
import PlanWorkItemLayout from "./PlanWorkItem/PlanWorkItemLayout";
import { ICostEstimate } from "../create-rework/CreatePlan";
import PlanWorkItemSection from "./PlanWorkItem/PlanWorkItemSection";

interface IPlanDetailProps {
    planId: number;
}

export default function PlanDetail({
    planId
}: IPlanDetailProps) {
    // SUP
    const setAlert = useAlert();
    const setLoading = useLoadingAnimation();

    // Data
    const [planOverview, setPlanOverview] = useState<IPlan>();
    const [planWorkItems, setPlanWorkItems] = useState<IPlanWorkItem[]>([]);
    const [viewState, setViewState] = useState<"list" | "gantt">("list");
    const [costEstimateId, setCostEstimateId] = useState<number>();
    const [planEstimate, setPlanEstimate] = useState<ICostEstimate>({
        planName: "",
        startDate: null,
        endDate: null,
    });

    useEffect(() => {
        fetchPlan();
    }, []);

    async function fetchPlan() {
        setLoading(true);
        try {
            // Call API plan overview + workitems
            // Set to states
        }
        catch (ex) {
            setAlert({
                message: "Xảy ra lỗi trong quá trình load Kế hoạch! Vui lòng thử lại.",
                severity: "error"
            });
        }
        finally {
            setLoading(false);
        }
    }
    const fakeData = {
        plId: "ABC123",
        plName: "Kế hoạch ABC",
        startDate: new Date(),
        endDate: new Date(),
        creator: "Người tạo",
        createTime: new Date(),
        approver: "Người duyệt",
        approvedTime: new Date(),
        csId: "CS001",
        csName: "Công trình XYZ",
        totalNumberOfEmployees: 100,
        totalNumberOfLabors: 50,
        Supervision: "Supervisor",
      };
    return (
        <div className="pt-5 flex flex-col gap-10">

            <PlanOverviewSection  plOverView={
                    fakeData
                }/>
            <PlanWorkItemLayout
                    onClickChangeView={(newState: "list" | "gantt") => {
                        //setViewState(newState);
                    }}
                >
                    {viewState == "list" ? (
                        <PlanWorkItemSection
                            key={costEstimateId}
                            costEstimateId={costEstimateId}
                        />
                    ) : (
                        <div className="w-full min-h-full">

                        </div>
                    )}
                </PlanWorkItemLayout>
        </div>
    )
}