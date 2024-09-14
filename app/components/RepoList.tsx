// components/RepoList.tsx
import { fetchRepositories } from "@/lib/server-actions";
import RepoCard from "./RepoCard";

export default async function RepoList({ query }: { query: string }) {
	if (!query) {
		return (
			<div className="text-center text-gray-500">
				Enter a search query to find repositories.
			</div>
		);
	}

	try {
		const data = await fetchRepositories(query);
		const repos = data.search.edges;

		if (repos.length === 0) {
			return (
				<div className="text-center text-gray-500">
					No repositories found for {query}.
				</div>
			);
		}

		return (
			<div className="space-y-4">
				{repos.map((repo: any) => (
					<RepoCard key={repo.node.id} repo={repo.node} />
				))}
			</div>
		);
	} catch (error) {
		console.error("Error fetching repositories:", error);
		return (
			<div className="text-center text-red-500">
				An error occurred while fetching repositories. Please try again
				later.
			</div>
		);
	}
}
