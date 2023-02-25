import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchDataFromApi } from "../utils/api";
import VideoCard from "./VideoCard";

const AllCards = ({ onLoaderFinished, category }) => {
	const loading = useSelector((store) => store.app.loading);
	const keyword = useSelector((store) => store.app.category);
	const [result, setResult] = useState([]);
	// const { searchQuery } = useParams();
	useEffect(() => {
		document.getElementById("root").classList.remove("custom-h");
		fetchSelectedCategoryData(category);
	}, [category]);

	const fetchSelectedCategoryData = (query) => {
		onLoaderFinished(30);
		fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
			console.log(contents);
			onLoaderFinished(60);
			setResult(contents);
			onLoaderFinished(100);
			// loading(false);
		});
	};

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
			{!loading &&
				result.map((item, index) => {
					if (item.type !== "video") return false;
					return <VideoCard key={index} video={item?.video} />;
				})}
		</div>
	);
};

export default AllCards;
