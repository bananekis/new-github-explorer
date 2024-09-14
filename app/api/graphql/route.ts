import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/apollo-client";

export async function POST(request: NextRequest) {
	try {
		const { query, variables } = await request.json();
		console.log("Received GraphQL query:", query);
		console.log("Variables:", variables);

		const response = await client.query({ query, variables });
		console.log("GraphQL response:", JSON.stringify(response, null, 2));

		return NextResponse.json(response.data);
	} catch (error: any) {
		console.error("GraphQL API error:", error);
		if (error.networkError && error.networkError.result) {
			console.error("Network error details:", error.networkError.result);
		}
		return NextResponse.json(
			{ error: "Internal Server Error" },
			{ status: 500 }
		);
	}
}
