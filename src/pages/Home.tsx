import React from "react";
import AppContext from "../context";

import CartItem from "../components/CartItem/CartItem";
import Filters from "../components/Filters/Filters";
import NotFoundMuvie from "../components/NotFoundBlock/NotFoundMuvie";
import NotFoundBlock from "../components/NotFoundBlock/NotFoundBlock";

export const Home: React.FC = () => {
	const { items, isLoading, isError } = React.useContext(AppContext);

	return (
		<>
			<section className="muvie">
				<h2>Фильмы</h2>
				<div className="contentWrapper">
					<aside className="filterWrapper">
						<Filters />
					</aside>
					<section className="cardsWrapper">
            {isError && <NotFoundBlock/>}
						{!isLoading && items && items.length === 0 ? (
							<NotFoundMuvie />
						) : isLoading ? (
							<div className="loaderWrapper">
								<span className="loader"></span>
							</div>
						) : (
							items?.map((item) => <CartItem key={item.id} {...item} />)
						)}
					</section>
				</div>
			</section>
		</>
	);
};

export default Home;
