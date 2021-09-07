import React from "react";
import { useQuery } from "@apollo/client";

import { getCharacterId } from "../../queries/character";

const CharacterDetails = ({ showDetails, setShowDetails }) => {
	const { data, loading, error } = useQuery(getCharacterId, {
		variables: { showDetails },
	});

	if (loading) return "Loading...";
	if (error) return <pre>{error.message}</pre>;

	return (
		<div className="character-details-container">
			<img
				className="character-details-image"
				src={
					data.characterID.data.results[0].thumbnail.path +
					"/standard_medium." +
					data.characterID.data.results[0].thumbnail.extension
				}
				alt="character"
			/>
			<div className="character-details-name">{data.characterID.data.results[0].name}</div>
			<div className="character-details-description">
				{data.characterID.data.results[0].description}
			</div>
		</div>
	);
};

export default CharacterDetails;
