'use client'
import LayoutContainer from "@/layouts/LayoutContainer";
import { useEffect, useState } from "react";

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
    }, []);

    if (token !== null) {
        return (
            <LayoutContainer>
                {children}
            </LayoutContainer>
        )
    }
    else{
        return(
            <div>
                {children}
            </div>
        )
    }
}