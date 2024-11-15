import React from "react";
import ReactPaginate from "react-paginate";

import { useAppSelector, useAppDispatch } from "../../hooks";
import { setSelectPage } from "../../redux/paginate/slice";

import style from "./Paginate.module.scss";

export const Paginate: React.FC = () => {
	const dispatch = useAppDispatch();
	const selectPage = useAppSelector((state) => state.paginate.selectPage);
	const pagesCount = useAppSelector((state) => state.paginate.pagesCount);

	const changePage = (event: { selected: number }) => {
		dispatch(setSelectPage(event.selected + 1));
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
