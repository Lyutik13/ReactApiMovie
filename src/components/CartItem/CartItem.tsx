import React from "react";
import { Link } from "react-router-dom";

import img from "../../assets/no_poster.png";
import styles from "./CartItem.module.scss";
import { Items } from "../../context";


export const CartItem: React.FC<Items> = ({
	id,
	name,
	alternativeName,
	poster,
	year,
	rating,
}) => {
	return (
		<div className={styles.cartItem}>
			<div className={styles.img}>
				<img src={poster?.previewUrl || poster?.url || img} alt="img" />
			</div>
			<div className={styles.contentCart}>
				<Link to={`movie/${id}`} key={id} className={styles.left}>
					<h3>{name ? name : alternativeName}</h3>
					<p>{year}</p>
				</Link>
				<div className={styles.right}>
					<p className="raiting">{rating.kp || rating.imdb || rating.filmCritics}</p>
					<button className="btn btn-log">Буду смотреть</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
