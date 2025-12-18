import { useTranslation } from "react-i18next";
import colors from "../constants/colors";
import { AiOutlineFire } from "react-icons/ai";
import './../static/animation.css';

export default function Streak({ user }){
    const { t } = useTranslation('common');

    return  <p className="px-4 py-2 h-10
        rounded-full  text-md font-semibold text-center justify-center
    flex  items-center gap-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg shadow-amber-200" style={{
    }}>
        <AiOutlineFire 
            className="animate-flame"
            size={20}
            color={"#fff"}
        />
        {user?.profile?.streak} {t('days')}
    </p>
}