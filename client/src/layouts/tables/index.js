// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { getAllOffices } from "api/office";
import { useEffect, useState } from "react";
import { AgTable } from "./components/AgTable";
import { getEmployeeFromOffice } from "api/employee";

const officeColumnDefs = [
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

const employeeColumnDefs = [
    { field: "firstName" },
    { field: "lastName" },
    { field: "gender" },
    { field: "position" },
    { field: "salary" },
    { field: "birthday" },
    { field: "passport" },
];

function Tables() {
    const [officeData, setOfficeData] = useState([]);
    const [employeeData, setEmployeeData] = useState([]);

    const officeCelListener = (e) => {
        const officeId = e.data.id;
        getEmployeeFromOffice(officeId).then(({ data }) => {
            console.log(data);
            setEmployeeData(data);
        });
    };

    useEffect(() => {
        getAllOffices().then(({ data }) => {
            setOfficeData(data);
        });
    }, []);

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox mb={3} />
            <MDBox mb={3}>
                <AgTable
                    columnDefs={officeColumnDefs}
                    rowData={officeData}
                    cellClickListener={officeCelListener}
                />
            </MDBox>
            <MDBox>
                <AgTable
                    columnDefs={employeeColumnDefs}
                    rowData={employeeData}
                />
            </MDBox>
        </DashboardLayout>
    );
}

export default Tables;
