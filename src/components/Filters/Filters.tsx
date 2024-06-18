import React from "react";

import AppContext from "../../context";

import styles from "./Filters.module.scss";

const listGenres = [
	{ name: "Все жанры" },
	{ name: "Аниме" },
	{ name: "Документальный" },
	{ name: "Драма" },
	{ name: "История" },
	{ name: "Комедия" },
	{ name: "Криминал" },
	{ name: "Мультфильм" },
	{ name: "Новости" },
	{ name: "Приключения" },
	{ name: "Ток-шоу" },
	{ name: "Ужасы" },
	{ name: "Фантастика" },
];

// Продумать ползунок вместо цыфр (чуть позже)
const listRatingKp = ["Все года", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9", "9-10"];

export const Filters: React.FC = () => {
	const { genres, setGenres, ratingKp, setRatingKp } = React.useContext(AppContext);
	const [openGenres, setOpenGenres] = React.useState<boolean>(false);
	const [openRatingKp, setOpenRatingKp] = React.useState<boolean>(false);

	// 2 раза ражимается genres fix leter
	const onClickGenres = (obj) => {
		setGenres(obj.name);
		setOpenGenres(false);
	};

	const onClickRatingKp = (obj) => {
		setRatingKp(obj);
		setOpenRatingKp(false);
	};

	return (
		<>
			<details open>
				<summary className={styles.summary}>Жанры</summary>
				<div onClick={() => setOpenGenres(!openGenres)} className={styles.body}>
					{genres}
				</div>
				{openGenres && (
					<div className={styles.dropdown}>
						<div className={styles.dropdownList}>
							<ul>
								{listGenres.map((obj) => (
									<li onClick={() => onClickGenres(obj)} key={obj.name}>
										{obj.name}
									</li>
								))}
							</ul>
						</div>
					</div>
				)}
			</details>

			<details open>
				<summary className={styles.summary}>Рейтинг кинопоиска от 1 до 10</summary>
				<div onClick={() => setOpenRatingKp(!openRatingKp)} className={styles.body}>
					{ratingKp}
				</div>
				{openRatingKp && (
					<div className={styles.dropdown}>
						<div className={styles.dropdownList}>
							<ul>
								{listRatingKp.map((obj) => (
									<li onClick={() => onClickRatingKp(obj)} key={obj}>
										{obj}
									</li>
								))}
							</ul>
						</div>
					</div>
				)}
			</details>
		</>
	);
};

export default Filters;
