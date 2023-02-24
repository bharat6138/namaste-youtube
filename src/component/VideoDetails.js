import React, { useState, useLayoutEffect, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { abbreviateNumber } from "js-abbreviation-number";
import { fetchDataFromApi } from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../redux/apiSlice";
import SuggestionVideoCard from "./SuggestionVideoCard";

const VideoDetails = () => {
	const dispatch = useDispatch();
	const IsMenuOpen = useSelector((store) => store.app.isMenuOpen);
	const [video, setVideo] = useState([]);
	const [relatedVideos, setRelatedVideos] = useState([]);
	const { id } = useParams();
	const loading = useSelector((store) => store.app.loading);
	console.log(id);
	useEffect(() => {
		document.getElementById("root").classList.add("custom-h");
		fetchVideoDetails();
		fetchRelatedVideos();
		dispatch(closeMenu());
		console.log(video?.author?.avatar[0]?.url);
	}, [id]);
	useLayoutEffect(() => {
		checkSidebar();
	}, []);
	const fetchVideoDetails = () => {
		!loading &&
			fetchDataFromApi(`video/details/?id=${id}`).then((res) => {
				// console.log(res);
				setVideo(res);
			});
	};

	const fetchRelatedVideos = () => {
		!loading &&
			fetchDataFromApi(`video/related-contents/?id=${id}`).then((res) => {
				console.log(res);
				setRelatedVideos(res);
			});
	};
	const checkSidebar = () => {
		if (IsMenuOpen === true)
			return (document.getElementById("sidebar").style.position = "absolute");
	};
	return (
		<div className="flex justify-center flex-row h-[calc(100%-56px)] bg-white">
			<div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
				<div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto">
					<div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
						<ReactPlayer
							url={`https://www.youtube.com/watch?v=${id}`}
							controls
							width="100%"
							height="100%"
							style={{ backgroundColor: "#000000" }}
							playing={true}
						/>
					</div>
					<div className="text-black font-bold text-sm md:text-xl mt-4 line-clamp-2">
						{video?.title}
					</div>
					<div className="flex justify-between flex-col md:flex-row mt-4">
						<div className="flex">
							<div className="flex items-start">
								<div className="flex h-11 w-11 rounded-full overflow-hidden">
									<img
										className="h-full w-full object-cover"
										src={video?.author?.avatar[0]?.url}
									/>
								</div>
							</div>
							<div className="flex flex-col ml-3">
								<div className="text-black text-md font-semibold flex items-center">
									{video?.author?.title}
									{video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
										<BsFillCheckCircleFill className="text-black/[0.5] text-[12px] ml-1" />
									)}
								</div>
								<div className="text-black/[0.7] text-sm">
									{video?.author?.stats?.subscribersText}
								</div>
							</div>
						</div>
						<div className="flex text-black mt-4 md:mt-0">
							<div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]">
								<AiOutlineLike className="text-xl text-black mr-2" />
								{`${abbreviateNumber(video?.stats?.views, 2)} Likes`}
							</div>
							<div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] ml-4">
								{`${abbreviateNumber(video?.stats?.views, 2)} Views`}
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col py-6 px-4 overflow-y-auto lg:w-[350px] xl:w-[400px]">
					{relatedVideos?.contents?.map((item, index) => {
						if (item?.type !== "video") return false;
						return <SuggestionVideoCard key={index} video={item?.video} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default VideoDetails;
