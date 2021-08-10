import React from "react";
import { useQuery } from "@apollo/client";

import Events from "./components/events/Events";

const App = () => {
	return (
		<div>
			<Events />
		</div>
	);
};

export default App;
