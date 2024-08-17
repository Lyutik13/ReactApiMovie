import React from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import AppContext from "./context";
import Header from "./components/Header/Heder";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";
import OneCart from "./pages/OneCart";
import { Items } from "./context";

import "./sass/App.scss";

function App() {
	const [items, setItems] = React.useState<Items[] | null>(null);
	const [isLoading, setIsLoading] = React.useState<boolean>(true);
	const [isError, setIsError] = React.useState<boolean>(false);
	const [genres, setGenres] = React.useState<string>("Все жанры");
	const [ratingKp, setRatingKp] = React.useState<string>("Все");
	const [sortYears, setSortYears] = React.useState<string>("Все года");
	const [search, setSearch] = React.useState<string>("");
	const [pagesCount, setPagesCount] = React.useState<number>(1);
	const [selectPage, setSelectPage] = React.useState<number>(1);
	const [favoritArr, setFavoritArr] = React.useState<Items[]>([]);

	React.useEffect(() => {
		// FR8DKRE-DPYM201-NSDV64X-NV3E4E3
		// GDFZWMJ-0EC4PYG-HHK3KZG-DW06D9Z
		// ZSKZ605-M3J4E74-NXTJ7D3-MAW60MS
		const token = "GDFZWMJ-0EC4PYG-HHK3KZG-DW06D9Z";
		const params = {
			headers: {
				"X-API-KEY": token,
			},
		};

		const api = `https://api.kinopoisk.dev/v1.4/movie`;
		const genresUrl = genres === "Все жанры" ? "" : `&genres.name=${genres.toLowerCase()}`;
		const ratingKpUrl = ratingKp === "Все" ? "" : `&rating.kp=${ratingKp}`;
		const sortYearsUrl = sortYears === "Все года" ? "" : `&year=${sortYears}`;

		const filterUrl = `${api}?page=${selectPage}&limit=15${genresUrl}${ratingKpUrl}${sortYearsUrl}`;
		const searchUrl = ` ${api}/search?page=${selectPage}&limit=15&query=${search}`;
		const url = search === "" ? filterUrl : searchUrl;

		async function getUser() {
			setIsLoading(true);
			setIsError(false);

			try {
				const { data } = await axios.get(url, params);
				setItems(data.docs);
				setPagesCount(data.pages);
			} catch (error) {
				console.error(error);
				setItems(null);
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		}

		getUser();
	}, [genres, ratingKp, sortYears, search, selectPage]);

  // сделать сейв в localstorage
  // Поработать над отображением isLike в items State
	const onAddFavorites = (item: Items) => {
		try {
			if (favoritArr.find((findObj) => findObj.id === item.id)) {
				setFavoritArr((prev) => prev.filter((filterObj) => filterObj.id !== item.id));
			} else {
				setFavoritArr((prev) => [...prev, item]);
			}
		} catch (error) {
			alert("Не удалось добавить в фавориты");
			console.error(error);
		}
	};

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
				pagesCount,
				selectPage,
				setSelectPage,
				isError,
				onAddFavorites,
				favoritArr,
			}}>
			<div className="wrapper">
				<Header />
				<main className="main">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/movie/:id" element={<OneCart />} />
						<Route path="/favorites" element={<Favorites />} />
						<Route path="/favorites/movie/:id" element={<OneCart />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</AppContext.Provider>
	);
}

export default App;
