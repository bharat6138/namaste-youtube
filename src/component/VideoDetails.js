import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import { fetchDataFromApi } from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../redux/apiSlice";
import SuggestionVideoCard from "./SuggestionVideoCard";

const VideoDetails = () => {
	const [searchParams] = useSearchParams();
	console.log(searchParams.get("v"));
	const dispatch = useDispatch();
	const IsMenuOpen = useSelector((store) => store.app.isMenuOpen);
	const sidebar = document.getElementById("sidebar");
	const [video, setVideo] = useState();
	const [relatedVideos, setRelatedVideos] = useState();
	console.log(searchParams.get("v"));
	useEffect(() => {
		document.getElementById("root").classList.add("custom-h");
		fetchVideoDetails();
		fetchRelatedVideos();
		dispatch(closeMenu());
		checkSidebar();
	}, [searchParams.get("v")]);

	const fetchVideoDetails = () => {
		fetchDataFromApi(
			`videos?part=snippet%2CcontentDetails%2Cstatistics%2CtopicDetails&id=${searchParams.get(
				"v",
			)}&maxResults=50&key=AIzaSyBuXWOdtoRJd9LsgPzMWw_IxPky8jp1uiM`,
		).then((res) => {
			console.log(res.items[0]);
			setVideo(res.items[0]);
		});
	};

	const fetchRelatedVideos = () => {
		fetchDataFromApi(
			`search?part=snippet&relatedToVideoId=${searchParams.get(
				"v",
			)}&maxResults=25&type=video&key=AIzaSyBuXWOdtoRJd9LsgPzMWw_IxPky8jp1uiM`,
		).then((res) => {
			setRelatedVideos(res);
		});
	};
	const checkSidebar = () => {
		if (IsMenuOpen === false)
			return sidebar.setAttribute("style", "position:absolute");
	};
	// const fetchRelatedVideos = () => {
	// 	fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
	// 		console.log(res);
	// 		setRelatedVideos(res);
	// 	});
	// };

	return (
		<div className="flex justify-center flex-row h-[calc(100%-56px)] bg-black">
			<div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
				<div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
					<div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
						<ReactPlayer
							url={"https://www.youtube.com/watch?v=" + searchParams.get("v")}
							controls
							width="100%"
							height="500px"
							style={{ backgroundColor: "#000000" }}
							playing={true}
						/>
					</div>
					<div className="text-white font-bold text-sm md:text-xl mt-4 line-clamp-2">
						{video?.snippet?.title}
					</div>
					<div className="flex justify-between flex-col md:flex-row mt-4">
						<div className="flex">
							<div className="flex items-start">
								<div className="flex h-11 w-11 rounded-full overflow-hidden">
									<img
										className="h-full w-full object-cover"
										src={video?.snippet?.thumbnails?.default?.url}
									/>
								</div>
							</div>
							<div className="flex flex-col ml-3">
								<div className="text-white text-md font-semibold flex items-center">
									{video?.snippet?.channelTitle}
								</div>
								<div className="text-white/[0.7] text-sm">
									{video?.statistics?.favoriteCount} Subscribers
								</div>
							</div>
						</div>
						<div className="flex text-white mt-4 md:mt-0">
							<div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] text-sm">
								<AiOutlineLike className="text-xl text-white mr-2" />
								{`${abbreviateNumber(video?.statistics?.likeCount, 2)} Likes`}
							</div>
							<div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4 text-sm">
								{`${abbreviateNumber(video?.statistics?.viewCount, 2)} Views`}
							</div>
						</div>
					</div>
					<div className="flex justify-between flex-col md:flex-row mt-4 text-white whitespace-pre-line bg-[#232222] p-5 rounded-lg text-sm">
						{video?.snippet?.description}
					</div>
				</div>
				<div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
					{relatedVideos?.items?.map((item, index) => {
						return <SuggestionVideoCard key={index} video={item} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default VideoDetails;
