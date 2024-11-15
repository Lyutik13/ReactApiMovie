import React from "react";

import AppContext from "../../context";
import { useAppDispatch } from "../../hooks";
import { setSelectPage } from "../../redux/paginate/slice";

import styles from "./Filters.module.scss";

type ListType = {
	name: string;
};

const listGenres: ListType[] = [
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

// Продумать ползунок вместо цифр (чуть позже)
const listRatingKp: string[] = [
	"Все",
	"1-2",
	"2-3",
	"3-4",
	"4-5",
	"5-6",
	"6-7",
	"7-8",
	"8-9",
	"9-10",
];
const listYears: string[] = [
	"Все года",
	"2024",
	"1990-1995",
	"1995-2000",
	"2000-2005",
	"2005-2010",
	"2010-2015",
	"2015-2020",
	"2020-2024",
];

export const Filters: React.FC = () => {
	const dispatch = useAppDispatch();
	const { genres, setGenres, ratingKp, setRatingKp, sortYears, setSortYears } =
		React.useContext(AppContext);
	const [openGenres, setOpenGenres] = React.useState<boolean>(false);
	const [openRatingKp, setOpenRatingKp] = React.useState<boolean>(false);
	const [openSortYears, setOpenSortYears] = React.useState<boolean>(false);

	// 2 раза нажимается genres fix later
	const onClickGenres = (obj: ListType) => {
		setGenres(obj.name);
		setOpenGenres(false);
		dispatch(setSelectPage(1));
	};

	// переделать на input
	const onClickRatingKp = (obj: string) => {
		setRatingKp(obj);
		setOpenRatingKp(false);
		dispatch(setSelectPage(1));
	};

	// переделать на input
	const onClickSortYears = (obj: string) => {
		setSortYears(obj);
		setOpenSortYears(false);
		dispatch(setSelectPage(1));
	};

	return (
		<>
			<details>
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

			<details>
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

			<details>
				<summary className={styles.summary}>Год выпуска</summary>
				<div onClick={() => setOpenSortYears(!openSortYears)} className={styles.body}>
					{sortYears}
				</div>
				{openSortYears && (
					<div className={styles.dropdown}>
						<div className={styles.dropdownList}>
							<ul>
								{listYears.map((obj) => (
									<li onClick={() => onClickSortYears(obj)} key={obj}>
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
