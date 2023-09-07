import axios from "axios";

import { connectionConfig } from "./config";
const { protocol, host, port } = connectionConfig;

export const getAllEmployeesFromOffice = async (officeId) => {
    return axios.get(
        `${protocol}://${host}:${port}/api/employee/fromOffice/${officeId}`,
    );
};

export const getEmployee = async (employeeId) => {
    return axios.get(
        `${protocol}://${host}:${port}/api/employee/${employeeId}`,
    );
};

export const deleteEmployee = async (employeeId) => {
    return axios.delete(
        `${protocol}://${host}:${port}/api/employee/${employeeId}`,
    );
};

export const addEmployee = async (employeeData) => {
    return axios.post(
        `${protocol}://${host}:${port}/api/employee/`,
        employeeData,
    );
};

export const editEmployee = async (employeeId, updatedEmployeeData) => {
    return axios.put(
        `${protocol}://${host}:${port}/api/employee/${employeeId}`,
        updatedEmployeeData,
    );
};
