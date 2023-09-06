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
import { EmployeeForm } from "./components/EmployeeForm";
import { BasicModal } from "./components/BasicModal";

function Tables() {
    const [controller] = useMaterialUIController();
    const { sidenavColor, darkMode } = controller;
    const themeColor = sidenavColor;

    const [officeData, setOfficeData] = useState([]);
    const [employeeData, setEmployeeData] = useState([]);

    const [selectedEmployeeId, setSelectedEmployeeId] = useState();
    const [selectedOfficeId, setSelectedOfficeId] = useState();

    const officeCelListener = (e) => {
        const officeId = e.data.id;
        setSelectedOfficeId(officeId);
        setSelectedEmployeeId();
        getEmployeeFromOffice(officeId).then(({ data }) => {
            setEmployeeData(data);
        });
    };

    const employeeCelListener = (e) => {
        const employeeId = e.data.id;
        setSelectedEmployeeId(employeeId);
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
            <BasicModal
                active={addModalActive}
                handleClose={addHandleClose}
                darkMode={darkMode}
            >
                <EmployeeForm
                    themeColor={themeColor}
                    addHandleClose={addHandleClose}
                />
            </BasicModal>
            <Table
                header={"Офисы компании"}
                columnDefs={officeColumnDefs}
                rowData={officeData}
                themeColor={themeColor}
                cellClickListener={officeCelListener}
            />
            <Table
                header={
                    <EmployeeHeader
                        themeColor={themeColor}
                        addHandleOpen={addHandleOpen}
                        officeId={selectedOfficeId}
                        setEmployeeData={setEmployeeData}
                        employeeId={selectedEmployeeId}
                        setEmployeeId={setSelectedEmployeeId}
                    />
                }
                columnDefs={employeeColumnDefs}
                rowData={employeeData}
                themeColor={themeColor}
                cellClickListener={employeeCelListener}
            />
        </DashboardLayout>
    );
}

export default Tables;
