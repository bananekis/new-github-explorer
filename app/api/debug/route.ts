import { NextResponse } from "next/server";
import { client } from "@/lib/apollo-client";
import { gql } from "@apollo/client";

const TEST_QUERY = gql`
	query {
		viewer {
			login
		}
	}
`;

export async function GET() {
	try {
		const response = await client.query({ query: TEST_QUERY });
		return NextResponse.json(response.data);
	} catch (error) {
		console.error("Test GitHub API error:", error);
		return NextResponse.json(
			{ error: "GitHub API Test Failed" },
			{ status: 500 }
		);
	}
}
