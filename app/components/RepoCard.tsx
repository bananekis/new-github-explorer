// app/components/RepoCard.tsx
import Link from "next/link";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import { Star, Code } from "lucide-react";
import { RepoCardProps } from "../types";

export default function RepoCard({ repo }: RepoCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>
					<Link
						href={repo.url}
						className="text-blue-500 hover:underline"
					>
						{repo.name}
					</Link>
				</CardTitle>
				<CardDescription>
					by{" "}
					<Link
						href={repo.owner.url}
						className="text-blue-500 hover:underline"
					>
						{repo.owner.login}
					</Link>
				</CardDescription>
			</CardHeader>
			<CardContent>
				<p className="text-gray-600 mb-4">{repo.description}</p>
				<div className="flex items-center space-x-4">
					<Badge variant="secondary" className="flex items-center">
						<Star className="mr-1 h-4 w-4" />
						{repo.stargazerCount}
					</Badge>
					{repo.primaryLanguage && (
						<Badge variant="outline" className="flex items-center">
							<Code
								className="mr-1 h-4 w-4"
								style={{ color: repo.primaryLanguage.color }}
							/>
							{repo.primaryLanguage.name}
						</Badge>
					)}
				</div>
			</CardContent>
		</Card>
	);
}
