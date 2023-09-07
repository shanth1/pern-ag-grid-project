// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import profileAvatar from "assets/images/profileAvatar.jpg";
import backgroundImage from "assets/images/bg-profile.jpeg";

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
                <Grid container spacing={3} alignItems="center">
                    <Grid item>
                        <MDAvatar
                            src={profileAvatar}
                            alt="profile-image"
                            size="xl"
                            shadow="sm"
                        />
                    </Grid>
                    <Grid item>
                        <MDBox height="100%" mt={0.5} lineHeight={1}>
                            <MDTypography variant="h5" fontWeight="medium">
                                Береснев Денис
                            </MDTypography>
                            <MDTypography
                                variant="button"
                                color="text"
                                fontWeight="regular"
                            >
                                Fullstack-разработчик
                            </MDTypography>
                        </MDBox>
                    </Grid>
                </Grid>
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
