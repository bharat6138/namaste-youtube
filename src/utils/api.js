import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
	params: { hl: "en", gl: "IN" },
	headers: {
		"X-RapidAPI-Key": "4596dbf03emsh3aeb8527c864ba3p1334bbjsn91fa17943875",
		// "X-RapidAPI-Key": "4902351b37msh1f3b2f72569b3a9p1fe51cjsnbbde08e1d334",
		"X-RapidAPI-Host": "youtube138.p.rapidapi.com",
	},
};

export const fetchDataFromApi = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);
	return data;
};
