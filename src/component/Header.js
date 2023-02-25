import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ytLogo from "../images/yt-logo.png";
import ytLogoMobile from "../images/yt-logo-mobile.png";
import { SlMenu } from "react-icons/sl";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { useDispatch } from "react-redux";
import { toggleMenu } from "../redux/apiSlice";
import { fetchDataFromApi } from "../utils/api";
import AutoComplete from "./Autocomplete";
import { useSelector } from "react-redux";
const Header = ({ onLoaderFinished }) => {
	const [searchQuery, setSearchQuery] = useState("");
	const dispatch = useDispatch();
	const toggleMenuHandler = () => {
		dispatch(toggleMenu());
	};
	const [result, setResult] = useState([]);
	// const { searchQuery } = useParams();
	useEffect(() => {
		document.getElementById("root").classList.remove("custom-h");
		fetchSelectedCategoryData();
	}, [searchQuery]);

	const fetchSelectedCategoryData = (query) => {
		fetchDataFromApi(`auto-complete/?q=${searchQuery}`).then(({ results }) => {
			console.log(results);
			setResult(results);
			// loading(false);
		});
	};
	const IsMenuOpen = useSelector((store) => store.app.isMenuOpen);
	const { pathname } = useLocation();
	const pageName = pathname?.split("/")?.filter(Boolean)?.[0];
	return (
		<div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-white">
			<div className="flex h-5 items-center">
				{pageName !== "" && (
					<div
						className="flex md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
						onClick={() => toggleMenuHandler()}
					>
						{!IsMenuOpen ? (
							<CgClose className="text-black text-xl" />
						) : (
							<SlMenu className="text-black text-xl" />
						)}
					</div>
				)}

				<a href="/" className="flex h-5 items-center">
					<img className="h-full hidden dark:md:block" src={ytLogo} alt="Youtube" />
					<img className="h-full md:hidden" src={ytLogoMobile} alt="Youtube" />
				</a>
			</div>
			<div className="group flex items-center relative">
				<AutoComplete
					data={result}
					query={searchQuery}
					setquery={setSearchQuery}
					onLoaderFinished={onLoaderFinished}
				/>
			</div>
			<div className="flex items-center">
				<div className="hidden md:flex">
					<div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
						<RiVideoAddLine className="text-black text-xl cursor-pointer" />
					</div>
					<div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
						<FiBell className="text-black text-xl cursor-pointer" />
					</div>
				</div>
				<div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
					<img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" />
				</div>
			</div>
		</div>
	);
};

export default Header;
