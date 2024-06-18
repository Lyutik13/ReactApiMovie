import React from "react";
import axios from "axios";

import AppContext from "./context";
import Header from "./components/Header/Heder";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import "./sass/App.scss";

function App() {
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	const [genres, setGenres] = React.useState("Все жанры");
	const [ratingKp, setRatingKp] = React.useState("Все");
	const [sortYears, setSortYears] = React.useState("Все года");

	React.useEffect(() => {
		// FR8DKRE-DPYM201-NSDV64X-NV3E4E3
		// GDFZWMJ-0EC4PYG-HHK3KZG-DW06D9Z
		const token = "GDFZWMJ-0EC4PYG-HHK3KZG-DW06D9Z";
		const params = {
			headers: {
				"X-API-KEY": token,
			},
		};
		// const url = "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=5";
		const genresUrl = genres === "Все жанры" ? "" : `&genres.name=${genres.toLowerCase()}`;
		const ratingKpUrl = ratingKp === "Все" ? "" : `&rating.kp=${ratingKp}`;
		const sortYearsUrl = sortYears === "Все года" ? "" : `&year=${sortYears}`;
		const url = `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=5${genresUrl}${ratingKpUrl}${sortYearsUrl}`;

		async function getUser() {
			try {
				setIsLoading(true);
				const { data } = await axios.get(url, params);
				setItems(data.docs);
				setIsLoading(false);
			} catch (error) {
				console.error(error);
				setIsLoading(false);
			}
		}

		getUser();
	}, [genres, ratingKp, sortYears]);

	console.log(sortYears);

	return (
		<AppContext.Provider
			value={{
				items,
				isLoading,
				genres,
				setGenres,
				ratingKp,
				setRatingKp,
				sortYears,
				setSortYears,
			}}>
			<div className="wrapper">
				<Header />
				<main className="main">
					<Home />
				</main>
				<Footer />
			</div>
		</AppContext.Provider>
	);
}

export default App;
