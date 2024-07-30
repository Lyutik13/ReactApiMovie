import React from "react";
import { Link } from "react-router-dom";

import img from "../../assets/no_poster.png";
import styles from "./CartItem.module.scss";
import AppContext, { Items } from "../../context";

export const CartItem: React.FC<Items> = (props) => {
	const { id, name, alternativeName, poster, year, rating, isFavorites = false } = props;
	const { onAddFavorites } = React.useContext(AppContext);
	const [isLike, setIsLike] = React.useState(isFavorites);

	const onClickFavorites = () => {
		onAddFavorites(props);
		setIsLike(!isLike);
	};

	return (
		<div className={styles.cartItem}>
			<div className={styles.img}>
				<img src={poster?.previewUrl || poster?.url || img} alt="img" />
			</div>
			<div className={styles.contentCart}>
				<Link to={!isLike ?`movie/${id}` : `movie/${id}`} key={id} className={styles.left}>
					<h3>{name ? name : alternativeName}</h3>
					<p>{year}</p>
				</Link>
				<div className={styles.right}>
					<p className="raiting">{rating.kp || rating.imdb || rating.filmCritics}</p>
					<button
						onClick={() => onClickFavorites()}
						className={isLike ? "btn btn-log btn-activeBasket" : "btn btn-log"}>
						{isLike ? "В избранном" : "Буду смотреть"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
