import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";

export default function BasicDateField() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateField
                sx={{ paddingTop: "0px" }}
                fullWidth
                label="Дата рождения"
            />
        </LocalizationProvider>
    );
}
