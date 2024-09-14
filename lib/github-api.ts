// lib/github-api.ts
import { gql } from "@apollo/client";

export const SEARCH_REPOSITORIES = gql`
	query SearchRepositories($query: String!, $first: Int!) {
		search(query: $query, type: REPOSITORY, first: $first) {
			repositoryCount
			edges {
				node {
					... on Repository {
						id
						name
						description
						url
						owner {
							login
							url
						}
						stargazerCount
						primaryLanguage {
							name
							color
						}
					}
				}
			}
		}
	}
`;
