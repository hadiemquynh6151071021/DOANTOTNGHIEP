"use client";

import FieldValue from "@/components/FieldValue";
import Icon from "@/components/Icon";
import { Gauge } from '@mui/x-charts/Gauge';
// or
import { Gauge } from '@mui/x-charts';

interface IPlanOverviewProps {
	plId: string;
	plName: string;
	startDate: Date;
	endDate: Date;
	creator: string;
	createTime: Date;
	approver: string;
	approvedTime: Date;
	csId: string;
	csName: string;
	totalNumberOfEmployees: number;
	totalNumberOfLabors: number;
	Supervision: string;
}

export default function PlanOverviewSection({
		plOverView: {
		  plId,
		  plName,
		  startDate,
		  endDate,
		  creator,
		  createTime,
		  approver,
		  approvedTime,
		  csId,
		  csName,
		  totalNumberOfEmployees,
		  totalNumberOfLabors,
		  Supervision,
		},
	  }: {
		plOverView: IPlanOverviewProps;
	  }) {
	return (
		<section className=" flex-col p-4 rounded-md bg-white">
		<p className=" text-xl text-[#487EB0]">{plName}</p>
		<p className=" text-text-color">{plId}</p>
		<div className=" grid grid-cols-3 mt-3">
		  <div className="col-span-1 flex flex-col gap-4">
			<FieldValue label="Ngày bắt đầu">
			  {startDate.toLocaleString("en-gb")}
			</FieldValue>
			<FieldValue label="Ngày kết thúc">
			  {endDate.toLocaleString("en-gb")}
			</FieldValue>
			<FieldValue label="Người tạo">{creator}
			  <span>
				  <Icon name="arrow-up-right-from-square" size="lg"  className=" text-text-color"/>
			  </span>
			</FieldValue>
			<FieldValue label="Thời gian tạo">
			  {createTime.toLocaleString("en-gb")}
			</FieldValue>
			<FieldValue label="Người duyệt">{approver}
			  <span>
				  <Icon name="arrow-up-right-from-square" size="lg"  className=" text-text-color"/>
			  </span>
			</FieldValue>
			<FieldValue label="Ngày duyệt">
			  {approvedTime.toLocaleString("en-gb")}
			</FieldValue>
		  </div>
		  <div className="col-span-1 flex flex-col gap-4">
			<FieldValue label="Công trình">
			  {csId}-{csName}
			  <span>
				  <Icon name="arrow-up-right-from-square" size="lg"  className=" text-text-color"/>
			  </span>
			</FieldValue>
			<FieldValue label="Tổng công việc">
			  {totalNumberOfEmployees}
			</FieldValue>
			<FieldValue label="Tổng nhân công">{totalNumberOfLabors}</FieldValue>
		  </div>
		  <div className=" flex mr-16">
			<div className=" grow"><Gauge width={100} height={100} value={60} /></div>
			<div className=" grid grid-cols-3 flex-none gap-1">
			  <div className=" col-span-2 my-auto font-semibold">Hạng mục</div>
			  <div className=" row-span-2 flex justify-center items-center text-3xl font-extrabold text-[#1ABC9C]">27%</div>
			  <div className=" col-span-2 my-auto  text-text-color">
				Hoàn thành: <span>12/40</span>
			  </div>
			  <div className=" col-span-2 my-auto font-semibold">Công việc</div>
			  <div className=" row-span-2 flex justify-center items-center text-3xl font-extrabold text-[#3498DB]">40%</div>
			  <div className=" col-span-2 text-center my-auto text-text-color">
				Hoàn thành: <span>20/60</span>
			  </div>
			</div>
		  </div>
		</div>
	  </section>
	)
}

// export interface IPDetailProps {
	
//   }
  
//   export default function PlanInfo({
// 	plInfo: {
// 	  plId,
// 	  plName,
// 	  startDate,
// 	  endDate,
// 	  creator,
// 	  createTime,
// 	  approver,
// 	  approvedTime,
// 	  csId,
// 	  csName,
// 	  totalNumberOfEmployees,
// 	  totalNumberOfLabors,
// 	  Supervision,
// 	},
//   }: {
// 	plInfo: IPDetailProps;
//   }) {
// 	return (
// 	  <section className=" flex-col p-4 rounded-md bg-white">
// 		<p className=" text-xl text-[#487EB0]">{plName}</p>
// 		<p className=" text-text-color">{plId}</p>
// 		<div className=" grid grid-cols-3 mt-3">
// 		  <div className="col-span-1 flex flex-col gap-4">
// 			<FieldValue label="Ngày bắt đầu">
// 			  {startDate.toLocaleString("en-gb")}
// 			</FieldValue>
// 			<FieldValue label="Ngày kết thúc">
// 			  {endDate.toLocaleString("en-gb")}
// 			</FieldValue>
// 			<FieldValue label="Người tạo">{creator}
// 			  <span>
// 				  <Icon name="arrow-up-right-from-square" size="lg"  className=" text-text-color"/>
// 			  </span>
// 			</FieldValue>
// 			<FieldValue label="Thời gian tạo">
// 			  {createTime.toLocaleString("en-gb")}
// 			</FieldValue>
// 			<FieldValue label="Người duyệt">{approver}
// 			  <span>
// 				  <Icon name="arrow-up-right-from-square" size="lg"  className=" text-text-color"/>
// 			  </span>
// 			</FieldValue>
// 			<FieldValue label="Ngày duyệt">
// 			  {approvedTime.toLocaleString("en-gb")}
// 			</FieldValue>
// 		  </div>
// 		  <div className="col-span-1 flex flex-col gap-4">
// 			<FieldValue label="Công trình">
// 			  {csId}-{csName}
// 			  <span>
// 				  <Icon name="arrow-up-right-from-square" size="lg"  className=" text-text-color"/>
// 			  </span>
// 			</FieldValue>
// 			<FieldValue label="Tổng công việc">
// 			  {totalNumberOfEmployees}
// 			</FieldValue>
// 			<FieldValue label="Tổng nhân công">{totalNumberOfLabors}</FieldValue>
// 		  </div>
// 		  <div className=" flex mr-16">
// 			<div className=" grow"></div>
// 			<div className=" grid grid-cols-3 flex-none gap-1">
// 			  <div className=" col-span-2 my-auto font-semibold">Hạng mục</div>
// 			  <div className=" row-span-2 flex justify-center items-center text-3xl font-extrabold text-[#1ABC9C]">27%</div>
// 			  <div className=" col-span-2 my-auto  text-text-color">
// 				Hoàn thành: <span>12/40</span>
// 			  </div>
// 			  <div className=" col-span-2 my-auto font-semibold">Công việc</div>
// 			  <div className=" row-span-2 flex justify-center items-center text-3xl font-extrabold text-[#3498DB]">40%</div>
// 			  <div className=" col-span-2 text-center my-auto text-text-color">
// 				Hoàn thành: <span>20/60</span>
// 			  </div>
// 			</div>
// 		  </div>
// 		</div>
// 	  </section>
// 	);
//   }