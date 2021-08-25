import React, { useEffect, useState } from "react";

const Character = ({
	id,
	name,
	thumbnail,
	index,
	visibleCharacter1,
	visibleCharacter2,
	visibleCharacter3,
	blurCharacter1,
	blurCharacter2,
}) => {
	const [position, setPosition] = useState(0);
	const [visible, setVisible] = useState(false);
	const [blur, setBlur] = useState(false);

	useEffect(() => {
		if (index === blurCharacter1) {
			setPosition(0);
			setVisible(true);
			setBlur(true);
		}
		if (index === visibleCharacter1) {
			setPosition(20);
			setVisible(true);
			setBlur(false);
		}
		if (index === visibleCharacter2) {
			setPosition(40);
			setVisible(true);
			setBlur(false);
		}
		if (index === visibleCharacter3) {
			setPosition(60);
			setVisible(true);
			setBlur(false);
		}
		if (index === blurCharacter2) {
			setPosition(80);
			setVisible(true);
			setBlur(true);
		}

		return () => {
			setPosition(0);
			setVisible(false);
		};
	}, [
		blurCharacter1,
		blurCharacter2,
		index,
		visibleCharacter1,
		visibleCharacter2,
		visibleCharacter3,
	]);

	const displayYes = "inline";
	const displayNo = "none";
	const withBlurEffect = "0.5";
	const withoutBlurEffect = "1";

	const style = {
		position: "absolute",
		top: "0px",
		left: `${position}%`,
		display: `${visible ? displayYes : displayNo}`,
		opacity: `${blur ? withBlurEffect : withoutBlurEffect}`,
	};

	return (
		<div style={style} key={id} className="character">
			<img
				className="character-image"
				src={thumbnail.path + "/portrait_small." + thumbnail.extension}
				alt="character"
			/>
			<div className="character-name">{name}</div>
		</div>
	);
};

export default Character;
