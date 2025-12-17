import React from "react"
import colors from "../constants/colors"
import { LuBrain } from "react-icons/lu";
import { useTranslation } from "react-i18next";
import DecorationSquare from "../components/decorationSquare";
import Input from "../components/Input";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Button from "../components/Button";
import googleIcon from '../assets/logos/google.png'

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
        <DecorationSquare top="top-[48%]" left="left-[10%]" rotate="rotate-[-10deg]" />
        <DecorationSquare top="top-[42%]" left="left-[72%]" rotate="rotate-[18deg]" />
        <DecorationSquare top="top-[78%]" left="left-[38%]" rotate="rotate-[-12deg]" />
        <DecorationSquare top="top-[74%]" left="left-[78%]" rotate="rotate-[8deg]" />

        </section>
        <section className="bg-white flex h-full flex-1 px-20 py-16 flex-col gap-12">
            <h1 className="text-3xl font-bold" style={{color: colors.textPrimary}}>
                <span style={{color: colors.primary}}>Think</span>ly
            </h1>

            <p className=" font-semibold flex flex-wrap" style={{color: colors.textPrimary}}>
                {t('loginMessage')}
                <span className="" style={{color: colors.primary}}>
                     {t('register_here')}
                </span>
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => {
                e.preventDefault();
            }}>
                <div className="flex flex-col gap-4 pb-6">
                    <Input 
                        Icon={
                            FaUser
                        }
                        placeholder={t('username')}
                    />
                    <Input 
                        Icon={
                            RiLockPasswordFill
                        }
                        placeholder={t('password')}
                    />
                </div>
                
                <Button 
                    label={t('LoginThinkly')}
                    background={colors.primary}
                    onClick={() => {
                        console.log("click login")
                    }}
                />
                    
                <Button 
                    label={t('LoginWithGoogle')}
                    background={colors.textPrimary}
                    onClick={() => {
                        console.log("click login")
                    }}
                    Icon={<img src={googleIcon} className="h-6 w-6" />}
                />
            </form>
        </section>
    </main>
}