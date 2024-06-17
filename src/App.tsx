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

	React.useEffect(() => {
		// FR8DKRE-DPYM201-NSDV64X-NV3E4E3
		// GDFZWMJ-0EC4PYG-HHK3KZG-DW06D9Z
		const token = "FR8DKRE-DPYM201-NSDV64X-NV3E4E3";
		const params = {
			headers: {
				"X-API-KEY": token,
			},
		};
		const url = "https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50";

		async function getUser() {
			try {
				setIsLoading(true);
				const { data } = await axios.get(url, params);
				setItems(data.docs);
				setIsLoading(false);
			} catch (error) {
				console.error(error);
			}
		}

		getUser();
	}, []);

	console.log(items);
	console.log(isLoading);

	return (
		<AppContext.Provider value={{ items, isLoading }}>
			<div className="wrapper">
				<Header />
				<main className="main">
					<div className="line"></div>
					<Home />
				</main>
				<Footer />
			</div>
		</AppContext.Provider>
	);
}

export default App;
