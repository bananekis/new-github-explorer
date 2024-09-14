"use server";

import { SEARCH_REPOSITORIES } from "./github-api";

export async function fetchRepositories(query: string) {
	const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
		? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
		: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

	const url = `${baseUrl}/api/graphql`;

	try {
		const res = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query: SEARCH_REPOSITORIES,
				variables: { query: `${query} sort:stars-desc`, first: 10 },
			}),
		});

		if (!res.ok) {
			const errorText = await res.text();
			console.error("API response error:", errorText);
			throw new Error(
				`Failed to fetch repositories: ${res.status} ${res.statusText}`
			);
		}

		const data = await res.json();
		console.log("API response data:", JSON.stringify(data, null, 2));
		return data;
	} catch (error) {
		console.error("Fetch error:", error);
		throw error;
	}
}
