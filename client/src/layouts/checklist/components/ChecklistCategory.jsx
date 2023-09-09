import React from "react";
import MDTypography from "components/MDTypography";
import { CheckBox } from "@mui/icons-material";
import MDBox from "components/MDBox";

export const ChecklistCategory = ({ category, iconColor }) => {
    return (
        <MDBox mb={3}>
            <MDTypography variant="h6" fontWeight="medium" mb={1}>
                {category.title}
            </MDTypography>
            {category.checklist.map((checkItem, index) => (
                <MDBox
                    key={index.toString()}
                    sx={{ display: "flex", gap: 1 }}
                    mb={0.5}
                >
                    <CheckBox fontSize="small" color={iconColor} />
                    <MDTypography
                        variant="button"
                        color="text"
                        fontWeight="regular"
                    >
                        {checkItem}
                    </MDTypography>
                </MDBox>
            ))}
        </MDBox>
    );
};
