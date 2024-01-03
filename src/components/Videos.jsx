import { useEffect, useState } from "react";
import { fetchApi } from "../api";
import { MdVerified } from "react-icons/md";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchApi("search?part=snippet").then((data) => {
      // console.log(data.items);
      setVideos(data.items);
    });
  }, []);
  return (
    <div className="w-full flex-grow-1 ml-[auto] p-4 overflow-y-auto">
      <div className=" grid grid-cols-1 md:grid-cols-3 place-items-center gap-5">
        {videos?.map((item, i) => (
          <div className="h-[400px]" key={i}>
            <img
              className="h-[300px] w-[500px]"
              src={item.snippet.thumbnails.high.url}
              alt="no"
            />
            <h1>{item.snippet.title}</h1>
            <p className="text-[#AAAAAA] flex items-center gap-1 pt-2">
              {item.snippet.channelTitle}
              <MdVerified />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Videos;
