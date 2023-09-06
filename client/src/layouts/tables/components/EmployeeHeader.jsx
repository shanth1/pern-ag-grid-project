import { Grid } from "@mui/material";
import { getEmployeeFromOffice } from "api/employee";
import { deleteEmployee } from "api/employee";
import MDButton from "components/MDButton";
import { useMaterialUIController } from "context";

export const EmployeeHeader = ({
    officeId,
    setEmployeeData,
    employeeId,
    setEmployeeId,
    addHandleOpen,
}) => {
    const [controller] = useMaterialUIController();
    const { sidenavColor: themeColor } = controller;

    const deleteHandler = () => {
        setEmployeeId();
        deleteEmployee(employeeId).then(() => {
            getEmployeeFromOffice(officeId).then(({ data }) => {
                setEmployeeData(data);
            });
        });
    };

    return (
        <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid mt={1} item xs={12} md={3}>
                Сотрудники офиса
            </Grid>
            <Grid item xs={4} md={3}>
                <MDButton
                    onClick={addHandleOpen}
                    color={themeColor}
                    variant="gradient"
                    size="medium"
                    sx={{ border: `2px solid white` }}
                    fullWidth
                >
                    Добавить
                </MDButton>
            </Grid>
            <Grid item xs={4} md={3}>
                <MDButton
                    color={themeColor}
                    size="medium"
                    variant="gradient"
                    sx={{ border: `2px solid white` }}
                    fullWidth
                    disabled={false}
                >
                    Изменить
                </MDButton>
            </Grid>
            <Grid item xs={4} md={3}>
                <MDButton
                    onClick={deleteHandler}
                    color={themeColor}
                    size="medium"
                    variant="gradient"
                    sx={{ border: `2px solid white` }}
                    fullWidth
                    disabled={!employeeId}
                >
                    Удалить
                </MDButton>
            </Grid>
        </Grid>
    );
};
