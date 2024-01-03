import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Videos from "../components/Videos";

const Home = () => {
  const [nav, setNav] = useState(true);
  return (
    <>
      <Navbar setNav={setNav} nav={nav} />
      <div className="flex p-4 pt-[100px]">
        <Sidebar nav={nav} />
        <Videos />
      </div>
    </>
  );
};
export default Home;
