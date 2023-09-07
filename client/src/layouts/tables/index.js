// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import { getAllOffices } from "api/office";
import { useEffect, useState } from "react";

import { officeColumnDefs } from "./columnDefs/officeColumnDefs";
import { employeeColumnDefs } from "./columnDefs/employeeColumnDefs";
import { Table } from "./components/Table";
import { EmployeeHeader } from "./components/EmployeeHeader";
import { EmployeeForm } from "./components/EmployeeForm";
import { BasicModal } from "./components/BasicModal";
import { getAllEmployeesFromOffice } from "api/employee";

function Tables() {
    const [officeData, setOfficeData] = useState([]);
    const [employeeData, setEmployeeData] = useState([]);

    const [selectedEmployeeId, setSelectedEmployeeId] = useState();
    const [selectedOfficeId, setSelectedOfficeId] = useState();

    const officeCelListener = (e) => {
        const officeId = e.data.id;
        setSelectedOfficeId(officeId);
        setSelectedEmployeeId();
        getAllEmployeesFromOffice(officeId).then(({ data }) => {
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

    const [editModalActive, setEditModalActive] = useState(false);
    const editHandleOpen = () => setEditModalActive(true);
    const editHandleClose = () => setEditModalActive(false);

    return (
        <>
            <BasicModal active={addModalActive} handleClose={addHandleClose}>
                <EmployeeForm
                    handleClose={addHandleClose}
                    officeId={selectedOfficeId}
                    setEmployeeData={setEmployeeData}
                />
            </BasicModal>
            <BasicModal active={editModalActive} handleClose={editHandleClose}>
                <EmployeeForm
                    employeeId={selectedEmployeeId}
                    setEmployeeId={setSelectedEmployeeId}
                    isEditForm
                    handleClose={editHandleClose}
                    officeId={selectedOfficeId}
                    setEmployeeData={setEmployeeData}
                />
            </BasicModal>
            <DashboardLayout>
                <DashboardNavbar />
                <Table
                    header={"Офисы компании"}
                    columnDefs={officeColumnDefs}
                    rowData={officeData}
                    cellClickListener={officeCelListener}
                />
                <Table
                    header={
                        <EmployeeHeader
                            addHandleOpen={addHandleOpen}
                            editHandleOpen={editHandleOpen}
                            officeId={selectedOfficeId}
                            setEmployeeData={setEmployeeData}
                            employeeId={selectedEmployeeId}
                            setEmployeeId={setSelectedEmployeeId}
                        />
                    }
                    columnDefs={employeeColumnDefs}
                    rowData={employeeData}
                    cellClickListener={employeeCelListener}
                />
            </DashboardLayout>
        </>
    );
}

export default Tables;
