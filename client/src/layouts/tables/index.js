// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { getAllOffices } from "api/office";
import { useEffect, useState } from "react";
import { getEmployeeFromOffice } from "api/employee";

import { officeColumnDefs } from "./columnDefs/officeColumnDefs";
import { employeeColumnDefs } from "./columnDefs/employeeColumnDefs";
import { useMaterialUIController } from "context";
import { Table } from "./components/Table";

function Tables() {
    const [controller] = useMaterialUIController();
    const themeColor = controller.sidenavColor;

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
            <Table
                header={"Офисы компании"}
                columnDefs={officeColumnDefs}
                rowData={officeData}
                themeColor={themeColor}
                cellClickListener={officeCelListener}
            />
            <Table
                header={"Сотрудники офиса"}
                columnDefs={employeeColumnDefs}
                rowData={employeeData}
                themeColor={themeColor}
            />
        </DashboardLayout>
    );
}

export default Tables;
