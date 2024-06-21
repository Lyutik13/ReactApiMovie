import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import AppContext from "./context";
import Header from "./components/Header/Heder";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import OneCart from "./pages/OneCart";
import { Items } from "./context";

import "./sass/App.scss";

function App() {
	const [items, setItems] = React.useState<Items[] | null>(null);
	const [isLoading, setIsLoading] = React.useState<boolean>(true);
	const [genres, setGenres] = React.useState<string>("Все жанры");
	const [ratingKp, setRatingKp] = React.useState<string>("Все");
	const [sortYears, setSortYears] = React.useState<string>("Все года");
	const [search, setSearch] = React.useState<string>("");

	React.useEffect(() => {
		// FR8DKRE-DPYM201-NSDV64X-NV3E4E3
		// GDFZWMJ-0EC4PYG-HHK3KZG-DW06D9Z
		// ZSKZ605-M3J4E74-NXTJ7D3-MAW60MS
		const token = "FR8DKRE-DPYM201-NSDV64X-NV3E4E3";
		const params = {
			headers: {
				"X-API-KEY": token,
			},
		};

		const genresUrl = genres === "Все жанры" ? "" : `&genres.name=${genres.toLowerCase()}`;
		const ratingKpUrl = ratingKp === "Все" ? "" : `&rating.kp=${ratingKp}`;
		const sortYearsUrl = sortYears === "Все года" ? "" : `&year=${sortYears}`;
		const filterUrl = `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50${genresUrl}${ratingKpUrl}${sortYearsUrl}`;
		const searchUrl = ` https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${search}`;
		const url = search === "" ? filterUrl : searchUrl;

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
	}, [genres, ratingKp, sortYears, search]);

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
				setSearch,
			}}>
			<div className="wrapper">
				<Header />
				<main className="main">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/movie/:id" element={<OneCart />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</AppContext.Provider>
	);
}

export default App;
