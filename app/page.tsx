// app/page.tsx
import { Suspense } from "react";
import { revalidatePath } from "next/cache";
import SearchForm from "./components/SearchForm";
import RepoList from "./components/RepoList";

export default function Home({
	searchParams,
}: {
	searchParams: { q: string };
}) {
	const query = searchParams.q || "";

	return (
		<main className="container mx-auto p-4">
			<h1 className="text-4xl font-bold mb-8 text-center">
				GitHub Repository Explorer
			</h1>
			<SearchForm initialQuery={query} />
			<Suspense fallback={<RepoListSkeleton />}>
				<RepoList query={query} />
			</Suspense>
		</main>
	);
}

function RepoListSkeleton() {
	return (
		<div className="space-y-4 mt-8">
			{[...Array(5)].map((_, i) => (
				<div
					key={i}
					className="h-32 bg-gray-200 rounded-md animate-pulse"
				></div>
			))}
		</div>
	);
}
