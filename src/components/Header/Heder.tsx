import React from "react";
import { Link } from "react-router-dom";

import logoImg from "../../assets/logo.png";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__top}>
				<Link to={"/"} className={styles.logo__wrapper}>
					<div className={styles.logo}>
						<img src={logoImg} alt="logo Shark" />
					</div>
					<h1>ReactApiMuvie</h1>
				</Link>
				<div className={styles.btn__wrapper}>
          {/* В разроботке, поиск по имени */}
					<div className={styles.search}>
						<input placeholder="Фильмы, сериалы" type="text" />
					</div>
					<div className="basket">
						<button className="btn btn-basket">Избранное</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
