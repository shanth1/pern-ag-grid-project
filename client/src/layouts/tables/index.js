// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { getAllOffices } from "api/office";
import { useEffect, useState } from "react";
import { AgTable } from "./components/AgTable";
import { getEmployeeFromOffice } from "api/employee";

import { officeColumnDefs } from "./columnDefs/officeColumnDefs";
import { employeeColumnDefs } from "./columnDefs/employeeColumnDefs";

function Tables() {
    const [officeData, setOfficeData] = useState([]);
    const [employeeData, setEmployeeData] = useState([]);

    const officeCelListener = (e) => {
        const officeId = e.data.id;
        getEmployeeFromOffice(officeId).then(({ data }) => {
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
