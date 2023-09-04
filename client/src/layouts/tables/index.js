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
import { EmployeeHeader } from "./components/EmployeeHeader";
import { MyModal } from "./components/MyModal";

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

    const [addModalActive, setAddModalActive] = useState(false);
    const addHandleOpen = () => setAddModalActive(true);
    const addHandleClose = () => setAddModalActive(false);

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MyModal active={addModalActive} handleClose={addHandleClose} />
            <Table
                header={"Офисы компании"}
                columnDefs={officeColumnDefs}
                rowData={officeData}
                themeColor={themeColor}
                cellClickListener={officeCelListener}
            />
            <Table
                header={<EmployeeHeader addHandleOpen={addHandleOpen} />}
                columnDefs={employeeColumnDefs}
                rowData={employeeData}
                themeColor={themeColor}
            />
        </DashboardLayout>
    );
}

export default Tables;
