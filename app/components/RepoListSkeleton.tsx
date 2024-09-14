export default function RepoListSkeleton() {
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
