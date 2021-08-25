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
		<div className="container">
			<p className="count">
				{data.charactersName.data.count} answers related to : "{name}"
			</p>
			<div className="wrapper">
				<div className="prev" >&#10094;</div>
				<div className="characters-container">
					{data.charactersName.data.results.map(({ id, name, thumbnail }) => (
						<div key={id} className="character">
							<img
								className="character-image"
								src={thumbnail.path + "/portrait_small." + thumbnail.extension}
								alt="character"
							/>
							<div className="character-name">{name}</div>
						</div>
					))}
				</div>
				<div className="next">&#10095;</div>
			</div>
		</div>
	);
};

export default Events;
