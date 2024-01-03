import {
  MdHome,
  MdOutlineArrowForwardIos,
  MdOutlineSubscriptions,
} from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { GoHistory, GoClock } from "react-icons/go";
import { LuThumbsUp } from "react-icons/lu";

import { FaFireAlt } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { MdMusicNote, MdWifiTethering } from "react-icons/md";
import { PiFilmSlate } from "react-icons/pi";
import { SiYoutubegaming } from "react-icons/si";
import { BsTrophy } from "react-icons/bs";

import { MdOutlineSettings } from "react-icons/md";
import { GrFlag } from "react-icons/gr";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { BiMessageSquareError } from "react-icons/bi";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ nav }) => {
  return (
    <div
      className={` bg-[#0f0f0f] w-[280px] duration-500 pt-16 fixed top-0 ${
        nav ? "-left-72" : "left-0"
      } h-screen overflow-y-auto p-4 overflow-x-hidden `}
    >
      <div className="flex flex-col gap-5 border-b border-gray-400 py-4">
        <div className="flex items-center gap-7 bg-[#3D3D3D] py-2 rounded-md">
          <MdHome size={30} />
          <h2>Home</h2>
        </div>
        <div className="flex items-center gap-7">
          <SiYoutubeshorts size={25} />
          <h2>Shorts</h2>
        </div>
        <div className="flex items-center gap-7">
          <MdOutlineSubscriptions size={25} />
          <h2>Subscription</h2>
        </div>
      </div>

      <div className="flex flex-col gap-5 border-b border-gray-400 py-4">
        <h1 className="flex items-center gap-4 font-bold text-xl">
          You <MdOutlineArrowForwardIos />
        </h1>
        <div className="flex items-center gap-7">
          <GoHistory size={30} />
          <h2>History</h2>
        </div>
        <div className="flex items-center gap-7">
          <GoClock size={30} />
          <h2>Watch Later</h2>
        </div>
        <div className="flex items-center gap-7">
          <LuThumbsUp size={30} />
          <h2>Liked Videos</h2>
        </div>
      </div>

      <div className="flex flex-col gap-5 border-b border-gray-400 py-4">
        <h1 className="font-bold text-xl">Explore</h1>
        <div className="flex items-center gap-7">
          <FaFireAlt size={25} />
          <h2>Trending</h2>
        </div>
        <div className="flex items-center gap-7">
          <AiOutlineShopping size={25} />
          <h2>Shopping</h2>
        </div>
        <div className="flex items-center gap-7">
          <MdMusicNote size={25} />
          <h2>Music</h2>
        </div>
        <div className="flex items-center gap-7">
          <PiFilmSlate size={25} />
          <h2>Films</h2>
        </div>
        <div className="flex items-center gap-7">
          <MdWifiTethering size={25} />
          <h2>Live</h2>
        </div>
        <div className="flex items-center gap-7">
          <SiYoutubegaming size={25} />
          <h2>Gaming</h2>
        </div>
        <div className="flex items-center gap-7">
          <BsTrophy size={25} />
          <h2>Sports</h2>
        </div>
      </div>

      <div className="flex flex-col gap-5 border-b border-gray-400 py-4">
        <div className="flex items-center gap-7">
          <MdOutlineSettings size={25} />
          <h2>Settings</h2>
        </div>
        <div className="flex items-center gap-7">
          <GrFlag size={25} />
          <h2>Report history</h2>
        </div>
        <div className="flex items-center gap-7">
          <FaRegCircleQuestion size={25} />
          <h2>Help</h2>
        </div>
        <div className="flex items-center gap-7">
          <BiMessageSquareError size={25} />
          <h2>Send feedback</h2>
        </div>
      </div>

      <div className="flex flex-col gap-5 py-4 text-gray-400">
        <p>AboutPressCopyrightContact usCreatorAdvertiseDevelopers</p>
        <p>TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</p>
        <p>© 2023 Google LLC</p>
      </div>
    </div>
  );
};
export default Sidebar;
