import { FaUser, FaYoutube, FaMicrophone, FaBell } from "react-icons/fa";
import { MdOutlineSearch, MdOutlineVideoCall, MdMenu } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const Navbar = ({ setNav, nav }) => {
  return (
    <>
      <div className="fixed z-50 bg-[#0F0F0F] w-full p-4 flex justify-between items-center md:p-4">
        <div className="flex">
          <MdMenu onClick={() => setNav(!nav)} size={30} />
          <div className="flex items-center gap-1 ml-6">
            <div>
              <FaYoutube size={30} className="text-[#FF0000]" />
            </div>
            <h1 className="text-2xl font-bold tracking-tighter">YouTube</h1>
            <small className="-mt-8 text-gray-300">IN</small>
          </div>
        </div>
        <div className="flex items-center md:gap-5">
          <div className="flex items-center justify-center md:px-4 md:py-1.5 lg:bg-zinc-900 rounded-3xl md:border border-zinc-600">
            <input
              className="hidden md:flex md:w-96 bg-zinc-900 border-none outline-none"
              type="text"
              placeholder="Search"
            />
            <div className="cursor-pointer">
              <MdOutlineSearch size={30} />
            </div>
          </div>
          <div className="md:bg-[#222222] p-3 rounded-full cursor-pointer">
            <FaMicrophone size={20} />
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-9 cursor-pointer">
          <div>
            <MdOutlineVideoCall size={30} />
          </div>
          <div>
            <FaBell size={22} />
          </div>
          <div>
            <FaUser size={20} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
