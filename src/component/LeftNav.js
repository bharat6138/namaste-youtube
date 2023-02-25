import React from "react";
import LeftNavMenuItem from "./LeftNavItem";
import { categories } from "../utils/constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LeftNav = ({ category, setcategory, onLoaderFinished }) => {
	const IsMenuOpen = useSelector((store) => store.app.isMenuOpen);
	const navigate = useNavigate();

	const clickHandler = (name, type) => {
		switch (type) {
			case "category":
				return setcategory(name);
			case "home":
				return setcategory(name);
			case "menu":
				return false;
			default:
				break;
		}
	};
	return (
		<div
			id="sidebar"
			className={`overflow-y-auto h-full py-4 bg-white absolute md:relative z-10  md:block w-[240px] overflow-y-auto h-full py-4 bg-white absolute md:relative z-10 translate-x-[-240px] md:translate-x-0  transition-all ${
				IsMenuOpen
					? "md:block w-[70px] hidden translate-x-[0px]"
					: "md:block w-[240px] translate-x-[0px]"
			}`}
		>
			{/* <div
			id="sidebar"
			className={`md:block w-[240px] overflow-y-auto h-full py-4 bg-white absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
				IsMenuOpen ? "translate-x-0" : ""
			}`}
		></div> */}
			<div
				className={`flex px-5 flex-col ${IsMenuOpen ? "px-2 items-center" : ""}`}
			>
				{categories.map((item) => {
					return (
						<React.Fragment key={item.name}>
							<LeftNavMenuItem
								text={item.type === "home" ? "Home" : item.name}
								icon={item.icon}
								action={() => {
									clickHandler(item.name, item.type);
									onLoaderFinished(30);
									navigate("/");
									onLoaderFinished(100);
								}}
								isMobile={IsMenuOpen}
								className={`${category === item.name ? "bg-black/[0.15]" : ""}`}
							/>
							{item.divider && <hr className="my-5 border-black/[0.2]" />}
						</React.Fragment>
					);
				})}
				<hr className="my-5 border-black/[0.2]" />
				<div className="text-black/[0.5] text-[12px]">Clone by: Namaste React</div>
			</div>
		</div>
	);
};

export default LeftNav;
