"use server";

import { SEARCH_REPOSITORIES } from "./github-api";

export async function fetchRepositories(query: string) {
	const baseUrl = process.env.VERCEL_URL
		? `https://${process.env.VERCEL_URL}`
		: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
	const url = `${baseUrl}/api/graphql`;

	const searchQuery = `${query} sort:stars-desc`;

	const res = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query: SEARCH_REPOSITORIES,
			variables: { query: searchQuery, first: 10 },
		}),
		next: { revalidate: 3600 }, // Cache for 1 hour
	});

	if (!res.ok) {
		throw new Error("Failed to fetch repositories");
	}

	return res.json();
}
