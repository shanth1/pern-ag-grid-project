// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDButton from "components/MDButton";

function StackList({ title, stack, shadow, color }) {
    const renderStack = stack.map(({ image, name, description, action }) => (
        <MDBox
            key={name}
            component="li"
            display="flex"
            alignItems="center"
            py={1}
            mb={1}
        >
            <MDBox mr={2}>
                <MDAvatar
                    sx={{ padding: "5px" }}
                    src={image}
                    alt="something here"
                    shadow="md"
                />
            </MDBox>
            <MDBox
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="center"
            >
                <MDTypography variant="button" fontWeight="medium">
                    {name}
                </MDTypography>
                <MDTypography variant="caption" color="text">
                    {description}
                </MDTypography>
            </MDBox>
            <MDBox ml="auto">
                {action.type === "internal" ? (
                    <MDButton
                        component={Link}
                        to={action.route}
                        variant="text"
                        color={color}
                    >
                        {action.label}
                    </MDButton>
                ) : (
                    <MDButton
                        component="a"
                        href={action.route}
                        target="_blank"
                        rel="noreferrer"
                        variant="text"
                        color={color}
                    >
                        {action.label}
                    </MDButton>
                )}
            </MDBox>
        </MDBox>
    ));

    return (
        <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
            <MDBox pt={2} px={2}>
                <MDTypography variant="h6" fontWeight="medium">
                    {title}
                </MDTypography>
            </MDBox>
            <MDBox p={2}>
                <MDBox
                    component="ul"
                    display="flex"
                    flexDirection="column"
                    p={0}
                    m={0}
                >
                    {renderStack}
                </MDBox>
            </MDBox>
        </Card>
    );
}

// Setting default props for the ProfilesList
StackList.defaultProps = {
    shadow: true,
};

// Typechecking props for the ProfilesList
StackList.propTypes = {
    title: PropTypes.string.isRequired,
    shadow: PropTypes.bool,
};

export default StackList;
