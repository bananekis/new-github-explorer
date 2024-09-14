// app/page.tsx
import { Suspense } from "react";
import SearchForm from "./components/SearchForm";
import RepoListSkeleton from "./components/RepoListSkeleton";
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
