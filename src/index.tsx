import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App.js";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
	// <React.StrictMode>
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>,
	// </React.StrictMode>,
);
