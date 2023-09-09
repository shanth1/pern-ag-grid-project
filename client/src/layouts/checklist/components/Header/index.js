// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import backgroundImage from "assets/images/bg-checklist.jpeg";

function Header({ children, themeColor }) {
    return (
        <MDBox position="relative">
            <MDBox
                display="flex"
                alignItems="center"
                position="relative"
                minHeight="18.75rem"
                borderRadius="xl"
                sx={{
                    backgroundImage: ({
                        functions: { rgba, linearGradient },
                        palette: { gradients },
                    }) =>
                        `${linearGradient(
                            rgba(gradients[themeColor].main, 0.6),
                            rgba(gradients[themeColor].state, 0.6),
                        )}, url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "50%",
                    overflow: "hidden",
                }}
            />
            <Card
                sx={{
                    position: "relative",
                    mt: -8,
                    mx: 3,
                    py: 2,
                    px: 2,
                }}
            >
                {children}
            </Card>
        </MDBox>
    );
}

// Setting default props for the Header
Header.defaultProps = {
    children: "",
};

// Typechecking props for the Header
Header.propTypes = {
    children: PropTypes.node,
};

export default Header;
