import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import { getEvents } from "../../queries/events";

import Event from "./Event";

import "./events.css";

const Events = () => {
	const { data, loading, error } = useQuery(getEvents);

	const [visibleEvent1, setVisibleEvent1] = useState(1);
	const [visibleEvent2, setVisibleEvent2] = useState(2);
	const [visibleEvent3, setVisibleEvent3] = useState(3);
	const [blurEvent1, setBlurEvent1] = useState(0);
	const [blurEvent2, setBlurEvent2] = useState(4);

	useEffect(() => {
		setVisibleEvent1(1);
		setVisibleEvent2(2);
		setVisibleEvent3(3);
		setBlurEvent1(0);
		setBlurEvent2(4);
		return () => {
			setVisibleEvent1(1);
			setVisibleEvent2(2);
			setVisibleEvent3(3);
			setBlurEvent1(0);
			setBlurEvent2(4);
		};
	}, [data]);

	if (loading) return "Loading...";
	if (error) return <pre>{error.message}</pre>;

	const prevEvent = () => {
		setVisibleEvent1(visibleEvent1 - 1);
		setVisibleEvent2(visibleEvent2 - 1);
		setVisibleEvent3(visibleEvent3 - 1);
		setBlurEvent1(blurEvent1 - 1);
		setBlurEvent2(blurEvent2 - 1);
	};

	const nextEvent = () => {
		setVisibleEvent1(visibleEvent1 + 1);
		setVisibleEvent2(visibleEvent2 + 1);
		setVisibleEvent3(visibleEvent3 + 1);
		setBlurEvent1(blurEvent1 + 1);
		setBlurEvent2(blurEvent2 + 1);
	};

	const displayYes = "inline";
	const displayNo = "none";

	const prevStyle = {
		display: `${blurEvent1 !== 0 ? displayYes : displayNo}`,
	};
	const nextStyle = {
		display: `${blurEvent2 !== data.eventsList.data.results.length ? displayYes : displayNo}`,
	};

	return (
		<div className="container">
			<p className="count">{data.eventsList.data.count} events bond to the Avengers</p>
			<div className="wrapper">
				<div style={prevStyle} className="prev" onClick={() => prevEvent()}>
					&#10094;
				</div>

				<div className="events">
					{data.eventsList.data.results.map(({ id, title, thumbnail }, index) => (
						<Event
							key={id}
							id={id}
							title={title}
							thumbnail={thumbnail}
							index={index}
							visibleEvent1={visibleEvent1}
							visibleEvent2={visibleEvent2}
							visibleEvent3={visibleEvent3}
							blurEvent1={blurEvent1}
							blurEvent2={blurEvent2}
						/>
					))}
				</div>
				<div style={nextStyle} className="next" onClick={() => nextEvent()}>
					&#10095;
				</div>
			</div>
		</div>
	);
};

export default Events;
