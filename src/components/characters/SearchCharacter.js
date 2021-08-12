import React, { useState } from "react";
import { useForm } from "react-hook-form";

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
			<h1>{character}</h1>
		</div>
	);
};

export default SearchCharacter;
