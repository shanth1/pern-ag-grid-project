import docker from "assets/icons/docker.svg";
import mongo from "assets/icons/mongo.svg";
import react from "assets/icons/react.svg";
import postgresql from "assets/icons/postgresql.svg";
import node from "assets/icons/node.svg";

const data = [
    {
        image: react,
        name: "React",
        description: "User interfaces library",
        action: {
            type: "external",
            route: "https://react.dev/",
            label: "view",
        },
    },
    {
        image: node,
        name: "NodeJS",
        description: "JavaScript runtime environment",
        action: {
            type: "external",
            route: "https://nodejs.org/ru",
            label: "view",
        },
    },
    {
        image: mongo,
        name: "MongoDB",
        description: "NoSQL database",
        action: {
            type: "external",
            route: "https://www.mongodb.com/",
            label: "view",
        },
    },
    {
        image: postgresql,
        name: "PostgresQL",
        description: "Relational database",
        action: {
            type: "external",
            route: "https://www.postgresql.org/",
            label: "view",
        },
    },

    {
        image: docker,
        name: "Docker",
        description: "Platform for developing and running applications",
        action: {
            type: "external",
            route: "https://www.docker.com/",
            label: "view",
        },
    },
];

export default data;
