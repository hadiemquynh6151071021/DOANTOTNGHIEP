"use client";
import Icon from "@/components/Icon";
import { ChangeEvent, useEffect, useState } from "react";
import Task, { ITempPlanTask } from "./PlanTask";
import useModal from "@/hooks/useModal";
import IPlanWorkItem from "@/models/PlanWorkItem";
import planAPI from "@/apis/plan";

export interface IPlanWorkItemProps {
	orderIndex: number,
	workItem: IPlanWorkItem;
	onWorkItemChange: (newOne: IPlanWorkItem) => void;
}

export default function PlanWorkItem({
	orderIndex,
	workItem,
	planId
	//onWorkItemChange,
}:{
	orderIndex: number,
	workItem: IPlanWorkItem,
	planId: number
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
	const [amountOfWorkDoneWI, setAmountOfWorkDoneWI] = useState<number>()
	const [percent, setPercent] = useState<number>()

	const x = 1+1;

	function handleChangeIsShow() {
		setIsShow(!isShow);
	  }

	  const fetchData = async () => {
		const amountOfWorkDoneWI : number = parseInt((await planAPI.getCountplantaskDoneOfWorkItem(planId, workItem.workitemid)).valueOf());
		setAmountOfWorkDoneWI(amountOfWorkDoneWI);
		setPercent(parseInt((amountOfWorkDoneWI/workItem.mdTasks.length*100).toFixed(0)))

	  };
	useEffect(() => {
		fetchData()
	})
	

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
						
								{amountOfWorkDoneWI}/{workItem.mdTasks.length}
					</p>
					<p className="flex gap-2">
							{percent}%
					</p>
					<span
						className={` px-3  ${
							percent == 100
							? "bg-[#CCE0F1] text-[#3498DB]"
							: (percent == 0
							? "bg-[#ebbfba] text-[#E74C3C]"
							: (percent < 100
							? "bg-[#EAE5A5] text-[#C9B917]"
							: "bg-[#ebbfba] text-[#E74C3C]"))
						} rounded-3xl font-semibold w-fit`}
						>
						{percent == 100
						? "Hoàn thành"
						: (percent == 0
						? "Chưa xử lý"
						: percent < 100
						? "Đang xử lý": "Xử lý vượt quy định")
					}
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