import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { getCharactersName } from "../../queries/character";

import Character from "./Character";

import "./characters.css";

const Events = ({ name }) => {
	const { data, loading, error } = useQuery(getCharactersName, {
		variables: { name },
	});

	const [prevButtonVisible, setPrevButtonVisible] = useState(true);
	const [visibleCharacter1, setVisibleCharacter1] = useState(1);
	const [visibleCharacter2, setVisibleCharacter2] = useState(2);
	const [visibleCharacter3, setVisibleCharacter3] = useState(3);
	const [blurCharacter1, setBlurCharacter1] = useState(0);
	const [blurCharacter2, setBlurCharacter2] = useState(4);

	useEffect(() => {
		setVisibleCharacter1(1);
		setVisibleCharacter2(2);
		setVisibleCharacter3(3);
		setBlurCharacter1(0);
		setBlurCharacter2(4);
		return () => {
			setVisibleCharacter1(1);
			setVisibleCharacter2(2);
			setVisibleCharacter3(3);
			setBlurCharacter1(0);
			setBlurCharacter2(4);
		};
	}, [data]);

	const prevCharacter = () => {
		setVisibleCharacter1(visibleCharacter1 - 1);
		setVisibleCharacter2(visibleCharacter2 - 1);
		setVisibleCharacter3(visibleCharacter3 - 1);
		setBlurCharacter1(blurCharacter1 - 1);
		setBlurCharacter2(blurCharacter2 - 1);
	};

	const nextCharacter = () => {
		setVisibleCharacter1(visibleCharacter1 + 1);
		setVisibleCharacter2(visibleCharacter2 + 1);
		setVisibleCharacter3(visibleCharacter3 + 1);
		setBlurCharacter1(blurCharacter1 + 1);
		setBlurCharacter2(blurCharacter2 + 1);
	};

	const displayYes = "inline";
	const displayNo = "none";

	const style = {
		display: `${blurCharacter1 !== 0 ? displayYes : displayNo}`,
	};

	if (loading) return "Loading...";
	if (error) return <pre>{error.message}</pre>;

	return (
		<div className="container">
			<p className="count">
				{data.charactersName.data.count} answers related to : "{name}"
			</p>
			<div className="wrapper">
				<div style={style} className="prev" onClick={() => prevCharacter()}>
					&#10094;
				</div>
				<div className="characters-container">
					{data.charactersName.data.results.map(({ id, name, thumbnail }, index) => (
						<Character
							id={id}
							name={name}
							thumbnail={thumbnail}
							index={index}
							visibleCharacter1={visibleCharacter1}
							visibleCharacter2={visibleCharacter2}
							visibleCharacter3={visibleCharacter3}
							blurCharacter1={blurCharacter1}
							blurCharacter2={blurCharacter2}
						/>
					))}
				</div>
				<div className="next" onClick={() => nextCharacter()}>
					&#10095;
				</div>
			</div>
		</div>
	);
};

export default Events;
