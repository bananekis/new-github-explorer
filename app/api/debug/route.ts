import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json({
		NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
		NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
		VERCEL_URL: process.env.VERCEL_URL,
		NODE_ENV: process.env.NODE_ENV,
	});
}
