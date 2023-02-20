import React from "react";
import Slider from "react-slick";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className="h-[40px] w-[80px] right-5 z-[99999] flex items-center basis-[60px] justify-end grow-0 shrink-0 absolute bg-gradient-to-r from-transparent via-black to-black"
			onClick={onClick}
		>
			<div className="h-[40px] w-[40px] flex items-center justify-center rounded-full hover:bg-[#3f3f3f]">
				<SlArrowRight className="text-white text-lg " />
			</div>
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className="h-[40px] w-[80px] left-5 z-[99999] flex items-center basis-[60px] justify-start grow-0 shrink-0 absolute bg-gradient-to-r from-black via-black to-transparent"
			onClick={onClick}
		>
			<div className="h-[40px] w-[40px] flex items-center justify-center rounded-full hover:bg-[#3f3f3f]">
				<SlArrowLeft className="text-white text-lg " />
			</div>
		</div>
	);
}

const BtnSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
		variableWidth: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<Slider
			{...settings}
			className="sticky top-0 z-10  whitespace-nowrap flex   whitespace-nowrap flex -row items-center justify-start h-14 px-4 md:px-5 bg-white dark:bg-black"
		>
			<button className="rounded-lg  bg-white font-semibold text-black mr-[12px] height-[32px]  whitespace-nowrap flex  align-middle justify-center px-[12px] py-[8px] text-[13px]">
				All
			</button>
			<button className="rounded-lg bg-[#323232] font-semibold hover:bg-[#4e4e4e] text-white mr-[12px] height-[32px]  whitespace-nowrap flex  align-middle justify-center px-[12px] py-[8px] text-[13px]">
				Music
			</button>
			<button className="rounded-lg bg-[#323232] font-semibold hover:bg-[#4e4e4e] text-white mr-[12px] height-[32px]  whitespace-nowrap flex  align-middle justify-center px-[12px] py-[8px] text-[13px]">
				Mixes
			</button>
			<button className="rounded-lg bg-[#323232] font-semibold hover:bg-[#4e4e4e] text-white mr-[12px] height-[32px]  whitespace-nowrap flex  align-middle justify-center px-[12px] py-[8px] text-[13px]">
				Live
			</button>
			<button className="rounded-lg bg-[#323232] font-semibold hover:bg-[#4e4e4e] text-white mr-[12px] height-[32px]  whitespace-nowrap flex  align-middle justify-center px-[12px] py-[8px] text-[13px]">
				Scene
			</button>
			<button className="rounded-lg bg-[#323232] font-semibold hover:bg-[#4e4e4e] text-white mr-[12px] height-[32px]  whitespace-nowrap flex  align-middle justify-center px-[12px] py-[8px] text-[13px]">
				Comedy Clubs
			</button>
			<button className="rounded-lg bg-[#323232] font-semibold hover:bg-[#4e4e4e] text-white mr-[12px] height-[32px]  whitespace-nowrap flex  align-middle justify-center px-[12px] py-[8px] text-[13px]">
				Kapil Sharma
			</button>
			<button className="rounded-lg bg-[#323232] font-semibold hover:bg-[#4e4e4e] text-white mr-[12px] height-[32px]  whitespace-nowrap flex  align-middle justify-center px-[12px] py-[8px] text-[13px]">
				Bollywood Music
			</button>
			<button className="rounded-lg bg-[#323232] font-semibold hover:bg-[#4e4e4e] text-white mr-[12px] height-[32px]  whitespace-nowrap flex  align-middle justify-center px-[12px] py-[8px] text-[13px]">
				Lofi Mixes
			</button>
			<button className="rounded-lg bg-[#323232] font-semibold hover:bg-[#4e4e4e] text-white mr-[12px] height-[32px]  whitespace-nowrap flex  align-middle justify-center px-[12px] py-[8px] text-[13px]">
				Children's Music
			</button>
			<button className="rounded-lg bg-[#323232] font-semibold hover:bg-[#4e4e4e] text-white mr-[12px] height-[32px]  whitespace-nowrap flex  align-middle justify-center px-[12px] py-[8px] text-[13px]">
				Bhajan Music
			</button>
			<button className="rounded-lg bg-[#323232] font-semibold hover:bg-[#4e4e4e] text-white mr-[12px] height-[32px]  whitespace-nowrap flex  align-middle justify-center px-[12px] py-[8px] text-[13px]">
				News
			</button>
			<button className="rounded-lg bg-[#323232] font-semibold hover:bg-[#4e4e4e] text-white mr-[12px] height-[32px]  whitespace-nowrap flex  align-middle justify-center px-[12px] py-[8px] text-[13px]">
				Recently Updated
			</button>
			<button className="rounded-lg bg-[#323232] font-semibold hover:bg-[#4e4e4e] text-white mr-[12px] height-[32px]  whitespace-nowrap flex  align-middle justify-center px-[12px] py-[8px] text-[13px]">
				New to You
			</button>
			<button className="rounded-lg bg-[#323232] font-semibold hover:bg-[#4e4e4e] text-white mr-[12px] height-[32px]  whitespace-nowrap flex  align-middle justify-center px-[12px] py-[8px] text-[13px]">
				Scene
			</button>
		</Slider>
	);
};

export default BtnSlider;
