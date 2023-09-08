import { Grid, MenuItem, TextField } from "@mui/material";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import BasicDateField from "./BasicDateField";
import { useMaterialUIController } from "context";
import { addEmployee } from "api/employee";
import { useEffect, useState } from "react";
import { editEmployee } from "api/employee";
import { getAllEmployeesFromOffice } from "api/employee";
import { getEmployee } from "api/employee";
import { checkRequiredFields } from "../utils/filedsChecking";
import { isEqualObject } from "../utils/compareObjects";
import { checkText } from "../validations/textValidation";
import { checkSalary } from "../validations/salaryValidation";
import { checkBirthday } from "../validations/birthdayValidation";

const positionItems = [
    { id: 1, value: "director", label: "Директор" },
    { id: 2, value: "projectManager", label: "Проджект-менеджер" },
    { id: 3, value: "analytic", label: "Аналитик" },
    { id: 4, value: "designer", label: "Дизайнер" },
    { id: 5, value: "teamLeader", label: "Тимлид" },
    { id: 6, value: "seniorDeveloper", label: "Сеньор-разработчик" },
    { id: 7, value: "middleDeveloper", label: "Мидл-разработчик" },
    { id: 8, value: "juniorDeveloper", label: "Джуниор-разработчик" },
];

export const EmployeeForm = ({
    officeId,
    employeeId,
    setEmployeeId,
    setEmployeeData,
    handleClose,
    isEditForm,
}) => {
    const [controller] = useMaterialUIController();
    const [oldForm, setOldForm] = useState();
    const { sidenavColor: themeColor } = controller;

    useEffect(() => {
        if (isEditForm) {
            getEmployee(employeeId)
                .then(({ data }) => {
                    setForm(data);
                    setOldForm(data);
                })
                .catch((error) => console.error(error));
        }
    }, [isEditForm, employeeId]);

    const formHandler = () => {
        if (isEditForm) {
            setEmployeeId();
            editEmployee(employeeId, form)
                .then(() => {
                    getAllEmployeesFromOffice(officeId)
                        .then(({ data }) => {
                            setEmployeeData(data);
                        })
                        .catch((error) => console.error(error));
                })
                .catch((error) => console.error(error));
        } else {
            addEmployee(form)
                .then(() => {
                    getAllEmployeesFromOffice(officeId)
                        .then(({ data }) => {
                            setEmployeeData(data);
                        })
                        .catch((error) => console.error(error));
                })
                .catch((error) => console.error(error));
        }
        handleClose();
    };

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        birthday: "",
        position: "",
        salary: "",
        passport: "",
        officeId: officeId,
    });

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <MDTypography variant="h4">
                    {isEditForm
                        ? "Изменить данные о сотруднике"
                        : "Добавить нового сотрудника"}
                </MDTypography>
            </Grid>
            <Grid item xs={12}>
                <MDTypography variant="subtitle2">Личные данные</MDTypography>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    required
                    label="Имя"
                    value={form.firstName}
                    onChange={(e) => {
                        const input = e.target.value;
                        if (!checkText(input)) return;
                        let formatted =
                            input &&
                            input.slice(0, 1).toUpperCase() +
                                input.slice(1).toLowerCase();

                        setForm({ ...form, firstName: formatted });
                    }}
                    inputProps={{ maxLength: 20 }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    required
                    label="Фамилия"
                    value={form.lastName}
                    onChange={(e) => {
                        const input = e.target.value;
                        if (!checkText(input)) return;
                        let formatted =
                            input &&
                            input.slice(0, 1).toUpperCase() +
                                input.slice(1).toLowerCase();
                        setForm({ ...form, lastName: formatted });
                    }}
                    inputProps={{ maxLength: 30 }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    required
                    select
                    label="Пол"
                    value={form.gender}
                    onChange={(e) =>
                        setForm({ ...form, gender: e.target.value })
                    }
                    InputProps={{
                        sx: {
                            padding: "12px",
                        },
                    }}
                >
                    <MenuItem value="male">Мужчина</MenuItem>
                    <MenuItem value="female">Женщина</MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={6}>
                <BasicDateField
                    required
                    value={form.birthday}
                    onChange={(newDate) =>
                        setForm({
                            ...form,
                            birthday: `${newDate.$y}-${newDate.$M + 1}-${
                                newDate.$D
                            }`,
                        })
                    }
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    required
                    label="Паспорт"
                    error={
                        form.passport.length !== 10 &&
                        form.passport.length !== 0
                    }
                    value={form.passport}
                    onChange={(e) => {
                        const input = e.target.value;
                        if (!/^\d+$/.test(input) && input !== "") return;
                        setForm({ ...form, passport: input });
                    }}
                    inputProps={{ maxLength: 10 }}
                />
            </Grid>
            <Grid item xs={12}>
                <MDTypography variant="subtitle2">
                    Корпоративные данные
                </MDTypography>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    required
                    label="Зарплата"
                    inputProps={{ min: 40000, max: 300000, step: 5000 }}
                    value={form.salary}
                    onChange={(e) => {
                        const input = e.target.value;
                        if (!checkSalary(input)) return;
                        setForm({ ...form, salary: input });
                    }}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    required
                    select
                    label="Должность"
                    value={form.position}
                    onChange={(e) =>
                        setForm({ ...form, position: e.target.value })
                    }
                    InputProps={{
                        sx: {
                            padding: "12px",
                        },
                    }}
                >
                    {positionItems.map((el) => (
                        <MenuItem key={el.id} value={el.value}>
                            {el.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <MDButton
                    fullWidth
                    size="large"
                    variant="gradient"
                    color={themeColor}
                    onClick={formHandler}
                    disabled={
                        !checkRequiredFields(form) ||
                        form.passport.length !== 10 ||
                        !checkBirthday(form.birthday) ||
                        isEqualObject(form, oldForm)
                    }
                >
                    {isEditForm ? "Изменить" : "Добавить"}
                </MDButton>
            </Grid>
        </Grid>
    );
};
