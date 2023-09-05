import axios from "axios";

import { connectionConfig } from "./config";
const { protocol, host, port } = connectionConfig;

export const getEmployeeFromOffice = async (officeId) => {
    return axios.get(
        `${protocol}://${host}:${port}/api/employee/fromOffice/${officeId}`,
    );
};

export const deleteEmployee = async (employeeId) => {
    return axios.delete(
        `${protocol}://${host}:${port}/api/employee/${employeeId}`,
    );
};
