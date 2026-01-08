import React, { useState } from "react";
import Layout from "./layout";
import DegradadeIcon from "../components/DegradadeIcon";
import { BsArrowRight, BsStars } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import colors from "../constants/colors";
import InputForm from "../components/InputForm";
import SelectButtonList from "../components/SelectButtonList";
import { TbWorld } from "react-icons/tb";
import { IoLockClosedOutline } from "react-icons/io5";
import TagsInput from "../components/TagsInput";

export default function FormSetPage(){
    const { t: tCommon } = useTranslation('common');
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
                    {/* <div className="flex-1">

                    </div> */}
                    <SelectButtonList 
                        label={tCommon('visibility')}
                        data={[
                            { id: 'public', label: tCommon('public'), icon: TbWorld },
                            { id: 'private', label: tCommon('private'), icon: IoLockClosedOutline },
                        ]}
                        selectedItems={[ currentItem.is_public ? 'public' : 'private' ]}
                        onSelect={(id) => setCurrentItem(prevState => {
                            return {
                                ...prevState,
                                is_public: id == 'public'
                            }
                        })}
                    />
                </div>

                <div className="flex">
                    <TagsInput 
                        tags={currentItem.tags}
                        onAddTag={(tag) => setCurrentItem(prevState => {
                            return {
                                ...prevState,
                                tags: [ ...prevState.tags, tag ]
                            }
                        }
                        )}
                        onRemoveTag={(tag) => setCurrentItem(prevState => {
                            return {
                                ...prevState,
                                tags: prevState.tags.filter(t => t !== tag)
                            }
                        }
                        )}
                        placeholder={tForm('form.add_tag_placeholder')}
                    />
                </div>


            </form>

            <div className="flex w-4/5 justify-end items-end" >
                <button className="
                    mr-4 border border-gray-200  px-4 py-1.5 rounded-md hover:bg-gray-100 transition-colors font-semibold cursor-pointer
                ">
                    {tCommon('cancel')}
                </button>
                <button
                    className="
                    flex items-center gap-2
                    bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-md transition-colors font-semibold cursor-pointer
                    "
                >
                    {tCommon('continue')}
                    <BsArrowRight />
                </button>
            </div>
        </section>
    </Layout>
}