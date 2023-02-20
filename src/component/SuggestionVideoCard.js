import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/en-short";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
// import en from "javascript-time-ago/locale/en.json";
const SuggestionVideoCard = ({ video }) => {
	// Create formatter (English).
	const formatter = buildFormatter(frenchStrings);
	const { snippet, statistics } = video;
	const { title, descriptionSnippet, channelTitle, publishedAt, thumbnails } =
		snippet;
	// const { viewCount } = statistics;
	return (
		<Link to={`/video/${video?.videoId}`}>
			<div className="flex mb-3">
				<div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
					<img className="h-full w-full object-cover" src={thumbnails?.high?.url} />
				</div>
				<div className="flex flex-col ml-3 overflow-hidden">
					<span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-white">
						{title}
					</span>
					<span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
						{channelTitle}
					</span>
					<div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
						{/* <span>{`${abbreviateNumber(viewCount, 2)} views`}</span> */}
						<span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
							.
						</span>
						<span className="truncate">
							<TimeAgo date={publishedAt} formatter={formatter} />
						</span>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default SuggestionVideoCard;
