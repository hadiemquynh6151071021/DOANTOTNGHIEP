import PageContainer from "@/layouts/PageContainer";

export default function Page() {
    return (
        <PageContainer breadcrumbs={[
			{
				text: "Trang chủ",
				href: "/home"
			},
			{
				text: "Dự toán"
			}
        ]}>
            
        </PageContainer>
    )
}