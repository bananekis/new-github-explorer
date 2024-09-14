export interface RepoCardProps {
	repo: {
		name: string;
		description: string;
		url: string;
		owner: {
			login: string;
			url: string;
		};
		stargazerCount: number;
		primaryLanguage: {
			name: string;
			color: string;
		} | null;
	};
}
