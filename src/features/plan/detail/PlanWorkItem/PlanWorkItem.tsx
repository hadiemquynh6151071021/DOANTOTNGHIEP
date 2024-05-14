"use client";
import Icon from "@/components/Icon";
import { ChangeEvent, useState } from "react";
import Task, { ITempPlanTask } from "./PlanTask";
import useModal from "@/hooks/useModal";
import IPlanWorkItem from "@/models/PlanWorkItem";

export interface IPlanWorkItemProps {
	orderIndex: number,
	workItem: IPlanWorkItem;
	onWorkItemChange: (newOne: IPlanWorkItem) => void;
}

export default function PlanWorkItem({
	orderIndex,
	workItem,
	//onWorkItemChange,
}:{
	orderIndex: number,
	workItem: IPlanWorkItem
}) {
	const {
		isSelected,
		orderindex,
		workitemid,
		workitemCode,
		workitemname,
		employeeid,
		firstname,
		idcard,
		lastname,
		userid,
		mdTasks
	} = workItem;
	const { setModal, setIsOpenModal } = useModal();
	const [isShow, setIsShow] = useState(true);

	const x = 1+1;

	function handleChangeIsShow() {
		setIsShow(!isShow);
	  }

	// function handleChangeIsSelected(e: ChangeEvent<HTMLInputElement>) {
	// 	onWorkItemChange({
	// 		...workItem,
	// 		isSelected: e.target.checked
	// 	});

	// 	setIsShow(false);
	// }

	return (
		<section className="flex flex-col">
			<header className="sticky top-16 h-14 px-2 flex gap-6 items-center justify-start text-apple-gray bg-apple-gray-6 border-t z-10 overflow-hidden">
				<Icon
					className="grid place-items-center w-8 h-8 cursor-pointer hover:text-dark "
					name={isShow ? "angle-down" : "angle-right"}
					onClick={handleChangeIsShow}
				/>

				<span className="w-6 text-end">{orderindex}</span>
				<div className="w-140 flex gap-3  ">
					<p className="text-dark font-semibold">{workitemname}</p>
					<span className="text-apple-gray">#{workitemCode}</span>
					<p className="flex gap-2">
								<span className="font-bold">
									{/* {supervisor.firstname + " " + supervisor.lastname} */}
									{firstname + " " + lastname}
								</span>
								{/* {supervisor.employeeid} */}
								{employeeid}
					</p>
					<p className="flex gap-2">
						
								4/4
					</p>
					<p className="flex gap-2">
								100%
					</p>
					<span
						className={` px-3  ${
							x == 1
							? "bg-[#CCE0F1] text-[#3498DB]"
							: (x == 2
							? "bg-[#EAE5A5] text-[#C9B917]"
							: (x == 3
							? "bg-[#C7E7E5] text-[#30C1A5]"
							: (x == 4
							? "bg-[#ebbfba] text-[#E74C3C]"
							: "bg-[#ebbfba] text-[#E74C3C]")))
						} rounded-3xl font-semibold w-fit`}
						>
          				{/* {stateName} */}
						Done
        			</span>
				</div>
				<section className="flex items-center gap-2 ml-auto">
					<div className="flex gap-3 items-center ">
					
					</div>
					{/* <IconButton
						className=""
						name="user-plus"
						tooltip="Thêm người giám sát"
						onClick={() => {
							setModal({
								children: (
									<PopupAddSupervisor
										selectedSupervisorId={supervisor?.employeeid}
										onChangeSupervisor={(newSupervisor?: IEmployee) => {
											onWorkItemChange({
												...workItem,
												supervisor: newSupervisor,
											});

											setIsOpenModal(false);
										}}
									/>
								),
							});
						}}
					/> */}
				</section>
			</header>
			{isShow &&
				workItem.mdTasks.map((task, idx) => (
					<Task
						key={task.taskcode}
						task={task}
						orderIndex={idx + 1}
					/>
				))}
		</section>
	)
}