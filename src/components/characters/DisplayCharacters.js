import React from "react";
import { useQuery } from "@apollo/client";

import { getCharactersName } from "../../queries/character";

import "./characters.css";

const Events = ({ name }) => {
	const { data, loading, error } = useQuery(getCharactersName, {
		variables: { name },
	});

	if (loading) return "Loading...";
	if (error) return <pre>{error.message}</pre>;

	return (
		<div>
			<p className="count">{data.charactersName.data.count} characters matching.</p>
			<div className="characters">
				{data.charactersName.data.results.map(({ id, name, thumbnail }) => (
					<div key={id} className="character">
						<img src={thumbnail.path + "/portrait_small." + thumbnail.extension} alt="event" />
						{name}
					</div>
				))}
			</div>
		</div>
	);
};

export default Events;
