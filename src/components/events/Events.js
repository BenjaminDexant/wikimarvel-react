import React from "react";
import { useQuery } from "@apollo/client";

import { getEvents } from "../../queries/events";

import "./events.css";

const Events = () => {
	const { data, loading, error } = useQuery(getEvents);

	if (loading) return "Loading...";
	if (error) return <pre>{error.message}</pre>;

	return (
		<div>
			<h1 className="title">Events List</h1>
			<p className="count">{data.eventsList.data.count} events</p>
			<div className="events">
				{data.eventsList.data.results.map(({id, title, thumbnail}) => (
					<div key={id} className="event">
						<img
							src={thumbnail.path + "/portrait_small." + thumbnail.extension}
							alt="event"
						/>
						{title}
					</div>
				))}
			</div>
		</div>
	);
};

export default Events;
