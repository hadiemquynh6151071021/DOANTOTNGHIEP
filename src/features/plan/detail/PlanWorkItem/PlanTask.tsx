import IconButton from "@/components/IconButton"; 
import useModal from "@/hooks/useModal";
import ICostEstimateTaskProduct from "@/models/CostEstimateTaskProduct";
import { IEmployee } from "@/models/Employee";
import { getDuration } from "@/utils/functions/getDuration";
import { Checkbox } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { ChangeEvent, useState } from "react";
import PopupTaskDetail from "./PopupTaskDetail/PopupTaskDetail";
import IPlanTask from "@/models/PlanTask";

export interface ITempPlanTask {
	isSelected: boolean; // TEMP
	orderIndex: number; // NEW

	taskId: number; // NEW
	taskName: string;
	taskCode: string;
	amountOfWork: number; // NEW
	quantityUnitName: string;
	quantityUnitId: number;

	startDate: Date | null; // NEW
	endDate: Date | null; // NEW

	// for popup
	labors: IEmployee[];
	products: ICostEstimateTaskProduct[]; // NOTICE
}


export default function Task({
	task,
	orderIndex,
	// onChangeTask,
}: {
	task: IPlanTask,
	orderIndex: number;
	// onChangeTask: (newTask: IPlanTask) => void;
}) {
	const {
		isSelected,

		startdate,
		enddate,
		taskcode,
		taskname,

		// labors,
		// products
	} = task;

	const {
		setModal,
	} = useModal();

	// function handleChangeIsSelected(e: ChangeEvent<HTMLInputElement>) {
	// 	onChangeTask({
	// 		...task,
	// 		isSelected: e.target.checked
	// 	});
	// }

	return (
		<div className="h-16 pl-16 pr-2 flex justify-between items-center hover:bg-content bg-white">
			<div className="flex w-100 gap-2">
				<span className="font-semibold">
					{orderIndex}
				</span>
			</div>
			<div className="flex w-96 gap-2 ">
				<div>
					<span className="font-semibold">
						{/* {taskName} */}
						{task.taskname}
					</span>
					<span className="text-apple-gray">
						{/* #{taskCode} */}
						#{task.taskcode}
					</span>
				</div>
			</div>
			<div className="flex w-100 gap-2 ">
				{task.startdate}
			</div>
			<div className="flex w-100 gap-2 ">
				{task.enddate}
			</div>
			<IconButton
				name="up-right-from-square"
				onClick={() => {
					setModal({
						children:
							<PopupTaskDetail
								key={orderIndex}
								planId={task.plantaskid}
								// labors={labors}
								// products={products}
								// onChangeLabors={(newLabors: IEmployee[]) => {
								// 	onChangeTask({
								// 		...task,
								// 		labors: newLabors
								// 	});
								// }}
							/>
					});
				}}
			/>
		</div>
	)
}

