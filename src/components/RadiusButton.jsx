import { AiOutlinePlus } from "react-icons/ai";
import colors from "../constants/colors";

export default function RadiusButton({ onClick, label, backgroundColor }){

    return <button className="px-4 cursor-pointer
        transition-all duration-100
    text-white hover:brightness-110 font-semibold py-2 rounded-full flex flex-row gap-1 items-center" style={{
            backgroundColor
        }} onClick={onClick}>
            <AiOutlinePlus 
                color={"#fff"}
                size={20}
            />
            {label}
        </button>
}