import axios from "axios";

// const BASE_URL =
// 	"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2CtopicDetails&maxResults=25&chart=mostPopular&regionCode=IN&key=AIzaSyDxS9jzeqlWWn4bC-0E8LZabrD55S8LHUY";

// const BASE_URL = "https://youtube138.p.rapidapi.com";
const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

// "https://youtube.googleapis.com/youtube/v3/browse?key=AIzaSyDxS9jzeqlWWn4bC-0E8LZabrD55S8LHUY";
const options = {
	//params: { hl: "en", gl: "US" },
	headers: {
		"X-RapidAPI-Key": "AIzaSyBuXWOdtoRJd9LsgPzMWw_IxPky8jp1uiM",
		"X-RapidAPI-Host": "localhost:3000",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
		"Access-Control-Allow-Headers":
			"Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length",
	},
};

export const fetchDataFromApi = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`);
	return data;
};

// https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=5rOiW_xY-kc&type=video&key={YOUR_API_KEY}
