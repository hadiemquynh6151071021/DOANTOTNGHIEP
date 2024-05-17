"use client";
import FieldValue from "@/components/FieldValue";
import Icon from "@/components/Icon";
import { IPlanOverviewProps } from "@/models/Plan";
import ApexCharts from "apexcharts";
import { useEffect } from "react";

export default function PlanOverviewSection({
  plOverView,
  numberOfWorkItems,
  numberOfTasks,
  numberOfTasksDone
}: {
  plOverView: IPlanOverviewProps;
  numberOfWorkItems: number;
  numberOfTasks: number;
  numberOfTasksDone: number;
}) {
  useEffect(() => {
	// alert(numberOfTasksDone.valueOf)
    var wkchart = {
      series: [90, Math.floor((100/numberOfTasks)*numberOfTasksDone)],
      chart: {
        height: 280,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 370,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
          barLabels: {
            enabled: true,
            useSeriesColors: true,
            margin: 0,
            fontSize: "12px",
            formatter: function (seriesName, opts) {
              return (
                ""
                // seriesName
              );
            },
          },
        },
      },
      colors: ["#1ab7ea", "#0084ff"],
      labels: ["Hạng mục", "Công việc"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    };
    var chart = new ApexCharts(document.querySelector("#chart"), wkchart);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <section className=" flex-col p-4 rounded-md bg-white">
      <p className=" text-xl text-[#487EB0]">{plOverView.planname}</p>
      <p className=" text-text-color">#{plOverView.planidcode}</p>
      <div className=" flex flex-grow mt-3">
        <div className="basis-1/3 flex flex-col gap-y-4">
          <FieldValue label="Ngày bắt đầu">
            {plOverView.startdate.toLocaleString("en-gb")}
          </FieldValue>
          <FieldValue label="Ngày kết thúc">
            {plOverView.enddate.toLocaleString("en-gb")}
          </FieldValue>
          <FieldValue label="Người tạo">
            {plOverView.mdEmployee.firstname +
              " " +
              plOverView.mdEmployee.lastname}
            <span>
              <Icon
                name="arrow-up-right-from-square"
                size="lg"
                className=" text-text-color"
              />
            </span>
          </FieldValue>
          <FieldValue label="Thời gian tạo">
            {plOverView.createddate.toLocaleString("en-gb")}
          </FieldValue>
          {/* <FieldValue label="Người duyệt">{plOverView.approver}
			  <span>
				  <Icon name="arrow-up-right-from-square" size="lg"  className=" text-text-color"/>
			  </span>
			</FieldValue> */}
          {/* <FieldValue label="Ngày duyệt">
			  {plOverView.approvedTime.toLocaleString("en-gb")}
			</FieldValue> */}
        </div>
        <div className="basis-1/3 flex flex-col gap-y-4">
          <FieldValue label="Công trình">
            {plOverView.mdConstructionSite.constructionsitecode}-
            {plOverView.mdConstructionSite.constructionsitename}
            <span>
              <Icon
                name="arrow-up-right-from-square"
                size="lg"
                className=" text-text-color"
              />
            </span>
          </FieldValue>
          <FieldValue label="Tổng công việc">{numberOfTasks}</FieldValue>
          <FieldValue label="Người giám sát">
            {plOverView.mdEmployees[0].firstname +
              " " +
              plOverView.mdEmployees[0].lastname}
          </FieldValue>
        </div>
        <div className="basis-1/3 flex">
          <div className="flex flex-row">
            <div id="chart"></div>
          </div>
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
  );
}

