import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchDataFromApi } from "../utils/api";
import SearchResultVideoCard from "./VideoCard";

const QuerySearch = ({ onLoaderFinished }) => {
	const [result, setResult] = useState();
	const { searchQuery } = useParams();

	useEffect(() => {
		document.getElementById("root").classList.remove("custom-h");
		fetchSearchResults();
	}, [searchQuery]);

	const fetchSearchResults = () => {
		onLoaderFinished(30);
		fetchDataFromApi(`search/?q=${searchQuery}`).then((res) => {
			console.log(res);
			onLoaderFinished(60);
			setResult(res?.contents);
			onLoaderFinished(100);
		});
	};

	return (
		<div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
			<div className="grid grid-cols-1 gap-2 p-5">
				{result?.map((item) => {
					if (item?.type !== "video") return false;
					let video = item.video;
					return <SearchResultVideoCard key={video.videoId} video={video} />;
				})}
			</div>
		</div>
	);
};

export default QuerySearch;
