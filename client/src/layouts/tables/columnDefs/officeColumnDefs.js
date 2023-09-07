import { dateComparator } from "../utils/dateComparator";
import { AreaRender } from "./components/AreaRender";
import { DateRender } from "./components/DateRender";
import { MoneyRender } from "./components/MoneyRender";

export const officeColumnDefs = [
    {
        headerName: "Местоположение",
        marryChildren: true,
        children: [
            {
                headerName: "Страна",
                width: 150,
                minWidth: 100,
                field: "country",
                filter: "agTextColumnFilter",
            },
            {
                headerName: "Город",
                width: 150,
                minWidth: 150,
                field: "city",
                columnGroupShow: "closed",
            },
        ],
    },
    {
        headerName: "Аренда",
        marryChildren: true,
        children: [
            {
                headerName: "Площадь",
                field: "square",
                width: 150,
                minWidth: 90,
                filter: "agNumberColumnFilter",
                comparator: (valueA, valueB) => valueA - valueB,
                cellRenderer: AreaRender,
            },
            {
                headerName: "Стоимость кв. м",
                width: 180,
                minWidth: 110,
                field: "squareRentPrice",
                filter: "agNumberColumnFilter",
                comparator: (valueA, valueB) => valueA - valueB,
                cellRenderer: MoneyRender,
                columnGroupShow: "closed",
            },
        ],
    },
    {
        children: [
            {
                headerName: "Дата открытия",
                flex: 1,
                width: 150,
                minWidth: 110,
                field: "openingDate",
                filter: "agDateColumnFilter",
                cellRenderer: DateRender,
                filterParams: {
                    comparator: dateComparator,
                },
            },
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
