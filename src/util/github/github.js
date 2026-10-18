import {USERNAME} from "../consts/consts";

// GitHub linguist colors (https://github.com/github/linguist/blob/master/lib/linguist/languages.yml)
const LANGUAGE_COLORS = {
    "C": "#555555",
    "C#": "#7355dd",
    "C++": "#f34b7d",
    "CSS": "#663399",
    "Dart": "#00B4AB",
    "Dockerfile": "#384d54",
    "Go": "#00ADD8",
    "Groovy": "#4298b8",
    "HTML": "#e34c26",
    "Java": "#b07219",
    "JavaScript": "#f1e05a",
    "Kotlin": "#A97BFF",
    "PHP": "#4F5D95",
    "Python": "#3572A5",
    "Ruby": "#701516",
    "Rust": "#dea584",
    "SCSS": "#c6538c",
    "Scala": "#c22d40",
    "Shell": "#89e051",
    "Swift": "#F05138",
    "TypeScript": "#3178c6",
    "Vue": "#41b883",
}

export const languageColor = (name) =>
    LANGUAGE_COLORS[name] ?? "#8b8b8b"

export const getMyProjects = async () => {
    const resp = await fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`)
    if (!resp.ok) throw new Error(`Failed to load projects: ${resp.status}`)
    return await resp.json();
}

export const loadProjectReadme = async (nameWithOwner) => {
    const resp = await fetch(`https://api.github.com/repos/${nameWithOwner}/readme`)
    if (!resp.ok) throw new Error(`Failed to load readme: ${resp.status}`)
    return await resp.json()
}

// GitHub returns base64 of the raw bytes, so plain atob() garbles non-ASCII (emoji, cyrillic, etc.)
export const decodeBase64Utf8 = (base64) =>
    new TextDecoder().decode(Uint8Array.from(atob(base64.replace(/\s/g, "")), c => c.charCodeAt(0)))
