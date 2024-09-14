"use server";

import { SEARCH_REPOSITORIES } from "./github-api";
import { client } from "./apollo-client";

export async function fetchRepositories(query: string) {
	console.log("Fetching repositories for query:", query);

	try {
		const { data } = await client.query({
			query: SEARCH_REPOSITORIES,
			variables: { query: `${query} sort:stars-desc`, first: 10 },
		});

		console.log("Fetched data:", JSON.stringify(data, null, 2));
		return data;
	} catch (error: any) {
		console.error("Error fetching repositories:", error);
		throw new Error(`Failed to fetch repositories: ${error.message}`);
	}
}
