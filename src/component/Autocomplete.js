import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const AutoComplete = ({ data, query, setquery }) => {
	const [suggestions, setSuggestions] = useState([]);
	const [suggestionIndex, setSuggestionIndex] = useState(0);
	const [suggestionsActive, setSuggestionsActive] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e) => {
		const query = e.target.value.toLowerCase();
		setquery(query);
		if (query.length > 1) {
			const filterSuggestions = data.filter(
				(suggestion) => suggestion.toLowerCase().indexOf(query) > -1,
			);
			setSuggestions(filterSuggestions);
			setSuggestionsActive(true);
		} else {
			setSuggestionsActive(false);
		}
	};

	const handleClick = (e) => {
		setSuggestions([]);
		setquery(e.target.innerText);
		setSuggestionsActive(false);
	};
	// 9818848905
	const handleKeyDown = (e) => {
		// UP ARROW
		if (e.keyCode === 38) {
			if (suggestionIndex === 0) {
				return;
			}
			setSuggestionIndex(suggestionIndex - 1);
		}
		// DOWN ARROW
		else if (e.keyCode === 40) {
			if (suggestionIndex - 1 === suggestions.length) {
				return;
			}
			setSuggestionIndex(suggestionIndex + 1);
		}
		// ENTER
		else if (e.keyCode === 13 && query?.length > 0) {
			setquery(suggestions[suggestionIndex]);
			setSuggestionIndex(0);
			setSuggestionsActive(false);
			navigate(`/searchResult/${suggestions[suggestionIndex]}`);
		}
	};

	const Suggestions = () => {
		return (
			<ul className="bg-white border py-3 rounded-3xl border-[#cccccc] absolute top-[40px] z-999 lg:w-[540px] sm:w-[100%]">
				{suggestions.map((suggestion, index) => {
					return (
						<li
							className={
								index === suggestionIndex
									? "bg-[#eeeeee] items-center justify-start flex px-3 py-2 font-bold"
									: "items-center justify-start flex px-3 py-2 font-bold"
							}
							key={index}
							onClick={handleClick}
						>
							<div className="w-10 ">
								<IoIosSearch className="text-black text-xl" />
							</div>{" "}
							{suggestion}
						</li>
					);
				})}
			</ul>
		);
	};

	return (
		<>
			<div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#d8d8d8] rounded-l-3xl group-focus-within:border--[#d8d8d8]md:group-focus-within:ml-5 md:group-focus-within:pl-0">
				<div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
					<IoIosSearch className="text-black text-xl" />
				</div>

				<input
					className="bg-transparent outline-none text-black pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
					type="text"
					value={query}
					onChange={handleChange}
					onKeyDown={handleKeyDown}
				/>
				{suggestionsActive && <Suggestions />}
			</div>
			<button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#d8d8d8] rounded-r-3xl bg-white/[0.1]">
				<IoIosSearch className="text-black text-xl" />
			</button>
		</>
	);
};

export default AutoComplete;
