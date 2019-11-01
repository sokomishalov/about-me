import GitHubColors from "github-colors"
import { graphql } from "@octokit/graphql";

const githubGraphRequest = graphql.defaults({
    headers: {
        authorization: `Bearer ${ process.env.REACT_APP_GITHUB_TOKEN }`
    }
});

export const getColorByLanguage = (language) => GitHubColors.get(language, false).color

export const getMyContributions = async () => await githubGraphRequest(myContributionsRequest)

export const getMyProjects = async () => await githubGraphRequest(myProjectsRequest)

const myContributionsRequest = `
{
  viewer {
    repositoriesContributedTo(first: 100, contributionTypes: [REPOSITORY, COMMIT, PULL_REQUEST, PULL_REQUEST_REVIEW], privacy: PUBLIC) {
      nodes {
        id
        nameWithOwner
        owner {
          login
        }
        isFork
        description
        url
        forks {
          totalCount
        }
        watchers {
          totalCount
        }
        stargazers {
          totalCount
        }
        languages(first: 1, orderBy: {field: SIZE, direction: DESC}) {
          nodes {
            color
            name
          }
        }
      }
    }
  }
}
`

const myProjectsRequest = `
{
  viewer {
    repositories(first: 100, privacy: PUBLIC) {
      nodes {
        id
        nameWithOwner
        owner {
          login
        }
        isFork
        description
        url
        forks {
          totalCount
        }
        watchers {
          totalCount
        }
        stargazers {
          totalCount
        }
        languages(first: 1, orderBy: {field: SIZE, direction: DESC}) {
          nodes {
            color
            name
          }
        }
      }
    }
  }
}
`