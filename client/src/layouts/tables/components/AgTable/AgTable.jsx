import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./styles.css";
import { useMaterialUIController } from "context";

export const AgTable = ({ columnDefs, rowData, cellClickListener }) => {
    const [controller] = useMaterialUIController();
    const isDarkTheme = controller.darkMode;

    const defaultColDefs = useMemo(
        () => ({
            sortable: true,
            filter: true,
            filterParams: { buttons: ["clear"] },
            resizable: true,
            cellStyle: (params) => {
                return { cursor: "pointer" };
            },
        }),
        [],
    );

    return (
        <div
            className={isDarkTheme ? "ag-theme-alpine-dark" : "ag-theme-alpine"}
            style={{
                height: 300,
            }}
        >
            <AgGridReact
                // noRowsOverlayComponent={(p) => <div></div>}
                rowData={rowData}
                rowSelection="single"
                onCellClicked={cellClickListener}
                columnDefs={columnDefs}
                defaultColDef={defaultColDefs}
                animateRows={true}
            />
        </div>
    );
};
