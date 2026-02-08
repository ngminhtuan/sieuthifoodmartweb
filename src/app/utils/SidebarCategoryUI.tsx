import { dummyDataListCategory } from "./DumDataListCategory";
import SidebarCategory from "./SidebarCategory";

export default function SidebarCategoryUI() {
    return (
        <SidebarCategory tree={dummyDataListCategory}/>
    )
}