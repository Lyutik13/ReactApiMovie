import React from "react";

export interface Items {
	id: number;
	name: string;
	alternativeName: string;
	poster: {
		previewUrl: string;
		url: string;
	};
	year: string;
	rating: {
		imdb: string;
		kp: string;
		filmCritics: string;
	};
	description: string;
	genres: {
		name: string;
	}[];
}

export interface ContextType {
	items: Items[] | null;
	isLoading: boolean;
	genres: string;
	setGenres: (genres: string) => void;
	ratingKp: string;
	setRatingKp: (ratingKp: string) => void;
	sortYears: string;
	setSortYears: (sortYears: string) => void;
}

const defaultContext: ContextType = {
	items: null,
	isLoading: true,
	genres: "Все жанры",
	setGenres: () => {},
	ratingKp: "Все",
	setRatingKp: () => {},
	sortYears: "Все года",
	setSortYears: () => {},
};

const AppContext = React.createContext<ContextType>(defaultContext);

export default AppContext;
