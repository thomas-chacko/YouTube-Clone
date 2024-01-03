import axios from "axios";

const baseUrl = "https://youtube-v31.p.rapidapi.com";
const options = {
  method: "GET",
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "03f01a9b39mshccf2d69b598a0b3p1d1759jsn14cebfccef40",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchApi = async (url) => {
  const { data } = await axios.get(`${baseUrl}/${url}`, options);

  return data;
};
