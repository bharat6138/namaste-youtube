import React from "react";
import { Outlet } from "react-router-dom";
import BtnSlider from "./BtnSlider";
import LeftNav from "./LeftNav";

const MainContianer = () => {
	return (
		<div className="flex flex-row h-[calc(100%-56px)]">
			<LeftNav />
			<div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-[#0f0f0f]">
				<BtnSlider />
				<Outlet />
			</div>
		</div>
	);
};

export default MainContianer;
