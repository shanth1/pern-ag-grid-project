// Material Dashboard 2 React layouts
import Tables from "layouts/tables";
import Profile from "layouts/profile";
import Checklist from "layouts/checklist";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
    {
        type: "collapse",
        name: "Таблицы",
        key: "tables",
        icon: <Icon fontSize="small">tables</Icon>,
        route: "/tables",
        component: <Tables />,
    },
    {
        type: "collapse",
        name: "Профиль",
        key: "profile",
        icon: <Icon fontSize="small">person</Icon>,
        route: "/profile",
        component: <Profile />,
    },
    {
        type: "collapse",
        name: "Чеклист",
        key: "checklist",
        icon: <Icon fontSize="small">check</Icon>,
        route: "/checklist",
        component: <Checklist />,
    },
];

export default routes;
