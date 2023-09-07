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

const checkRequiredFields = (form) => {
    for (let filed in form) {
        if (!form[filed]) return false;
    }
    return true;
};

const isEqualObject = (obj1, obj2) => {
    if (!obj1 || !obj2) return false;
    for (var p in obj1) {
        if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;
        if (obj1[p] !== obj2[p]) return false;
    }
    return true;
};

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
            getEmployee(employeeId).then(({ data }) => {
                console.log(data);
                setForm(data);
                setOldForm(data);
            });
        }
    }, [isEditForm, employeeId]);

    const formHandler = () => {
        if (isEditForm) {
            setEmployeeId();
            editEmployee(employeeId, form).then(() => {
                getAllEmployeesFromOffice(officeId).then(({ data }) => {
                    setEmployeeData(data);
                });
            });
        } else {
            addEmployee(form).then(() => {
                getAllEmployeesFromOffice(officeId).then(({ data }) => {
                    setEmployeeData(data);
                });
            });
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
                    required
                    value={form.firstName}
                    inputProps={{ maxLength: 20 }}
                    onChange={(e) => {
                        const input = e.target.value;
                        if (!/^[A-Za-zА-Яа-я]+$/.test(input) && input !== "")
                            return;
                        let formatted =
                            input &&
                            input.slice(0, 1).toUpperCase() +
                                input.slice(1).toLowerCase();

                        setForm({ ...form, firstName: formatted });
                    }}
                    fullWidth
                    label="Имя"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    inputProps={{ maxLength: 30 }}
                    value={form.lastName}
                    onChange={(e) => {
                        const input = e.target.value;
                        if (!/^[A-Za-zА-Яа-я]+$/.test(input) && input !== "")
                            return;
                        let formatted =
                            input &&
                            input.slice(0, 1).toUpperCase() +
                                input.slice(1).toLowerCase();
                        setForm({ ...form, lastName: formatted });
                    }}
                    fullWidth
                    label="Фамилия"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
                    select
                    value={form.gender}
                    onChange={(e) =>
                        setForm({ ...form, gender: e.target.value })
                    }
                    label="Пол"
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
                    error={
                        form.passport.length !== 10 &&
                        form.passport.length !== 0
                    }
                    required
                    inputProps={{ maxLength: 10 }}
                    value={form.passport}
                    onChange={(e) => {
                        const input = e.target.value;
                        if (!/^\d+$/.test(input) && input !== "") return;
                        setForm({ ...form, passport: input });
                    }}
                    fullWidth
                    label="Паспорт"
                />
            </Grid>
            <Grid item xs={12}>
                <MDTypography variant="subtitle2">
                    Корпоративные данные
                </MDTypography>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    inputProps={{ min: 40000, max: 300000, step: 5000 }}
                    fullWidth
                    value={form.salary}
                    onChange={(e) => {
                        const input = e.target.value;
                        if (Number(input) <= 0 && input !== "") return;
                        if (Number(input) >= 1000000) return;
                        if (!/^\d+$/.test(input) && input !== "") return;
                        setForm({ ...form, salary: input });
                    }}
                    label="Зарплата"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    required
                    fullWidth
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
                    <MenuItem value="director">Директор</MenuItem>
                    <MenuItem value="projectManager">
                        Проджект-менеджер
                    </MenuItem>
                    <MenuItem value="analytic">Аналитик</MenuItem>
                    <MenuItem value="designer">Дизайнер</MenuItem>
                    <MenuItem value="teamLeader">Тимлид</MenuItem>
                    <MenuItem value="seniorDeveloper">
                        Сеньор-разработчик
                    </MenuItem>
                    <MenuItem value="middleDeveloper">
                        Мидл-разработчик
                    </MenuItem>
                    <MenuItem value="juniorDeveloper">
                        Джуниор-разработчик
                    </MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <MDButton
                    disabled={
                        !checkRequiredFields(form) ||
                        form.passport.length !== 10 ||
                        form.birthday.includes("NaN") ||
                        Number(form.birthday.split("-")[0]) < 1900 ||
                        Number(form.birthday.split("-")[0]) > 2100 ||
                        isEqualObject(form, oldForm)
                    }
                    onClick={formHandler}
                    color={themeColor}
                    variant="gradient"
                    size="large"
                    fullWidth
                >
                    {isEditForm ? "Изменить" : "Добавить"}
                </MDButton>
            </Grid>
        </Grid>
    );
};
