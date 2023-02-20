import React from "react";
import LeftNavMenuItem from "./LeftNavItem";
import { categories } from "../utils/constants";
import { useSelector } from "react-redux";

const LeftNav = () => {
	const IsMenuOpen = useSelector((store) => store.app.isMenuOpen);
	return (
		<div
			id="sidebar"
			className={`overflow-y-auto h-full py-4 bg-[#0f0f0f] absolute md:relative z-10  md:translate-x-0 transition-all ${
				!IsMenuOpen
					? "md:block w-[70px] hidden"
					: "md:block w-[240px] translate-x-[0px]"
			}`}
		>
			<div className="flex px-5 flex-col">
				{categories.map((item) => {
					return (
						<React.Fragment key={item.name}>
							<LeftNavMenuItem
								text={item.type === "home" ? "Home" : item.name}
								icon={item.icon}
							/>
							{item.divider && <hr className="my-5 border-white/[0.2]" />}
						</React.Fragment>
					);
				})}
				<hr className="my-5 border-white/[0.2]" />
				<div className="text-white/[0.5] text-[12px]">Clone by: Namaste React</div>
			</div>
		</div>
	);
};

export default LeftNav;
