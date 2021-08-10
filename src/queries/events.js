import { gql } from "@apollo/client";

export const getEvents = gql`
	{
		eventsList {
			code
			status
			data {
				count
				results {
					id
					title
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
