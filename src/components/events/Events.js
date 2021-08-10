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
			<h1>Events List</h1>
			<p className="count">{data.eventsList.data.count} events</p>
			<div className="events">
				{data.eventsList.data.results.map((event) => (
					<div key={event.id} className="event">
						<img
							src={event.thumbnail.path + "/portrait_small." + event.thumbnail.extension}
							alt="event"
						/>
						{event.title}
					</div>
				))}
			</div>
		</div>
	);
};

export default Events;
