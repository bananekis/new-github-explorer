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

export interface Repository {
	id: string;
	name: string;
	description: string | null;
	url: string;
	stargazerCount: number;
	forkCount: number;
	primaryLanguage: {
		name: string;
		color: string;
	} | null;
	owner: {
		login: string;
		avatarUrl: string;
	};
}

export interface SearchRepositoriesData {
	search: {
		repositoryCount: number;
		edges: Array<{
			node: Repository;
		}>;
	};
}
