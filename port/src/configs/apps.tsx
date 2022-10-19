// import app components


// import type { AppsData } from "~/types";

const apps: AppsData[] = [
    {
        id: "launchpad",
        title: "Launchpad",
        desktop: false,
        img: "img/icons/launchpad.png"
    },
    {
        id: "bear",
        title: "Bear",
        desktop: true,
        show: true,
        width: 860,
        height: 500,
        img: "img/icons/bear.png",
        // content: < />
    },
    {
        id: "safari",
        title: "Safari",
        desktop: true,
        show: false,
        width: 1024,
        minWidth: 375,
        minHeight: 200,
        img: "img/icons/safari.png",
        // content: < />
    },
    {
        id: "vscode",
        title: "VSCode",
        desktop: true,
        show: false,
        img: "img/icons/vscode.png",
        // content: < />
    },
    {
        id: "facetime",
        title: "FaceTime",
        desktop: true,
        show: false,
        img: "img/icons/facetime.png",
        height: 530,
        // content: < />
    },
    {
        id: "terminal",
        title: "Terminal",
        desktop: true,
        show: false,
        img: "img/icons/terminal.png",
        // content: <Terminal />
    },
    {
        id: "email",
        title: "Mail",
        desktop: false,
        img: "img/icons/mail.png",
        link: "mailto:ryjhelm@gmail.com"
    },
    {
        id: "github",
        title: "Github",
        desktop: false,
        img: "img/icons/github.png",
        link: "https://github.com/rjhelm/updating-portfolio"
    }
];

export default apps;