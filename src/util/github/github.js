import GitHubColors from "github-colors";
import {USERNAME} from "../consts/consts";

export const languageColor = (name) =>
    GitHubColors.get(name, null).color

export const getMyProjects = async (pageSize = 1000, pageOffset = 0) => {
    const resp = await fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=${pageSize}&page=${pageOffset}&sort=updated`)
    if (resp.status !== 200) throw new Error("Failed to load projects")
    return await resp.json();
}

export const loadProjectReadme = async (nameWithOwner) => {
    const resp = await fetch(`https://api.github.com/repos/${nameWithOwner}/readme`)
    return await resp.json()
}
