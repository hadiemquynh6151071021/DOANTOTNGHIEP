import CreateDiary from "@/features/diary/create/CreateDiary";
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
                    text: "Nhật ký công trình",
                    href: "/construction-diaries"
                },
                {
                    text: "Tạo mới",
                }
            ]}
        >
            <CreateDiary />
        </PageContainer>
    )
}