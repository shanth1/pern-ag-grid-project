import { Grid, MenuItem, TextField } from "@mui/material";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import BasicDateField from "./BasicDateField";

export const EmployeeForm = ({ themeColor, addHandleClose }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <MDTypography variant="h3">Добавить сотрудника</MDTypography>
            </Grid>
            <Grid item xs={12}>
                <MDTypography variant="subtitle2">Личные данные</MDTypography>
            </Grid>
            <Grid item xs={6}>
                <TextField required fullWidth label="Имя" />
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth label="Фамилия" />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    select
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
                <BasicDateField />
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" fullWidth label="Паспорт" />
            </Grid>
            <Grid item xs={12}>
                <MDTypography variant="subtitle2">
                    Корпоративные данные
                </MDTypography>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    type="number"
                    inputProps={{ min: 40000, max: 300000, step: 5000 }}
                    fullWidth
                    label="Зарплата"
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    fullWidth
                    select
                    label="Должность"
                    InputProps={{
                        sx: {
                            padding: "12px",
                        },
                    }}
                >
                    <MenuItem value={"director"}>Директор</MenuItem>
                    <MenuItem value={"projectManager"}>
                        Проджект-менеджер
                    </MenuItem>
                    <MenuItem value={"analytic"}>Аналитик</MenuItem>
                    <MenuItem value={"designer"}>Дизайнер</MenuItem>
                    <MenuItem value={"teamLeader"}>Тимлид</MenuItem>
                    <MenuItem value={"seniorDeveloper"}>
                        Сеньор-разработчик
                    </MenuItem>
                    <MenuItem value={"middleDeveloper"}>
                        Мидл-разработчик
                    </MenuItem>
                    <MenuItem value={"juniorDeveloper"}>
                        Джуниор-разработчик
                    </MenuItem>
                </TextField>
            </Grid>
            <Grid item xs={12}>
                <MDButton
                    onClick={addHandleClose}
                    color={themeColor}
                    variant="gradient"
                    size="large"
                    disabled={false}
                    fullWidth
                >
                    Добавить
                </MDButton>
            </Grid>
        </Grid>
    );
};
