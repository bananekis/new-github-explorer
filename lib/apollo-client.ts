import {
	ApolloClient,
	InMemoryCache,
	createHttpLink,
	from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

const httpLink = createHttpLink({
	uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
		},
	};
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors)
		graphQLErrors.forEach(({ message, locations, path }) =>
			console.error(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
			)
		);
	if (networkError) console.error(`[Network error]: ${networkError}`);
});

export const client = new ApolloClient({
	link: from([errorLink, authLink, httpLink]),
	cache: new InMemoryCache(),
});
