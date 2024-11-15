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

import { useAppDispatch, useAppSelector } from "./hooks";
import { setPagesCount } from "./redux/paginate/slice";

const token = import.meta.env.VITE_TOKEN;
const api = import.meta.env.VITE_API_URL;

import "./sass/App.scss";

function App() {
	const dispatch = useAppDispatch();
	const [items, setItems] = React.useState<Items[] | null>(null);
	const [isLoading, setIsLoading] = React.useState<boolean>(true);
	const [isError, setIsError] = React.useState<boolean>(false);

	const [genres, setGenres] = React.useState<string>("Все жанры");
	const [ratingKp, setRatingKp] = React.useState<string>("Все");
	const [sortYears, setSortYears] = React.useState<string>("Все года");
	const [search, setSearch] = React.useState<string>("");

	const selectPage = useAppSelector((state) => state.paginate.selectPage);

	const [favoriteArr, setFavoriteArr] = React.useState<Items[]>([]);
  const prevPagesCountRef = React.useRef<number | null>(null);

	React.useEffect(() => {
		const params = {
			headers: {
				"X-API-KEY": token,
			},
		};

		const genresUrl = genres === "Все жанры" ? "" : `&genres.name=${genres.toLowerCase()}`;
		const ratingKpUrl = ratingKp === "Все" ? "" : `&rating.kp=${ratingKp}`;
		const sortYearsUrl = sortYears === "Все года" ? "" : `&year=${sortYears}`;

		const filterUrl = `${api}?page=${selectPage}&limit=10${genresUrl}${ratingKpUrl}${sortYearsUrl}`;
		const searchUrl = ` ${api}/search?page=${selectPage}&limit=10&query=${search}`;
		const url = search === "" ? filterUrl : searchUrl;

		async function getUser() {
			setIsLoading(true);
			setIsError(false);
			try {
				const { data } = await axios.get(url, params);
				setItems(data.docs);
        
				if (prevPagesCountRef.current !== data.pages) {
          dispatch(setPagesCount(data.pages));
          prevPagesCountRef.current = data.pages; 
        }
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

	// сделать сейв в local storage
	// Поработать над отображением isLike в items State
	const onAddFavorites = (item: Items) => {
		try {
			if (favoriteArr.find((findObj) => findObj.id === item.id)) {
				setFavoriteArr((prev) => prev.filter((filterObj) => filterObj.id !== item.id));
			} else {
				setFavoriteArr((prev) => [...prev, item]);
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
				isError,
				onAddFavorites,
				favoriteArr,
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
