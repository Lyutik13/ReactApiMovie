import React from "react";
import ReactPaginate from "react-paginate";

import AppContext from "../../context";

import style from "./Paginate.module.scss";

export const Paginate: React.FC = () => {
	const { pagesCount, selectPage, setSelectPage } = React.useContext(AppContext);

	return (
		<ReactPaginate
			className={style.paginate}
			breakLabel="..."
			nextLabel={<div style={{ fontSize: 16 }}>&#9658;</div>}
			onPageChange={(event) => setSelectPage(event.selected + 1)}
			pageRangeDisplayed={5}
			pageCount={pagesCount}
			forcePage={selectPage - 1}
			previousLabel={<div style={{ fontSize: 16 }}>&#9668;</div>}
			renderOnZeroPageCount={null}
		/>
	);
};

export default Paginate;
