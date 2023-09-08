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

    const onGridReady = (params) => {
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
                        params.successCallback(rowsThisPage, lastRow);
                    })
                    .catch((error) => {
                        console.error(error);
                        params.failCallback();
                    });
            },
        };
        params.api.setDatasource(dataSource);
    };
    return (
        <div
            className={isDarkTheme ? "ag-theme-alpine-dark" : "ag-theme-alpine"}
            style={{
                height: 300,
            }}
        >
            <AgGridReact
                onCellClicked={cellClickListener}
                animateRows={true}
                columnDefs={columnDefs}
                defaultColDef={defaultColDefs}
                rowSelection={"single"}
                rowModelType={"infinite"}
                rowBuffer={0}
                cacheBlockSize={5}
                cacheOverflowSize={0}
                // maxConcurrentDatasourceRequests={1}
                // infiniteInitialRowCount={1000}
                // maxBlocksInCache={10}
                onGridReady={onGridReady}
            />
        </div>
    );
};
