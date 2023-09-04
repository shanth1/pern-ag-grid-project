import { dateComparator } from "../utils/dateComparator";
import { DateRender } from "./components/DateRender";
import { GenderRender } from "./components/GenderRender";
import { PassportRender } from "./components/PassportRender";
import { PositionRender } from "./components/PossitionRender";
import { SalaryRender } from "./components/SalaryRender";

export const employeeColumnDefs = [
    { field: "firstName", filter: "agTextColumnFilter" },
    { field: "lastName", filter: "agTextColumnFilter" },
    {
        field: "gender",
        sortable: false,
        filter: "agTextColumnFilter",
        comparator: (valueA, valueB) => valueA - valueB,
        cellRenderer: GenderRender,
    },
    {
        field: "position",
        filter: "agTextColumnFilter",
        sortable: false,
        cellRenderer: PositionRender,
    },
    {
        field: "salary",
        filter: "agNumberColumnFilter",
        comparator: (valueA, valueB) => valueA - valueB,
        cellRenderer: SalaryRender,
    },
    {
        field: "birthday",
        filter: "agDateColumnFilter",
        cellRenderer: DateRender,
        filterParams: {
            comparator: dateComparator,
        },
    },
    { field: "passport", sortable: false, cellRenderer: PassportRender },
];
