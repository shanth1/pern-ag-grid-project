// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/DashboardLayout";
import DashboardNavbar from "examples/DashboardNavbar";
import ProfileInfoCard from "examples/Cards/ProfileInfoCard";
import StackList from "examples/Lists/StackList";
import DefaultProjectCard from "examples/Cards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";

// Data
import stackListData from "layouts/profile/data/stackListData";

// Images
import quoteIt from "assets/images/quoteIt.png";
import chessAi from "assets/images/chessai.jpg";

import docker from "assets/icons/docker.svg";
import express from "assets/icons/express.svg";
import graphql from "assets/icons/graphql.svg";
import jwt from "assets/icons/jwt.svg";
import mongo from "assets/icons/mongo.svg";
import nginx from "assets/icons/nginx.svg";
import react from "assets/icons/react.svg";
import tailwind from "assets/icons/tailwind.svg";
import typescript from "assets/icons/typescript.svg";
import redux from "assets/icons/redux.svg";

import { GitHub, Mail, Telegram } from "@mui/icons-material";
import { useMaterialUIController } from "context";

function Overview() {
    const [controller] = useMaterialUIController();
    const { sidenavColor, darkMode } = controller;

    const themeColor =
        darkMode && sidenavColor === "dark" ? "white" : sidenavColor;
    const iconColor = darkMode ? "white" : "dark";

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox mb={2} />
            <Header themeColor={sidenavColor}>
                <MDBox mt={5} mb={3}>
                    <Grid container spacing={1}>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            xl={8}
                            sx={{ display: "flex" }}
                        >
                            <Divider
                                orientation="vertical"
                                sx={{ ml: -2, mr: 1 }}
                            />
                            <ProfileInfoCard
                                title="О себе"
                                description="Я разработчик веб-приложений на JavaScript и Typescript, преимущественно с помощью библиотеки React. Также последнее время фокусируюсь на работе с бэкенд (NodeJS, Express) и деплое. У меня есть опыт работы с реляционными и нереляционными базами данных. Все версии проектов контролирую с помощью git. Также регулярно отрабатываю hard skills на сервисах codewars и leetcode"
                                info={[
                                    {
                                        label: "Дата рождения",
                                        value: "17.11.2000",
                                    },
                                    {
                                        label: "Место проживания",
                                        value: "Россия, Москва",
                                    },
                                    {
                                        label: "Телефон",
                                        value: "+7 904 848-35-02",
                                    },
                                    {
                                        label: "Email",
                                        value: "denisberesnev59@gmail.com",
                                    },
                                    {
                                        label: "GitHub",
                                        value: "shanth1",
                                    },
                                ]}
                                social={[
                                    {
                                        link: "https://github.com/shanth1",
                                        icon: <GitHub color={iconColor} />,
                                    },
                                    {
                                        link: "https://telegram.me/andabura",
                                        icon: <Telegram color={iconColor} />,
                                    },
                                    {
                                        link: "mailto:denisberesnev59@gmail.com",
                                        icon: <Mail color={iconColor} />,
                                    },
                                ]}
                                shadow={false}
                            />
                            <Divider orientation="vertical" sx={{ mx: 0 }} />
                        </Grid>
                        <Grid item xs={12} md={6} xl={4}>
                            <StackList
                                title="Cтек технологий"
                                stack={stackListData}
                                color={themeColor}
                                shadow={false}
                            />
                        </Grid>
                    </Grid>
                </MDBox>
                <MDBox pt={2} px={2} lineHeight={1.25}>
                    <MDTypography variant="h6" fontWeight="medium">
                        Проекты
                    </MDTypography>
                    <MDBox mb={1}>
                        <MDTypography variant="button" color="text">
                            Сайты, разработанные мной
                        </MDTypography>
                    </MDBox>
                </MDBox>
                <MDBox p={2}>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <DefaultProjectCard
                                image={quoteIt}
                                title="QuoteIt"
                                description="Реализация всех этапов разработки многостраничного сайта с авторизацией и CRUD операциями по сохранению цитат и заметок"
                                action={{
                                    type: "external",
                                    route: "https://www.quote-it.ru",
                                    color: themeColor,
                                    label: "Посмотреть",
                                }}
                                stack={[
                                    { image: react, name: "React" },
                                    { image: graphql, name: "GraphQL" },
                                    { image: jwt, name: "JWT" },
                                    { image: express, name: "Express" },
                                    { image: tailwind, name: "Tailwind" },
                                    { image: mongo, name: "MongoDB" },
                                    { image: nginx, name: "NGINX" },
                                    { image: docker, name: "Docker" },
                                ]}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <DefaultProjectCard
                                image={chessAi}
                                title="ChessAI"
                                description="Обучающая платформа с шахматным-ботом. Вычисления производятся на клиенте и базируются на представлении шахматной доски и алгоритмах оценки"
                                action={{
                                    type: "external",
                                    route: "https://shanth1.github.io/chess-ai-dist/",
                                    color: themeColor,
                                    label: "Посмотреть",
                                }}
                                stack={[
                                    { image: typescript, name: "TypeScript" },
                                    { image: react, name: "React" },
                                    { image: redux, name: "Redux" },
                                ]}
                            />
                        </Grid>
                    </Grid>
                </MDBox>
            </Header>
        </DashboardLayout>
    );
}

export default Overview;
