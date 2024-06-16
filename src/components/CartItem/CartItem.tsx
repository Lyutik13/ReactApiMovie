import React from "react";

import img from "../../assets/img/cartItemImg/sharks/blue.jpg";
import styles from "./CartItem.module.scss";

export const CartItem: React.FC = () => {
	return (
		<div className={styles.cartItem}>
			<div className={styles.img}>
				<img src={img} alt="img" />
			</div>
			<div className={styles.contentCart}>
				<div className={styles.left}>
					<h3>Головоломка 2</h3>
					<p>2024</p>
				</div>
        <div className={styles.right}>
          <p className="raiting">8.8</p>
          <button className="btn btn-log">Буду смотреть</button>
        </div>
			</div>
		</div>
	);
};

export default CartItem;
