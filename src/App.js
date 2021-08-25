import React from "react";

import NavBar from "./components/navBar/NavBar";
import Home from "./components/home/Home";
import SearchCharacter from "./components/characters/SearchCharacter";
import Events from "./components/events/Events";
import Footer from "./components/footer/Footer";

import "./App.css";

const App = () => {
	return (
		<div className="app">
			<div className="navBar">
				<NavBar />
			</div>
			<div id="home">
				<Home />
			</div>

			<div id="searchCharacter">
				<h1 className="title" data-testid="searchTitle">
					Look for a character :
				</h1>
				<SearchCharacter />
			</div>

			<div id="events">
				<h1 className="title" data-testid="eventsTitle">
					Events list :
				</h1>

				<Events />
			</div>

			<div id="footer">
				<Footer />
			</div>
		</div>
	);
};

export default App;
