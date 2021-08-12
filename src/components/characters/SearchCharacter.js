import React, { useState } from "react";
import { useForm } from "react-hook-form";

import DisplayCharacters from "./DisplayCharacters";

//import "./searchCharacter.css";

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
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register("characterName", { required: true })} />
				{errors.characterName && <p>Field is required.</p>}
				<input type="submit" />
			</form>
			{character ? <DisplayCharacters name={character} /> : null}
		</div>
	);
};

export default SearchCharacter;
