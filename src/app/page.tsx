"use client";
import CSTable from "@/features/constructionsite/list/CSTable";
import CSTableToolbar from "@/features/constructionsite/list/CSTableToolbar";
import Login from "@/features/login/Login";
import PlanTable from "@/features/plan/list/PlanTable";

export default function Home() {
  return (
    // <Login />
    // <CSTableToolbar/>
    <CSTable constructionType={1}/>
  );
}
