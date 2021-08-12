import { gql } from "@apollo/client";

export const getCharactersName = gql`
	query getCharactersName($name: String) {
		charactersName(name: $name) {
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
