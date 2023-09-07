import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import dayjs from "dayjs";

export default function BasicDateField({ value, onChange }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateField
                required
                sx={{ paddingTop: "0px" }}
                value={!!value ? dayjs(value.slice(0, 10)) : null}
                onChange={onChange}
                fullWidth
                disableFuture
                format="DD.MM.YYYY"
                label="Дата рождения"
            />
        </LocalizationProvider>
    );
}
