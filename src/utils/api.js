import axios from "axios";

// const BASE_URL = "https://youtube138.p.rapidapi.com";
const BASE_URL =
	"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2CtopicDetails&maxResults=25&chart=mostPopular&regionCode=IN&key=AIzaSyDxS9jzeqlWWn4bC-0E8LZabrD55S8LHUY";

// "https://youtube.googleapis.com/youtube/v3/browse?key=AIzaSyDxS9jzeqlWWn4bC-0E8LZabrD55S8LHUY";
const options = {
	params: { hl: "en", gl: "US" },
	// headers: {
	// 	"X-RapidAPI-Key": "AIzaSyDxS9jzeqlWWn4bC-0E8LZabrD55S8LHUY",
	// 	"X-RapidAPI-Host": "youtube138.p.rapidapi.com",
	// },
};

export const fetchDataFromApi = async (url) => {
	const { data } = await axios.get(`${BASE_URL}`);
	return data;
};
