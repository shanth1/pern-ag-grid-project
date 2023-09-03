// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function Tables() {
    const rowData = [
        { name: "Denis", surname: "Beresnev", age: 22 },
        { name: "Mark", surname: "Orlov", age: 19 },
    ];
    const columnDefs = [
        { field: "name" },
        { field: "surname" },
        { field: "age" },
    ];

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox py={3}>
                <div className="ag-theme-alpine" style={{ height: 500 }}>
                    <AgGridReact rowData={rowData} columnDefs={columnDefs} />
                </div>
            </MDBox>
        </DashboardLayout>
    );
}

export default Tables;
