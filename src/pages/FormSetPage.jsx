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
import { createSet } from "../../api/sets";
import { useNavigate } from "react-router";

export default function FormSetPage(){
    const { t: tCommon } = useTranslation('common');
    const { t: tForm } = useTranslation('setform');
    const navigate = useNavigate();

    const [ currentItem, setCurrentItem ] = useState({
        title: '',
        tags: [],
        is_public: false
    });

    const [ isSaving, setIsSaving ] = useState(false);

    const handleCreateSet = async () => {
        try{
            setIsSaving(true);
            const res = await createSet(currentItem);
            setIsSaving(false);
            if(res.status != 201){
                return;
            }
            navigate(`/set-creator/${res?.data?.id}`);
            // Handle success (e.g., navigate to the created set page)
        } catch (error) {
            // Handle error (e.g., show error message)
        }
    };

    return  <Layout>
        <section className={`flex items-center flex-col gap-8 justify-center p-12 relative ${isSaving ? 'opacity-60 pointer-events-none' : ''}`}>
            {isSaving && <div className="h-12 w-12 absolute top-1/2 left-1/2   ">
                    <div class="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                    <svg class="w-16 h-16 animate-spin text-gray-900/50" viewBox="0 0 64 64" fill="none"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                        <path
                        d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                        stroke={colors.primary} stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path
                        d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                        stroke={colors.background} stroke-width="5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-900">
                        </path>
                    </svg>
                    </div>  
            </div>}
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
                    onClick={handleCreateSet}
                >
                    {tCommon('continue')}
                    <BsArrowRight />
                </button>
            </div>
        </section>
    </Layout>
}