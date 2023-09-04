import { Grid } from "@mui/material";
import MDButton from "components/MDButton";

const buttonStyles = {
    background: "transparent",
    color: "white",
    border: `2px solid white`,
    height: "20px",

    "&:hover, &:focus, &:focus:not(:hover)": {
        background: "transparent",
        color: "white",
        border: `2px solid white`,
        shadow: "",
    },
};

export const EmployeeHeader = ({ addHandleOpen }) => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid mt={1} item xs={12} md={3}>
                Сотрудники офиса
            </Grid>
            <Grid item xs={4} md={3}>
                <MDButton
                    onClick={addHandleOpen}
                    color="info"
                    size="medium"
                    sx={buttonStyles}
                    fullWidth
                >
                    Добавить
                </MDButton>
            </Grid>
            <Grid item xs={4} md={3}>
                <MDButton
                    color="info"
                    size="medium"
                    sx={buttonStyles}
                    fullWidth
                    disabled={false}
                >
                    Изменить
                </MDButton>
            </Grid>
            <Grid item xs={4} md={3}>
                <MDButton
                    color="info"
                    size="medium"
                    sx={buttonStyles}
                    fullWidth
                    disabled={false}
                >
                    Удалить
                </MDButton>
            </Grid>
        </Grid>
    );
};
