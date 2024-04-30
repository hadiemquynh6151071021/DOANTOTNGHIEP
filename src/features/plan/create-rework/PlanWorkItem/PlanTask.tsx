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
	onChangeTask,
}: {
	task: ITempPlanTask,
	orderIndex: number;
	onChangeTask: (newTask: ITempPlanTask) => void;
}) {
	const {
		isSelected,

		startDate,
		endDate,
		taskCode,
		taskName,

		labors,
		products
	} = task;
	const [currentStartDate, setCurrentStartDate] = useState<Dayjs | null>(null);
	const [currentEndDate, setCurrentEndDate] = useState<Dayjs | null>(null);

	const {
		setModal,
	} = useModal();

	const duration = (endDate != null && startDate != null)
		? (getDuration(startDate, endDate)) : 0;

	function handleChangeIsSelected(e: ChangeEvent<HTMLInputElement>) {
		onChangeTask({
			...task,
			isSelected: e.target.checked
		});
	}

	function handleChangeStartDate(value: Dayjs | null) {
		setCurrentStartDate(value);
		onChangeTask({
			...task,
			startDate: value?.toDate() ?? null
		})
	}

	function handleChangeEndDate(value: Dayjs | null) {
		setCurrentEndDate(value);
		onChangeTask({
			...task,
			endDate: value?.toDate() ?? null
		});
	}

	return (
		<div className="h-16 pl-16 pr-2 flex justify-between items-center hover:bg-content bg-white">
			<div className="flex gap-6 items-center">
				<Checkbox
					checked={isSelected}
					onChange={handleChangeIsSelected}
				/>
				<div className="w-6 text-apple-gray text-end">
					{orderIndex}
				</div>
			</div>
			<div className="flex w-120 gap-3 ">
				<span className="font-semibold">
					{taskName}
				</span>
				<span className="text-apple-gray">
					#{taskCode}
				</span>
			</div>
			<DatePicker
				label="Ngày bắt đầu"
				format="DD-MM-YYYY"
				value={currentStartDate}
				slotProps={{ textField: { size: "small" } }}
				minDate={dayjs()}
				maxDate={currentEndDate ?? undefined}
				onChange={handleChangeStartDate}
			/>
			<DatePicker
				label="Ngày kết thúc"
				format="DD-MM-YYYY"
				slotProps={{ textField: { size: "small" } }}
				minDate={currentStartDate ?? undefined}
				onChange={handleChangeEndDate}
			/>
			<div className="w-24 text-end">
				{duration} ngày
			</div>
			<IconButton
				name="up-right-from-square"
				onClick={() => {
					setModal({
						children:
							<PopupTaskDetail
								key={labors.toString()}
								labors={labors}
								products={products}
								onChangeLabors={(newLabors: IEmployee[]) => {
									onChangeTask({
										...task,
										labors: newLabors
									});
								}}
							/>
					});
				}}
			/>
		</div>
	)
}

