import React from "react";
import LeftNavMenuItem from "./LeftNavItem";
import { categories } from "../utils/constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LeftNav = ({ category, setcategory }) => {
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
			className={`overflow-y-auto h-full py-4 bg-white absolute md:relative z-10  md:translate-x-0 transition-all ${
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
								action={() => {
									clickHandler(item.name, item.type);
									navigate("/");
								}}
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
