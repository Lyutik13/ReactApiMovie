import React from "react";
import { Link } from "react-router-dom";

import AppContext from "../../context";

import logoImg from "../../assets/logo.png";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
	const { setSearch, setSelectPage } = React.useContext(AppContext);
	const [valueInput, setValueInput] = React.useState("");

	const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValueInput(event.target.value);
		setTimeout(() => {
			setSearch(event.target.value);
      setSelectPage(1);
		}, 2500);
	};

	const clearImput = () => {
		setValueInput("");
		setSearch("");
		setSelectPage(1);
	};

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
					<div className={styles.search}>
						<div className={styles.searchImg}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
							</svg>
						</div>
						<input
							value={valueInput}
							onChange={(e) => onChangeInput(e)}
							placeholder="Фильмы, сериалы"
							type="text"
						/>
						{valueInput && (
							<div onClick={clearImput} className={styles.xImg}>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
									<path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
								</svg>
							</div>
						)}
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
