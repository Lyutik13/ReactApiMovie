import React from "react";
import AppContext from "../context";

import CartItem from "../components/CartItem/CartItem";
import Filters from "../components/Filters/Filters";
import NotFoundMuvie from "../components/NotFoundBlock/NotFoundMuvie";

export const Home: React.FC = () => {
  const { items, isLoading } = React.useContext(AppContext);

  return (
    <>
      <section className="muvie">
        <h2>Фильмы</h2>
        <div className="contentWrapper">
          <aside className="filterWrapper">
            <Filters />
          </aside>
          <section className="cardsWrapper">
            {!isLoading && items && items.length <= 0 ? (
              <NotFoundMuvie />
            ) : isLoading ? (
              "Loading muvies"
            ) : (
              items?.map((item) => <CartItem key={item.id} {...item} />)
            )}
          </section>
        </div>
      </section>
    </>
  );
};

export default Home;