import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaBriefcase } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { MdAccessTime } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaMobile } from "react-icons/fa";
import GlobalSidebar from "../../GlobalComponent/GlobalSidebar";

function Sidebar() {
  return (
    <div className="h-screen flex-1 md:w-64 w-0 fixed transition-al top-0 duration-300 ease-in-out overflow-auto bg-black text-[#fff] py-8">
      <ul className="h-auto">
        <GlobalSidebar
          icon={<HiOutlineComputerDesktop />}
          title={"Dashboard"}
        />
        <GlobalSidebar icon={<FaBriefcase />} title={"E-Voting"} />
        <GlobalSidebar icon={<MdOutlinePayment />} title={"Ticketing"} />
        <GlobalSidebar icon={<FaMoneyCheckAlt />} title={"Fund Raising"} />
        <GlobalSidebar icon={<CgMenuGridO />} title={"Life Insight"} />
        <GlobalSidebar icon={<MdAccessTime />} title={"Cash Payout"} />
        <GlobalSidebar icon={<IoIosSettings />} title={"Check-In App"} />
        <GlobalSidebar icon={<FaUserPlus />} title={"Admin Team"} />
        <GlobalSidebar icon={<FaMobile />} title={"Hire Our Team"} />
        <GlobalSidebar icon={<FaBriefcase />} title={"Our Services"} />
        <GlobalSidebar icon={<FaBriefcase />} title={"Health Center"} />
      </ul>
    </div>
  );
}

export default Sidebar;
