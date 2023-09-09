// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import typography from "assets/theme/base/typography";

function ProfileInfoCard({ title, description, info, social, shadow }) {
    const labels = [];
    const values = [];
    const { size } = typography;

    info.forEach((element) => {
        labels.push(element.label);
        values.push(element.value);
    });

    // Render the card info items
    const renderItems = labels.map((label, key) => (
        <MDBox key={label} display="flex" py={1} pr={2}>
            <MDTypography
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
            >
                {label}: &nbsp;
            </MDTypography>
            <MDTypography variant="button" fontWeight="regular" color="text">
                &nbsp;{values[key]}
            </MDTypography>
        </MDBox>
    ));

    // Render the card social media icons
    const renderSocial = social.map(({ link, icon }, index) => (
        <MDBox
            key={index.toString()}
            component="a"
            href={link}
            target="_blank"
            color="info"
            rel="noreferrer"
            fontSize={size.lg}
            pr={1}
            pl={0.5}
            lineHeight={1}
        >
            {icon}
        </MDBox>
    ));

    return (
        <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
            <MDBox
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                pt={2}
                px={2}
            >
                <MDTypography variant="h6" fontWeight="medium">
                    {title}
                </MDTypography>
            </MDBox>
            <MDBox p={2}>
                <MDBox mb={2} lineHeight={1}>
                    <MDTypography
                        variant="button"
                        color="text"
                        fontWeight="regular"
                    >
                        {description}
                    </MDTypography>
                </MDBox>
                <MDBox opacity={0.3}>
                    <Divider />
                </MDBox>
                <MDBox>
                    {renderItems}
                    <MDBox display="flex" py={1} pr={2}>
                        <MDTypography
                            variant="button"
                            fontWeight="bold"
                            textTransform="capitalize"
                        >
                            social: &nbsp;
                        </MDTypography>
                        {renderSocial}
                    </MDBox>
                </MDBox>
            </MDBox>
        </Card>
    );
}

// Setting default props for the ProfileInfoCard
ProfileInfoCard.defaultProps = {
    shadow: true,
};

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    info: PropTypes.arrayOf(PropTypes.object).isRequired,
    social: PropTypes.arrayOf(PropTypes.object).isRequired,
    action: PropTypes.shape({
        route: PropTypes.string.isRequired,
        tooltip: PropTypes.string.isRequired,
    }),
    shadow: PropTypes.bool,
};

export default ProfileInfoCard;
