"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Search, Loader2 } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface SearchFormProps {
	initialQuery: string;
}

export default function SearchForm({ initialQuery }: SearchFormProps) {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	const handleSubmit = async (formData: FormData) => {
		const query = formData.get("q") as string;
		startTransition(() => {
			router.push(`/?q=${encodeURIComponent(query)}`, { scroll: false });
		});
	};

	return (
		<form action={handleSubmit} className="flex gap-2 mb-6">
			<Input
				type="text"
				name="q"
				defaultValue={initialQuery}
				placeholder="Search repositories..."
				className="flex-grow"
			/>
			<Button type="submit" disabled={isPending}>
				{isPending ? (
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
				) : (
					<Search className="mr-2 h-4 w-4" />
				)}
				{isPending ? "Searching..." : "Search"}
			</Button>
		</form>
	);
}
