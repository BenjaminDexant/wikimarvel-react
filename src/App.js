import React from "react";
import { useQuery, gql } from "@apollo/client";

const first_query = gql`
	{
		baseQuery {
			code
			status
			data {
				count
				results {
					id
					name
					description
					thumbnail {
						path
						extension
					}
				}
			}
		}
	}
`;

export default function App() {
	const { data, loading, error } = useQuery(first_query);

	console.log(data);

	if (loading) return "Loading...";
	if (error) return <pre>{error.message}</pre>;

	return (
		<div>
			<h1>My App</h1>
			<div>{data.baseQuery.code}</div>
			<div>{data.baseQuery.status}</div>
			<h1>Characters</h1>
			<p>{data.baseQuery.data.count}</p>
			<div>
				{data.baseQuery.data.results.map((character) => (
					<div key={character.id}>{character.name}</div>
				))}
			</div>
		</div>
	);
}
