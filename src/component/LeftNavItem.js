import React from "react";

const LeftNavMenuItem = ({ text, icon, className, action, isMobile }) => {
	return (
		<div
			className={`text-black text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] ${className}
				${isMobile ? "align-middle" : "center"}
			`}
			onClick={action}
		>
			<span className={isMobile ? "text-xl" : "text-xl mr-5"}>{icon}</span>
			{isMobile ? "" : text}
		</div>
	);
};
export default LeftNavMenuItem;
