"use server";

import { SEARCH_REPOSITORIES } from "./github-api";
import { client } from "./apollo-client";
import { ApolloQueryResult } from "@apollo/client";
import { SearchRepositoriesData } from "@/app/types";

export async function fetchRepositories(
	query: string
): Promise<ApolloQueryResult<SearchRepositoriesData>> {
	const fetchWithRevalidate = (url: string, init?: RequestInit) => {
		return fetch(url, {
			...init,
			next: { revalidate: 3600 },
		});
	};

	try {
		const result = await client.query<SearchRepositoriesData>({
			query: SEARCH_REPOSITORIES,
			variables: { query: `${query} sort:stars-desc`, first: 10 },
			context: {
				fetchOptions: {
					fetch: fetchWithRevalidate,
				},
			},
			fetchPolicy: "network-only",
		});

		return result;
	} catch (error) {
		console.error("Error fetching repositories:", error);
		throw new Error(
			`Failed to fetch repositories: ${
				error instanceof Error ? error.message : String(error)
			}`
		);
	}
}
