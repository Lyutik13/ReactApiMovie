import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import { Items } from "../context";
const token = import.meta.env.VITE_TOKEN;
const api = import.meta.env.VITE_API_URL;

import img from "../assets/no_poster.png";
import styles from "./OneCart.module.scss";

export const OneCart: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const [oneItem, setOneItem] = React.useState<Items>();

	React.useEffect(() => {
		const params = {
			headers: {
				"X-API-KEY": token,
			},
		};

		async function getOneUser() {
			try {
				const { data } = await axios.get(`${api}/${id}`, params);
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
			<div className="loaderWrapper">
				<span className="loader"></span>
			</div>
		);
	}

	const genresString = oneItem.genres?.map((genre) => genre.name).join(", ");

	return (
		<section className={styles.aboutMovie}>
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
