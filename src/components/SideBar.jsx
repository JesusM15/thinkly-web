import { NavLink } from "react-router";
import colors from "../constants/colors";
import ThinklyIcon from "./ThinklyIcon";
import { useTranslation } from "react-i18next";
import { AiOutlineHome, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import './../constants/colors.css';

const menu = [
  { label: "Home", to: "/", icon: AiOutlineHome },
  { label: "Explore", to: "/study", icon: AiOutlineSearch  },
  { label: "Practice", to: "/sets", icon: BsBook  },
  { label: "Profile", to: "/profile", icon: AiOutlineUser },
];

export default function SideBar(){
    const { t } = useTranslation('common');

    return <aside className="h-screen border border-gray-200 w-1/4">
        <div className="flex gap-2 items-center relative px-4 py-4">
            <ThinklyIcon />
            <h2 className="font-bold text-xl">
                <span style={{color: colors.primary }}>Think</span>ly
            </h2>

            <div className="border-b border-gray-200  absolute bottom-0 w-full left-0"></div>
        </div>

        <ul className=" px-4 py-4 flex flex-col gap-1">
            {
                menu?.map((item) => {
                    return <li key={item.to} className="">
                        <NavLink to={item.to}
                            className={({  isActive  }) => (
                            `flex px-2 py-2 rounded-lg transition flex-col font-semibold textSecondary duration-100
                            ${
                            isActive
                                    ? "bg-indigo-200/50 primary-color hover:bg-indigo-200/70"
                                    : "hover:bg-gray-100 bg-transparent hover:text-black textPrimaryHover"
                                }`
                            )}
                            // style={({ isActive }) => ({
                            //     color: isActive ? colors.primary + " !important": colors.textSecondary,
                            // })}
                        >
                            <div className="flex gap-3 items-center py-1">
                                <item.icon size={22} />
                                <p className="m-0">
                                    {t(item.label)}
                                </p>
                            </div>

                        </NavLink>
                    </li>
                })
            }
        </ul>
    </aside>
}