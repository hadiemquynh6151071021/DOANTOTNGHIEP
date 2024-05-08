"use client";
import { ConstructionListType } from "@/apis/constructionSite";
import Home from "@/app/page";
import { Navigation } from "@/configs/sidebarNavigation";
import CSTable from "@/features/constructionsite/list/CSTable";
import Login from "@/features/login/Login";
import { isTokenExpired } from "@/features/login/LoginSection";
import PageContainer from "@/layouts/PageContainer";
import { useEffect, useState } from "react";

export default function Page() {
    

    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('accessToken');
        setToken(storedToken);
    }, []);

    if (token !== null) {
        return (
            <PageContainer
                breadcrumbs={[
                    {
                        text: "Trang chủ",
                        href: "/home"
                    },
                    {
                        text: "Công trình",
                    },
                ]}
            >
                <CSTable constructionType={ConstructionListType.Approved}/> 
            </PageContainer>
        );
    } else {
        return <Home/>;
    }   
}