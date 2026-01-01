import React, { useState } from "react";
import Layout from "./layout";
import DegradadeIcon from "../components/DegradadeIcon";
import { BsStars } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import colors from "../constants/colors";
import InputForm from "../components/InputForm";

export default function FormSetPage(){

    const { t: tForm } = useTranslation('setform');
    const [ currentItem, setCurrentItem ] = useState({
        title: '',
        tags: [],
        is_public: false
    });

    return  <Layout>
        <section className="flex items-center flex-col gap-8 justify-center p-12">
            <div className="text-center flex flex-col justify-center items-center gap-3">
                <DegradadeIcon
                    Icon={BsStars}
                    size={'14'}
                    iconSize={28}
                />
                <h3 className="font-bold text-2xl" style={{
                    color: colors.textPrimary
                }}>
                    {tForm('newSet')}
                </h3>
                <p className="" style={{
                    color: colors.textSecondary
                }}>
                    {tForm('instruction')}
                </p>
            </div>
            <form className="rounded-lg border border-gray-200 flex-col gap-6 shadow-md p-4 flex w-4/5" style={{
            }}>
                <InputForm
                    label={tForm('form.title')}
                    required
                    placeholder={tForm('form.title_placeholder')}
                    value={currentItem?.title}
                    onChange={({ target }) => {
                        setCurrentItem(prevState => {
                            return {
                                ...prevState,
                                title: target.value
                            }
                        })
                    }}
                />

                <InputForm
                    label={tForm('form.title')}
                    type="textarea"
                    placeholder={tForm('form.title_placeholder')}
                    value={currentItem?.description}
                    onChange={({ target }) => {
                        setCurrentItem(prevState => {
                            return {
                                ...prevState,
                                description: target.value
                            }
                        })
                    }}
                />

                <div className="flex ">
                    
                </div>


            </form>
        </section>
    </Layout>
}