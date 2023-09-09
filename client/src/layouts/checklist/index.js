// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/DashboardLayout";
import DashboardNavbar from "examples/DashboardNavbar";

// Overview page components
import Header from "layouts/checklist/components/Header";

import { useMaterialUIController } from "context";
import { ChecklistCategory } from "./components/ChecklistCategory";
import { categories } from "./data/categoryChecklist";

function Overview() {
    const [controller] = useMaterialUIController();
    const { sidenavColor, darkMode } = controller;

    const iconColor = darkMode ? "white" : "dark";

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox mb={2} />
            <Header themeColor={sidenavColor}>
                {categories.map((category) => (
                    <ChecklistCategory
                        key={category.id}
                        category={category}
                        iconColor={iconColor}
                    />
                ))}
            </Header>
        </DashboardLayout>
    );
}

export default Overview;
