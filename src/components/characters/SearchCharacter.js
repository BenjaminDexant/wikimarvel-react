import React, { useState } from "react";
import { useForm } from "react-hook-form";

import DisplayCharacters from "./DisplayCharacters";

import "./characters.css";

const SearchCharacter = () => {
	const [character, setCharacter] = useState("");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = ({ characterName }) => setCharacter(characterName);

	return (
		<div>
      <h1 className="title">Look for a character :</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register("characterName", { required: true })} />
				{errors.characterName && <p>Field is required.</p>}
				<input type="submit" value="Search" />
			</form>
			{character ? <DisplayCharacters name={character} /> : null}
		</div>
	);
};

export default SearchCharacter;
