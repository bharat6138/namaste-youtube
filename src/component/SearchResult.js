import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = () => {
	const [result, setResult] = useState();
	const { searchQuery } = useParams();
	useEffect(() => {
		document.getElementById("root").classList.remove("custom-h");
		fetchSearchResults();
	}, [searchQuery]);

	const fetchSearchResults = () => {
		fetchDataFromApi(
			`videos?part=snippet%2CcontentDetails%2Cstatistics%2CtopicDetails&maxResults=25&chart=mostPopular&regionCode=IN&key=AIzaSyBuXWOdtoRJd9LsgPzMWw_IxPky8jp1uiM`,
		).then((res) => {
			// console.log(res);
			setResult(res?.items);
		});
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
			{result?.map((item, index) => {
				return <SearchResultVideoCard key={index} video={item} />;
			})}
		</div>
	);
};

export default SearchResult;
