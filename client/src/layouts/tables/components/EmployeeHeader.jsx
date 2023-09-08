import { Grid } from "@mui/material";
import { getAllEmployeesFromOffice } from "api/employee";
import { deleteEmployee } from "api/employee";
import MDButton from "components/MDButton";
import { useMaterialUIController } from "context";

export const EmployeeHeader = ({
    officeId,
    setEmployeeData,
    employeeId,
    setEmployeeId,
    addHandleOpen,
    editHandleOpen,
}) => {
    const [controller] = useMaterialUIController();
    const { sidenavColor: themeColor } = controller;

    const deleteHandler = () => {
        setEmployeeId();
        deleteEmployee(employeeId)
            .then(() => {
                getAllEmployeesFromOffice(officeId)
                    .then(({ data }) => {
                        setEmployeeData(data);
                    })
                    .catch((error) => console.error(error));
            })
            .catch((error) => console.error(error));
    };

    return (
        <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid mt={1} item xs={12} md={3}>
                {officeId
                    ? `Сотрудники офиса №${officeId}`
                    : "↑ Офис не выбран"}
            </Grid>
            <Grid item xs={4} md={3}>
                <MDButton
                    onClick={addHandleOpen}
                    color={themeColor}
                    variant="gradient"
                    size="medium"
                    sx={{ border: `2px solid white` }}
                    fullWidth
                    disabled={!officeId}
                >
                    Добавить
                </MDButton>
            </Grid>
            <Grid item xs={4} md={3}>
                <MDButton
                    color={themeColor}
                    onClick={editHandleOpen}
                    size="medium"
                    variant="gradient"
                    sx={{ border: `2px solid white` }}
                    fullWidth
                    disabled={!employeeId}
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
