import { AiOutlineStar, AiOutlineStrikethrough } from "react-icons/ai";
import colors from "../constants/colors";
import { useTranslation } from "react-i18next";
import { PiLightning } from "react-icons/pi";
import ProgressBar from "./ProgressBar";
import DegradadeIcon from "./DegradadeIcon";

export default function LevelCard({ user }){
    const { t } = useTranslation('common');

    const profile = user?.profile;
    const { next_level: nextLevel } = user?.profile

    return <article className="border rounded-lg border-gray-200 p-6" style={{
        backgroundColor: colors.background
    }}>

        <div className="flex">
            <div className="flex gap-3 flex-1">
                <DegradadeIcon
                    Icon={AiOutlineStar}
                />
                <div className="text-sm" style={{
                    color: colors.textSecondary
                }}>
                    <p className="">{t('currentLevel')}</p>
                    <span className="text-xl font-extrabold" style={{
                        color: colors.textPrimary
                    }}>
                        {t('level')} {user?.profile?.level?.level || 0}
                    </span>
                </div>


            </div>
            <div className="text-amber-700 font-semibold flex gap-1 justify-center items-center bg-amber-50  border-amber-200 px-4 h-7 rounded-full ">
                <PiLightning 
                    color={colors.gold}
                    size={20}
                    fontWeight={700}
                /> 
                {profile?.xp} XP
            </div>
        </div>

{nextLevel &&        <div className="pt-4" style={{color: colors.textSecondary}}>
            <div className="flex pb-2">
                <p className="text-sm flex-1">
                    {t('nextLevelMessage')}
                </p>
                <span className="font-semibold opacity-80" style={{color: colors.textPrimary}}> 
                    {profile?.xp}/{nextLevel?.xp_required} XP
                </span>
            </div>
            <ProgressBar 
                percent={((profile?.xp * 100) / nextLevel?.xp_required) }
            />
        </div>}


    </article>
}