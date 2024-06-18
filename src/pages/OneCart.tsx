import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import img from "../assets/no_poster.png";
import styles from "./OneCart.module.scss";

export const OneCart: React.FC = () => {
	let { id } = useParams();
	const navigate = useNavigate();
	const [oneItem, setOneItem] = React.useState(null);

	React.useEffect(() => {
		// FR8DKRE-DPYM201-NSDV64X-NV3E4E3
		// GDFZWMJ-0EC4PYG-HHK3KZG-DW06D9Z
		// ZSKZ605-M3J4E74-NXTJ7D3-MAW60MS
		const token = "ZSKZ605-M3J4E74-NXTJ7D3-MAW60MS";
		const params = {
			headers: {
				"X-API-KEY": token,
			},
		};

		const url = `https://api.kinopoisk.dev/v1.4/movie/${id}`;

		async function getOneUser() {
			try {
				const { data } = await axios.get(url, params);
				setOneItem(data);
			} catch (error) {
				console.error(error);
				navigate("/");
			}
		}

		getOneUser();
	}, [id, navigate]);

	if (!oneItem) {
		return (
			<div style={{ textAlign: "center" }} className="container">
				loading...
			</div>
		);
	}

  const genresString = oneItem.genres?.map(genre => genre.name).join(", ");

	return (
		<section className={styles.aboutMuvie}>
			<aside>
				<div className={styles.img}>
					<img src={oneItem.poster?.previewUrl || oneItem.poster?.url || img} alt="poster" />
				</div>
			</aside>

			<main style={{ flex: "1" }}>
				<div className={styles.title}>
					<h2>{oneItem.name || oneItem.alternativeName}</h2>
					<div className={styles.rairing}>{oneItem.rating?.kp || oneItem.rating?.imdb}</div>
				</div>
				<div className={styles.desc}>{oneItem.description || "Нет описания"}</div>

				<div className={styles.about}>
					<h3 className={styles.info}>О фильме</h3>

					<div className={styles.infiList}>
						<p className={styles.name}>Год производства</p>
						<div className={styles.res}>{oneItem.year}</div>
					</div>

					<div className={styles.infiList}>
						<p className={styles.name}>Жанр</p>
						<div className={styles.res}>{genresString}</div>
					</div>
				</div>
			</main>
		</section>
	);
};

export default OneCart;
