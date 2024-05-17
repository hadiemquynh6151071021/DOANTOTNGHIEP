import ICostEstimateTaskProduct from "@/models/CostEstimateTaskProduct";
import { IPlanTaskProduct } from "@/models/PlanTask";
import { Avatar } from "@mui/material";
// TODO: Finished this
export default function TaskProductSection({
    products
}: {
    products: IPlanTaskProduct[];
}) {
    return (
        <>
            <div className="flex-shrink-0 h-14 px-6 flex justify-between items-center bg-apple-gray-6">
                <p>
                    <span className="font-bold">Tổng số vật tư</span> {products.length}
                </p>
            </div>
            <div className="h-full p-2 flex flex-col gap-2 overflow-auto ">
                {products.map((product, idx) => (
                    <div
                    key={product.mdProduct.productid}
                    className="flex-shrink-0 h-20 px-3 grid grid-cols-4 items-center justify-items-start hover:bg-apple-gray-6 cursor-pointer rounded-md"
                >
                    <Avatar>{product.mdProduct.productname?.[0]}</Avatar>
                    <span>{product.mdProduct.productid}</span>
                    <span>{product.mdProduct.productname}</span>
                    <span>{product.mdProduct.mdQuantityUnit.quantityunitname}</span>
                    {/* <IconButton
                        className="justify-self-end"
                        name="user-xmark"
                        tooltip="Bỏ chọn nhân công"
                        onClick={onUnselectLabor}
                    /> */}
                </div> 
                ))}
            </div>
        </>
    )
}