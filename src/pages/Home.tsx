import React from "react";
import AppContext from "../context";

import CartItem from "../components/CartItem/CartItem";
import Filters from "../components/Filters/Filters";
import NotFoundMovie from "../components/NotFoundBlock/NotFoundMovie";
import NotFoundBlock from "../components/NotFoundBlock/NotFoundBlock";
import Paginate from "../components/Paginate/Paginate";

export const Home: React.FC = () => {
	const { items, isLoading, isError } = React.useContext(AppContext);

	return (
		<>
			<section className="movie">
				<h2>Фильмы</h2>
				<div className="contentWrapper">
					<aside className="filterWrapper">
						<Filters />
					</aside>
					<section className="cardsWrapper">
						{isError && <NotFoundBlock />}
						{!isLoading && items && items.length === 0 ? (
							<NotFoundMovie />
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
			{!isLoading && items && items.length > 10 && <Paginate />}
		</>
	);
};

export default Home;
