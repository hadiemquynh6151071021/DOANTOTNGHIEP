import Login from "@/features/login/Login"
import PlanDetail from "@/features/plan/detail/PlanDetail"
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
                    text: "Chi tiết Kế hoạch",
                },
            ]}
        >
            <MainContainer>
                <PlanDetail planId={id} />
            </MainContainer>
        </PageContainer>
    )
}

// export async function getServerSideProps(context) {
//     const { query } = context;
//     const id = query.id ? parseInt(query.id) : null;

//     return {
//         props: {
//             id: id
//         }
//     };
// }

// import { useRouter } from 'next/router';
// import PlanDetail from "@/features/plan/detail/PlanDetail";
// import MainContainer from "@/layouts/MainContainer";
// import PageContainer from "@/layouts/PageContainer";
// import Login from '@/features/login/Login';

// export default function PlanPage() {
//     const router = useRouter();
//     const { query } = router;
//     const id = Array.isArray(query.id) ? parseInt(query.id[0]) : parseInt(query.id);
//     const constructionSiteId = Array.isArray(query.constructionsiteid) ? parseInt(query.constructionsiteid[0]) : parseInt(query.constructionsiteid);

//     return (
//         <PageContainer
//             breadcrumbs={[
//                 {
//                     text: "Trang chủ",
//                     href: "/home"
//                 },
//                 {
//                     text: "Kế hoạch",
//                     href: "../plans",
//                 },
//                 {
//                     text: "Chi tiết",
//                 },
//             ]}
//         >
//             <MainContainer>
//             {id ? <PlanDetail planId={id} /> : constructionSiteId ? <Login /> : null}
//             </MainContainer>
//         </PageContainer>
//     )
// }


