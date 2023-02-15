import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import LeftNav from "./LeftNav";
import SearchResultVideoCard from "./SearchResultVideoCard";

const SearchResult = () => {
	const [result, setResult] = useState();
	const { searchQuery } = useParams();
	useEffect(() => {
		document.getElementById("root").classList.remove("custom-h");
		fetchSearchResults();
	}, [searchQuery]);

	const fetchSearchResults = () => {
		fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
			console.log(res);
			setResult(res?.items);
		});
	};

	return (
		<div className="flex flex-row h-[calc(100%-56px)]">
			<LeftNav />
			<div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
					{result?.map((item, index) => {
						return <SearchResultVideoCard key={index} video={item} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default SearchResult;
