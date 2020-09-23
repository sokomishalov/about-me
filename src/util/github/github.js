import { graphql } from "@octokit/graphql";
import GitHubColors from "github-colors";

export const languageColor = (name) => GitHubColors.get(name, null).color

export const getMyContributions = async () => await githubGraphRequest(myContributionsRequest)

export const getMyProjects = async () => await githubGraphRequest(myProjectsRequest)

export const loadProjectReadme = async (nameWithOwner) => {
    const resp = await fetch(`https://api.github.com/repos/${ nameWithOwner }/readme`)
    return await resp.json()
}

const githubGraphRequest = graphql.defaults({
    headers: {
        authorization: `Bearer ${ process.env.REACT_APP_GITHUB_TOKEN_PART_1 }${ process.env.REACT_APP_GITHUB_TOKEN_PART_2 }`,
        accept: "*"
    }
});

const myContributionsRequest = `
{
  viewer {
    repositoriesContributedTo(first: 100, contributionTypes: [REPOSITORY, COMMIT, PULL_REQUEST, PULL_REQUEST_REVIEW], privacy: PUBLIC) {
      nodes {
        id
        name
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
        languages(first: 3, orderBy: {field: SIZE, direction: DESC}) {
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
    repositories(ownerAffiliations: OWNER, first: 100, privacy: PUBLIC, isFork: false, orderBy: {field: CREATED_AT, direction: DESC} ) {
      nodes {
        id
        name
        nameWithOwner
        owner {
          login
        }
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
        languages(first: 3, orderBy: {field: SIZE, direction: DESC}) {
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