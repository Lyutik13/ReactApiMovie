import React from "react";

import logoImg from "../../assets/logo.png";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__top}>
				<div className={styles.logo__wrapper}>
					<div className={styles.logo}>
						<img src={logoImg} alt="logo Shark" />
					</div>
					<h1>ReactApiMuvie</h1>
				</div>
				<div className={styles.btn__wrapper}>
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
