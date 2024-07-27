import React from "react";
import ReactPaginate from "react-paginate";

import AppContext from "../../context";

import style from "./Paginate.module.scss";

interface PaginateEvent {
  selected: number;
}

export const Paginate: React.FC = () => {
	const { pagesCount, selectPage, setSelectPage } = React.useContext(AppContext);

	const changePage = (event: PaginateEvent) => {
		setSelectPage(event.selected + 1);
		window.scroll(0, 0);
	};

	return (
		<ReactPaginate
			className={style.paginate}
			breakLabel="..."
			nextLabel={<div style={{ fontSize: 16 }}>&#9658;</div>}
			onPageChange={changePage}
			pageRangeDisplayed={5}
			pageCount={pagesCount}
			forcePage={selectPage - 1}
			previousLabel={<div style={{ fontSize: 16 }}>&#9668;</div>}
			renderOnZeroPageCount={null}
		/>
	);
};

export default Paginate;
