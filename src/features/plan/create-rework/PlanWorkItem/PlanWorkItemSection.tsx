"use client";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Icon from "@/components/Icon";
import costEstimateAPI from "@/apis/costEstimate";
import PlanWorkItem from "./PlanWorkItem";
import useLoadingAnimation from "@/hooks/useLoadingAnimation";
import useAlert from "@/hooks/useAlert";
import { ITempPlanTask } from "./PlanTask";
import { IEmployee } from "@/models/Employee";
import ICostEstimateTaskProduct from "@/models/CostEstimateTaskProduct";
import { isAxiosError } from "axios";
import { IAddress } from "@/models/ConstructionSite";
import { CenterPoint } from "@/models/CenterPoint";
import employeeAPI from "@/apis/employee";

export interface IPlanWorkItemSectionProps {
	costEstimateId: number;
	addressCS: IAddress;
	handleCreatePlan: (workItems: ITempPlanWorkItem[]) => void;
}

export interface ITempPlanWorkItem {
	isSelected: boolean;
	orderIndex: number;
	supervisor?: IEmployee;

	workItemId: number;
	workItemCode: string;
	workItemName: string;

	tasks: ITempPlanTask[];
}

export default function PlanWorkItemSection({
	costEstimateId,
	addressCS,
	handleCreatePlan,
}: IPlanWorkItemSectionProps) {
	const setLoading = useLoadingAnimation();
	const setAlert = useAlert();
	const listCostestimateTaskId = new Set<number>();
	const startIndex: number = 0;

	const [workItems, setWorkItems] = useState<ITempPlanWorkItem[]>([])
	const [kmeansInput, setKmeansInput] = useState<CenterPoint[]>([]);

	const selectedWorkItems = workItems.filter(wi => wi.isSelected);
	const totalOfTasks = workItems.reduce((res, currentWI) => {
		return res + currentWI.tasks.length;
	}, 0);
	const totalOfSelectedTasks = selectedWorkItems.reduce((res, currentWI) => {
		return res + currentWI.tasks.filter(t => t.isSelected).length;
	}, 0);

	useEffect(() => {
		fetchWorkItems();
	}, []);

	async function fetchWorkItems() {
		setLoading(true);

		try {
			const workItemRes = await costEstimateAPI.getListCostEstimateTasks(costEstimateId);

			const products: ICostEstimateTaskProduct[][][] = [];
			for (let i = 0; i < workItemRes.length; i++) {
				const workItemProducts: ICostEstimateTaskProduct[][] = [];

				const tasks = workItemRes[i].taskDTOs;
				for (let j = 0; j < tasks.length; j++) {
					const task = tasks[j];
					const productsRes = await costEstimateAPI.getListCostEstimateTaskProducts(task.costestimatetaskid);
					workItemProducts.push(productsRes);
					listCostestimateTaskId.add(task.costestimatetaskid.valueOf());
				}

				products.push(workItemProducts);
			}

			// const kmeansInput = await costEstimateAPI.getKmeansInput(Array.from(listCostestimateTaskId));
			// setKmeansInput(kmeansInput);
			
			const newWorkItems: ITempPlanWorkItem[] = workItemRes.map((wi, workItemIndex) => {
				const tasks: ITempPlanTask[] = wi.taskDTOs.map((t, taskIndex) => {
					return ({
						isSelected: true,
						orderIndex: taskIndex + 1,
						taskId: t.taskid,

						taskName: t.taskname,
						taskCode: t.taskcode,
						amountOfWork: 10,
						quantityUnitId: t.quantityunitid,
						quantityUnitName: t.quantityunitname,
						costestimatetaskid: t.costestimatetaskid,

						startDate: null,
						endDate: null,

						labors: [],
						products: products[workItemIndex][taskIndex],
					});
				});

				const workItem: ITempPlanWorkItem = ({
					isSelected: true,
					orderIndex: workItemIndex + 1,

					workItemId: wi.workitemid,
					workItemCode: wi.workitem_code,
					workItemName: wi.workitemname,

					supervisor: undefined,

					tasks: tasks
				});

				return workItem;
			});

			setWorkItems(newWorkItems);
		}
		catch (error) {
			if (isAxiosError(error)) {
				setAlert({
					message: error.message,
					severity: "error"
				});
			}
			else
				setAlert({
					message: "Xảy ra lỗi khi lấy dữ liệu danh sách Công việc trong Dự toán",
					severity: "error"
				});
		}
		finally {
			setLoading(false);
		}
	}

	return (
		<section className="flex-grow pb-6 flex flex-col bg-white rounded-md ">
			<header className="h-12 px-10 text-apple-gray bg-white flex gap-10 items-center rounded-t-md">
				<p className="w-60">
					<span className="font-semibold">Số lượng hạng mục</span>
					{' '}{selectedWorkItems.length}/{workItems.length}
				</p>
				<p className="w-60">
					<span className="font-semibold">Số lượng công việc</span>
					{' '}{totalOfSelectedTasks}/{totalOfTasks}
				</p>
			</header>
			{workItems.map((wi, idx) => (
				<PlanWorkItem
					key={wi.workItemId}
					kmeansInput={kmeansInput}
					orderIndex={idx + 1}
					workItem={wi}
					addressCS={addressCS}
					onWorkItemChange={(newWorkItem: ITempPlanWorkItem) => {
						const index = workItems.findIndex(wi => wi.workItemId == newWorkItem.workItemId);

						setWorkItems([
							...workItems.slice(0, index),
							newWorkItem,
							...workItems.slice(index + 1),
						]);
					}}
				/>
			))}
			<footer className="h-40 p-3 flex justify-end items-center gap-5">
				<Button
					color="success"
					className="min-w-[100px] bg-success flex justify-center items-center gap-5"
					variant="contained"
					onClick={() => handleCreatePlan(workItems)}
				>
					<Icon name="floppy-disk" size="xl" />
					Lưu
				</Button>
			</footer>
		</section>
	)
}