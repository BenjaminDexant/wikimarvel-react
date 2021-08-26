import React, { useEffect, useState } from "react";

const Event = ({
	id,
	title,
	thumbnail,
	index,
	visibleEvent1,
	visibleEvent2,
	visibleEvent3,
	blurEvent1,
	blurEvent2,
}) => {
	const [position, setPosition] = useState(0);
	const [visible, setVisible] = useState(false);
	const [blur, setBlur] = useState(false);

	useEffect(() => {
		if (index === blurEvent1) {
			setPosition(0);
			setVisible(true);
			setBlur(true);
		}
		if (index === visibleEvent1) {
			setPosition(20);
			setVisible(true);
			setBlur(false);
		}
		if (index === visibleEvent2) {
			setPosition(40);
			setVisible(true);
			setBlur(false);
		}
		if (index === visibleEvent3) {
			setPosition(60);
			setVisible(true);
			setBlur(false);
		}
		if (index === blurEvent2) {
			setPosition(80);
			setVisible(true);
			setBlur(true);
		}

		return () => {
			setPosition(0);
			setVisible(false);
		};
	}, [blurEvent1, blurEvent2, index, visibleEvent1, visibleEvent2, visibleEvent3]);

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
		<div style={style} key={id} className="Event">
			<img
				className="Event-image"
				src={thumbnail.path + "/portrait_small." + thumbnail.extension}
				alt="Event"
			/>
			<div className="Event-name">{title}</div>
		</div>
	);
};

export default Event;
