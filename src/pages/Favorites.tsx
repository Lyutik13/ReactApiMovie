import React from "react";
import { Link } from "react-router-dom";

import AppContext, { Items } from "../context";
import CartItem from "../components/CartItem/CartItem";

export const Favorites: React.FC = () => {
	const { favoriteArr } = React.useContext(AppContext);

	return (
		<section className="favorites">
			{favoriteArr && favoriteArr.length >= 1 ? (
				favoriteArr.map((item: Items) => <CartItem {...item} key={item.id} isFavorites={true} />)
			) : (
				<>
					<span style={{ fontSize: 24 }}>😿</span>
					<h3>К сожалению вы не добавили ни одного фильма</h3>
					<Link className="btn btn-basket" to={"/"}>
						На главную
					</Link>
				</>
			)}
		</section>
	);
};

export default Favorites;
