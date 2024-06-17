import React from "react";

import img from '../../assets/no_poster.png'
import styles from "./CartItem.module.scss";

export const CartItem: React.FC = ({ name, alternativeName, poster, year, rating }) => {
	return (
		<div className={styles.cartItem}>
			<div className={styles.img}>
				<img src={poster?.previewUrl || poster?.url || img} alt="img" />
			</div>
			<div className={styles.contentCart}>
				<div className={styles.left}>
					<h3>{name ? name : alternativeName}</h3>
					<p>{year}</p>
				</div>
				<div className={styles.right}>
					<p className="raiting">{rating.kp || rating.imdb || rating.filmCritics}</p>
					<button className="btn btn-log">Буду смотреть</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
