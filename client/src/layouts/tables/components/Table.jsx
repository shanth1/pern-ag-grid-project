import { Card, Grid } from "@mui/material";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import { AgTableInfinite } from "./AgTable/AgTableInfinite";
import { useMaterialUIController } from "context";
import { AgTableStandard } from "./AgTable/AgTableStandard";

export const Table = ({
    header,
    columnDefs,
    rowData,
    cellClickListener,
    selectedOfficeId,
    isInfinite,
}) => {
    const [controller] = useMaterialUIController();
    const { sidenavColor: themeColor } = controller;

    return (
        <MDBox pt={6} pb={3}>
            <Grid container spacing={6}>
                <Grid item xs={12}>
                    <Card>
                        <MDBox
                            mx={2}
                            mt={-3}
                            py={3}
                            px={2}
                            variant="gradient"
                            bgColor={themeColor}
                            borderRadius="lg"
                            coloredShadow={themeColor}
                        >
                            <MDTypography variant="h6" color="white">
                                {header}
                            </MDTypography>
                        </MDBox>

                        <MDBox
                            borderRadius="lg"
                            sx={{
                                overflow: "hidden",
                            }}
                        >
                            {isInfinite ? (
                                <AgTableInfinite
                                    columnDefs={columnDefs}
                                    cellClickListener={cellClickListener}
                                />
                            ) : (
                                <AgTableStandard
                                    selectedOfficeId={selectedOfficeId}
                                    columnDefs={columnDefs}
                                    rowData={rowData}
                                    cellClickListener={cellClickListener}
                                />
                            )}
                        </MDBox>
                    </Card>
                </Grid>
            </Grid>
        </MDBox>
    );
};
