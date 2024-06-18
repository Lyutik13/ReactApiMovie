import React from "react";
import { Link } from "react-router-dom";

import style from "./NotFoundBlock.module.scss";

const NotFoundBlock: React.FC = () => {
	return (
		<div className={style.error}>
			<h1>
				<span>😕</span> <br />
				Ничего не найденно
			</h1>
			<p className={style.desc}>
				К сожалению данная страница отсутствует.
				<br /> <span>404!</span>
			</p>
			<Link to={"/"}>
				<button className="btn">На главную</button>
			</Link>
		</div>
	);
};

export default NotFoundBlock;
