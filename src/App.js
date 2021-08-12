import React from "react";

import SearchCharacter from "./components/characters/SearchCharacter";
import Events from "./components/events/Events";
import Footer from "./components/footer/Footer";

const App = () => {
	return (
		<div>
			<SearchCharacter />
			<Events />
			<Footer />
		</div>
	);
};

export default App;
