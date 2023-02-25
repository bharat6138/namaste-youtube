import React from "react";
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";
import { popular } from "../utils/constants";
import { useSelector } from "react-redux";

function SampleNextArrow(props) {
	const { onClick } = props;
	return (
		<div
			className="h-[40px] w-[80px] right-5 z-[99999] flex items-center basis-[60px] justify-end grow-0 shrink-0 absolute bg-gradient-to-r from-transparent via-white to-white"
			onClick={onClick}
		>
			<div className="h-[40px] w-[40px] flex items-center justify-center rounded-full hover:bg-[#e5e5e5]">
				<SlArrowRight className="text-black text-lg " />
			</div>
		</div>
	);
}

function SamplePrevArrow(props) {
	const { onClick } = props;
	return (
		<div
			className="h-[40px] w-[80px] left-5 z-[99999] flex items-center basis-[60px] justify-start grow-0 shrink-0 absolute bg-gradient-to-r from-white via-white to-transparent"
			onClick={onClick}
		>
			<div className="h-[40px] w-[40px] flex items-center justify-center rounded-full hover:bg-[#e5e5e5]">
				<SlArrowLeft className="text-black text-lg " />
			</div>
		</div>
	);
}

const BtnSlider = () => {
	const IsMenuOpen = useSelector((store) => store.app.isMenuOpen);
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		focusOnSelect: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		variableWidth: true,
		initialSlide: 0,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<Slider
			{...settings}
			className="relative top-0 z-0  whitespace-nowrap flex   whitespace-nowrap flex -row items-center justify-start h-14 px-4 md:px-5 bg-white dark:bg-white"
		>
			{popular.map((item, index) => {
				return (
					<Link
						to={`/searchResult/${item.url}`}
						key={index}
						className="rounded-lg bg-[#f5f5f5] font-semibold hover:bg-[#eaeaea] text-black mr-[12px] height-[32px]  whitespace-nowrap flex  align-middle justify-center px-[12px] py-[8px] text-[13px] text-center"
					>
						{item.name}
					</Link>
				);
			})}
		</Slider>
	);
};

export default BtnSlider;
