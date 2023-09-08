import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./styles.css";
import { useMaterialUIController } from "context";
import { getAllOffices } from "api/office";

export const AgTableInfinite = ({ columnDefs, cellClickListener }) => {
    const [controller] = useMaterialUIController();
    const isDarkTheme = controller.darkMode;

    const defaultColDefs = useMemo(
        () => ({
            sortable: true,
            resizable: true,
            cellStyle: (params) => {
                return { cursor: "pointer" };
            },
        }),
        [],
    );

    const onGridReady = (gridRef) => {
        const dataSource = {
            getRows: (params) => {
                getAllOffices(params)
                    .then((response) => {
                        const rowsThisPage = response.data.offices;
                        const length = response.data.length;
                        let lastRow = -1;
                        if (length <= params.endRow) {
                            lastRow = length;
                        }
                        if (rowsThisPage.length === 0) {
                            gridRef.api.showNoRowsOverlay();
                        } else {
                            gridRef.api.hideOverlay();
                        }
                        params.successCallback(rowsThisPage, lastRow);
                    })
                    .catch((error) => {
                        console.error(error);
                        gridRef.api.showNoRowsOverlay();
                        params.successCallback([], 0); //bad idea, but fixed infiniteInitialRowCount bug
                        params.failCallback();
                    });
            },
        };
        gridRef.api.setDatasource(dataSource);
    };
    return (
        <div
            className={isDarkTheme ? "ag-theme-alpine-dark" : "ag-theme-alpine"}
            style={{
                height: 300,
            }}
        >
            <AgGridReact
                overlayNoRowsTemplate="Нет данных"
                onCellClicked={cellClickListener}
                animateRows={true}
                columnDefs={columnDefs}
                defaultColDef={defaultColDefs}
                rowSelection={"single"}
                rowModelType={"infinite"}
                rowBuffer={0}
                cacheBlockSize={5}
                cacheOverflowSize={0}
                infiniteInitialRowCount={1}
                maxConcurrentDatasourceRequests={2}
                // infiniteInitialRowCount={0}
                // maxBlocksInCache={10}
                onGridReady={onGridReady}
            />
        </div>
    );
};
