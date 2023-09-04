import { dateComparator } from "../utils/dateComparator";
import { DateRender } from "./components/DateRender";

export const officeColumnDefs = [
    { field: "country", filter: "agTextColumnFilter" },
    { field: "city" },
    {
        field: "square",
        filter: "agNumberColumnFilter",
        comparator: (valueA, valueB) => valueA - valueB,
    },
    {
        field: "squareRentPrice",
        filter: "agNumberColumnFilter",
        comparator: (valueA, valueB) => valueA - valueB,
    },
    {
        field: "openingDate",
        filter: "agDateColumnFilter",
        cellRenderer: DateRender,
        filterParams: {
            comparator: dateComparator,
        },
    },
    {
        field: "createdAt",
        filter: "agDateColumnFilter",
        cellRenderer: DateRender,
        filterParams: {
            comparator: dateComparator,
        },
    },
];
