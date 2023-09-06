import { Modal } from "@mui/material";
import colors from "assets/theme/base/colors";
import MDBox from "components/MDBox";
import { useMaterialUIController } from "context";

export const BasicModal = ({ children, active, handleClose }) => {
    const [controller] = useMaterialUIController();
    const { darkMode } = controller;

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: {
            xs: "95vw",
            sm: "85vw",
            md: "70vw",
            lg: "60vw",
            xl: "50vw",
        },
    };
    const { dark: darkColors, white: whiteColors } = colors;
    console.log(colors);
    return (
        <Modal
            open={active}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <MDBox
                sx={style}
                p={2}
                borderRadius="lg"
                bgColor={darkMode ? darkColors.main : whiteColors.main}
            >
                {children}
            </MDBox>
        </Modal>
    );
};
