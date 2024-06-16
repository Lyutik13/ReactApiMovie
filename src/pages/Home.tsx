import React from "react";

import CartItem from "../components/CartItem/CartItem";

export const Home: React.FC = () => {
	return (
		<>
			<section className="muvie">
				<h2>Фильмы</h2>
				<div className="contentWrapper">
          <aside className="filterWrapper"></aside>
					<section className="cardsWrapper">
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
					</section>
				</div>
			</section>
		</>
	);
};

export default Home;
