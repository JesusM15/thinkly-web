import React from "react"
import colors from "../constants/colors"
import { LuBrain } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import DecorationSquare from "../components/decorationSquare";

export default function LoginPage(){
    const { t } = useTranslation('login');

    return <main
    className="h-screen flex"
    style={{
        background: colors?.primary
    }}>
        <section className="flex-1/4 flex justify-center items-center h-full relative">   
            <div className="flex flex-col justify-center items-center gap-4">
                <LuBrain 
                    color="white"
                    size={96}
                    className="text-center text-3xl"
                />
                <p className="text-center text-white text-xl">
                    {t('slogan')}
                </p>
            </div>

        <DecorationSquare top="top-[18%]" left="left-[12%]" rotate="rotate-[-18deg]" />
        <DecorationSquare top="top-[12%]" left="left-[52%]" rotate="rotate-[15deg]" />
        <DecorationSquare top="top-[48%]" left="left-[10%]" rotate="rotate-[10deg]" />
        <DecorationSquare top="top-[42%]" left="left-[72%]" rotate="rotate-[18deg]" />
        <DecorationSquare top="top-[78%]" left="left-[38%]" rotate="rotate-[-12deg]" />
        <DecorationSquare top="top-[74%]" left="left-[78%]" rotate="rotate-[8deg]" />

        </section>
        <section className="bg-white flex h-full flex-1 ">

            <form>

            </form>
        </section>
    </main>
}