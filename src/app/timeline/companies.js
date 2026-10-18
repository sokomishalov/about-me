import SberbankLogo from "../../images/sber.png"
import VtbLogo from "../../images/vtb.png"
import BmstuLogo from "../../images/bmstu.png"
import MyndLogo from "../../images/mynd.png"
import RoofstockLogo from "../../images/roofstock.png"
import JustPlayLogo from "../../images/justplay.png"

// Newest first. Dates are "YYYY-MM" (or just "YYYY" when the month is unknown), a missing `to` means "now".
// `roles` are newest first too: a role with its own dates is a promotion step,
// roles without dates are promotions whose exact dates aren't listed and share the company period.
export const COMPANIES = [
    {
        name: "JustPlay",
        logo: JustPlayLogo,
        companyLink: "https://justplayapps.com/",
        from: "2025",
        roles: [
            { title: "Staff Software Engineer", from: "2026-08" },
            { title: "Senior Software Engineer", from: "2025", to: "2026-07" },
        ],
    },
    {
        name: "Roofstock",
        logo: RoofstockLogo,
        companyLink: "https://roofstock.com/",
        from: "2024-05",
        to: "2025",
        description: "Designing, developing and maintaining backend services.",
        roles: [
            { title: "Senior Software Engineer" },
        ],
    },
    {
        name: "Mynd Management",
        logo: MyndLogo,
        companyLink: "https://mynd.co/",
        from: "2022-03",
        to: "2024",
        description: "Designing, developing and maintaining backend services.",
        roles: [
            { title: "Senior Software Engineer" },
        ],
    },
    {
        name: "VTB",
        logo: VtbLogo,
        companyLink: "https://vtb.ru/",
        from: "2019-08",
        to: "2022-03",
        description: "Design and development of backend and frontend applications.",
        roles: [
            { title: "Chief Solution Architect" },
            { title: "Leading Solution Architect" },
        ],
    },
    {
        name: "Sberbank",
        logo: SberbankLogo,
        companyLink: "https://sberbank.ru",
        from: "2018-07",
        to: "2019-08",
        description: "Development of backend and frontend applications.",
        roles: [
            { title: "Chief IT Engineer" },
            { title: "Leading IT Engineer" },
        ],
    },
    {
        name: "Sberbank Technology",
        logo: SberbankLogo,
        companyLink: "https://sbertech.ru/",
        from: "2015-08",
        to: "2018-07",
        description: "Development of backend and frontend applications.",
        roles: [
            { title: "Leading IT Engineer" },
            { title: "Senior IT Engineer" },
            { title: "IT Engineer" },
        ],
    },
    {
        name: "Bauman Moscow State Technical University",
        logo: BmstuLogo,
        companyLink: "http://www.bmstu.ru/",
        from: "2013",
        to: "2017",
        description: "Robotics and complex automation, Systems of the Automated Designing.",
        roles: [
            { title: "Student" },
        ],
    },
]
