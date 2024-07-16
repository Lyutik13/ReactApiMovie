import React from "react";
import ReactPaginate from "react-paginate";

import AppContext from "../../context";

import style from "./Paginate.module.scss";

export const Paginate: React.FC = () => {
	const {pagesCount, setSelectPage } = React.useContext(AppContext);

	return (
		<ReactPaginate
			className={style.paginate}
			breakLabel="..."
			nextLabel={<a style={{fontSize: 16}}>&#9658;</a>}
			onPageChange={(event) => setSelectPage(event.selected + 1)}
			pageRangeDisplayed={5}
			pageCount={pagesCount}
			previousLabel={<a style={{fontSize: 16}}>&#9668;</a>}
			renderOnZeroPageCount={null}
		/>
	);
};

export default Paginate;
