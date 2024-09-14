// app/api/graphql/route.ts
import { NextResponse } from "next/server";
import { client } from "@/lib/apollo-client";

export async function POST(request: Request) {
	const { query, variables } = await request.json();

	try {
		const { data } = await client.query({
			query,
			variables,
		});

		return NextResponse.json(data);
	} catch (error: any) {
		console.error("Error fetching repositories:", error.message);
		return NextResponse.json(
			{ error: "An error occurred while fetching repositories" },
			{ status: 500 }
		);
	}
}
