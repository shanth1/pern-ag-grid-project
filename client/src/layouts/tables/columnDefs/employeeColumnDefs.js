import { dateComparator } from "../utils/dateComparator";
import { DateRender } from "./components/DateRender";
import { GenderRender } from "./components/GenderRender";
import { PassportRender } from "./components/PassportRender";
import { PositionRender } from "./components/PositionRender";
import { MoneyRender } from "./components/MoneyRender";

export const employeeColumnDefs = [
    {
        headerName: "Личные данные",
        marryChildren: true,
        children: [
            {
                headerName: "Фамилия",
                field: "lastName",
                width: 140,
                minWidth: 100,
                filter: "agTextColumnFilter",
            },
            {
                headerName: "Имя",
                field: "firstName",
                width: 120,
                minWidth: 100,
                filter: "agTextColumnFilter",
                columnGroupShow: "closed",
            },

            {
                headerName: "Пол",
                field: "gender",
                sortable: false,
                width: 100,
                minWidth: 80,
                filter: "agTextColumnFilter",
                comparator: (valueA, valueB) => valueA - valueB,
                cellRenderer: GenderRender,
                columnGroupShow: "closed",
            },
            {
                headerName: "День рождения",
                field: "birthday",
                flex: 1,
                width: 150,
                minWidth: 110,
                filter: "agDateColumnFilter",
                cellRenderer: DateRender,
                filterParams: {
                    comparator: dateComparator,
                },
            },
            {
                headerName: "Паспорт",
                field: "passport",
                width: 130,
                minWidth: 110,
                sortable: false,
                cellRenderer: PassportRender,
            },
        ],
    },
    {
        headerName: "Корпоративные данные",
        marryChildren: true,
        children: [
            {
                headerName: "Должность",
                field: "position",
                width: 150,
                minWidth: 110,
                filter: "agTextColumnFilter",
                sortable: false,
                cellRenderer: PositionRender,
            },
            {
                headerName: "Зарплата",
                field: "salary",
                flex: 1,
                width: 150,
                minWidth: 110,
                filter: "agNumberColumnFilter",
                comparator: (valueA, valueB) => valueA - valueB,
                cellRenderer: MoneyRender,
            },
        ],
    },
    {
        children: [
            {
                headerName: "Запись создана",
                flex: 1,
                width: 150,
                minWidth: 110,
                field: "createdAt",
                filter: "agDateColumnFilter",
                cellRenderer: DateRender,
                filterParams: {
                    comparator: dateComparator,
                },
            },
        ],
    },
];
