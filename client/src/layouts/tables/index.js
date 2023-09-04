// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getAllOffices } from "api/office";
import { useEffect, useMemo, useState } from "react";

function Tables() {
    const [rowData, setRowData] = useState([]);
    const columnDefs = [
        { field: "country" },
        { field: "city" },
        {
            field: "square",
            comparator: (valueA, valueB) => valueA - valueB,
        },
        {
            field: "squareRentPrice",
            comparator: (valueA, valueB) => valueA - valueB,
        },
        { field: "openingDate" },
        { field: "createdAt" },
    ];

    const defaultColDefs = useMemo(
        () => ({ sortable: true, filter: true }),
        [],
    );

    const cellClickListener = (e) => {
        console.log("click", e);
    };

    useEffect(() => {
        getAllOffices().then(({ data }) => {
            setRowData(data);
        });
    }, []);

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox mb={3} />
            <div className="ag-theme-alpine" style={{ height: 500 }}>
                <AgGridReact
                    rowData={rowData}
                    rowSelection="single"
                    onCellClicked={cellClickListener}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDefs}
                    animateRows={true}
                />
            </div>
        </DashboardLayout>
    );
}

export default Tables;
