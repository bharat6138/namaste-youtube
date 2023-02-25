import React from "react";
import { Outlet } from "react-router-dom";
import BtnSlider from "./BtnSlider";
import LeftNav from "./LeftNav";
import Header from "./Header";
const MainContianer = () => {
	return (
		<>
			<Header />
			<div className="flex flex-row h-[calc(100%-56px)]">
				<LeftNav />
				<div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white">
					<BtnSlider />
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default MainContianer;
