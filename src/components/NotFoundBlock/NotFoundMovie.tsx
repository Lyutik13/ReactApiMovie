import React from "react";

import style from "./NotFoundBlock.module.scss";

const NotFoundBlock: React.FC = () => {
	return (
		<div className="container">
			<div className={style.error}>
				<h1>
					<span>😕</span> <br />
					Ничего не найдено
				</h1>
				<p className={style.desc}>Попробуйте изменить фильтры поиска</p>
			</div>
		</div>
	);
};

export default NotFoundBlock;
