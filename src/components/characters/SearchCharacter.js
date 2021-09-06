import React, { useState } from "react";
import { useForm } from "react-hook-form";

import DisplayCharacters from "./DisplayCharacters";

import "./characters.css";

const SearchCharacter = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const [character, setCharacter] = useState("");
	const onSubmit = async ({ characterName }) => {
		setCharacter(await characterName);
		reset();
	};

	return (
		<div className="character-container">
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor="characterName">Character name :</label>
				<input
					data-testid="characterName"
					id="characterName"
					type="characterName"
					{...register("characterName", {
						required: true,
						pattern: {
							value: /[a-zA-Z]+/,
							message: "Entered value must be a name",
						},
					})}
				/>
				{errors.characterName?.type === "pattern" && (
					<span role="alert">{errors.characterName.message}</span>
				)}
				{errors.characterName?.type === "required" && <span role="alert">Field is required</span>}
				<button data-testid="submitButton" type="submit">
					Search
				</button>
			</form>
			{character ? <DisplayCharacters name={character} /> : null}
		</div>
	);
};

export default SearchCharacter;
