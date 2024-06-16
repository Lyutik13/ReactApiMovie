import Header from "./components/Header/Heder";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import "./sass/App.scss";

function App() {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<div className="line"></div>
				<Home />
			</main>
			<Footer />
		</div>
	);
}

export default App;
