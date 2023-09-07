// Material Dashboard 2 React layouts
import Tables from "layouts/tables";
import Profile from "layouts/profile";

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
];

export default routes;
