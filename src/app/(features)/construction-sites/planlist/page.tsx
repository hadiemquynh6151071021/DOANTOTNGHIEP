import { ConstructionListType } from "@/apis/constructionSite";
import { Navigation } from "@/configs/sidebarNavigation";
import CSTable from "@/features/constructionsite/list/CSTable";
import PageContainer from "@/layouts/PageContainer";

export default function Page() {
    return (
        <PageContainer
            breadcrumbs={[
                {
                    text: "Trang chủ",
                    href: "/home"
                },
                {
                    text: "id",
                },
            ]}
        >
        <CSTable constructionType={ConstructionListType.Approved}/> 
        </PageContainer>
    )
}