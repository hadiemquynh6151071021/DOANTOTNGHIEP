
import PlanApprove from "@/features/plan/approve/PlanApprove"
import MainContainer from "@/layouts/MainContainer"
import PageContainer from "@/layouts/PageContainer"

export default function Page({
    params: { id } 
}: {
    params: { id: number }
}) {
 
    
    return (
        <PageContainer
            breadcrumbs={[
                {
                    text: "Trang chủ",
                    href: "/home"
                },
                {
                    text: "Kế hoạch",
                    href: "../plans",
                },
                {
                    text: "Duyệt kế hoạch",
                },
            ]}
        >
            <MainContainer>
                <PlanApprove planId={id}/>         
            </MainContainer>
        </PageContainer>
    )
}