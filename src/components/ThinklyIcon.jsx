import { LuBrain } from "react-icons/lu";
import colors from "../constants/colors";



export default function ThinklyIcon({ size = 30 }){

    return <button className={`h-${size} w-${size} py-1.5 px-2.5 rounded-lg cursor-pointer outline-none`} style={{
        background: colors.primary
    }}>
        <LuBrain color={"#fff"} size={size} />
    </button>
};
