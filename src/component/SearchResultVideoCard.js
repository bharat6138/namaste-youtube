import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import frenchStrings from "react-timeago/lib/language-strings/en-short";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";

const SearchResultVideoCard = ({ video, date }) => {
	// Create formatter (English).
	const formatter = buildFormatter(frenchStrings);
	const { snippet, statistics } = video;
	const { title, descriptionSnippet, channelTitle, publishedAt, thumbnails } =
		snippet;
	const { viewCount } = statistics;
	return (
		<Link to={`/watch?v=${video?.id}`}>
			<div className="flex flex-col mb-8">
				<div className="relative h-48 md:h-40 md:rounded-xl overflow-hidden">
					<img className="h-full w-full object-cover" src={thumbnails?.high?.url} />
				</div>
				<div className="flex text-white mt-3">
					<div className="flex items-start">
						<div className="flex h-9 w-9 rounded-full overflow-hidden">
							<img
								className="h-full w-full object-cover"
								src={thumbnails?.high?.url}
							/>
						</div>
					</div>
					<div className="flex flex-col ml-3 overflow-hidden">
						<span className="text-sm font-bold line-clamp-2">{title}</span>
						<span className="text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
							{channelTitle}
						</span>
						<div className="flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
							<span>{`${abbreviateNumber(viewCount, 2)} views`}</span>
							<span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
								.
							</span>
							<span className="truncate">
								<TimeAgo date={publishedAt} formatter={formatter} />
							</span>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default SearchResultVideoCard;
