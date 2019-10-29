import GitHubColors from "github-colors"

export const getColorByLanguage = (language) => GitHubColors.get(language).color
