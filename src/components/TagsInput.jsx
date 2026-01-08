import { useState } from "react";
import colors from "../constants/colors";
import { useTranslation } from "react-i18next";

export default function TagsInput({
    tags = [],
    onAddTag,
    onRemoveTag,
    placeholder="Add a tag"
}) {
    const [ inputValue, setInputValue ] = useState("");
    const { t } = useTranslation('common');
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            e.preventDefault();
            onAddTag(inputValue.trim());
            setInputValue("");
        }
    }

    const handleAddButton = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            onAddTag(inputValue.trim());
            setInputValue("");
        }
    }

    return <div className="flex flex-col gap-2 flex-1">
        <div className="flex">
            <input
                type="text"
                className="border rounded-md py-1.5 px-3 outline-0 border-gray-200 shadow-sm text-sm w-full"
                style={{
                    color: colors.textPrimary
                }}
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleAddButton}
                style={{color: colors.textPrimary}}
            className="ml-2 border border-gray-200  px-4 rounded-md hover:bg-gray-100 transition-colors font-semibold cursor-pointer">
                {t('add')}
            </button>
        </div>

        <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
                <div key={index} className="bg-indigo-200/80 text-indigo-900 text-base  px-2 py-1 rounded-md flex items-center gap-2">
                    <span>{tag}</span>
                    <button
                        onClick={() => onRemoveTag(tag)}
                        className="text-indigo-500 hover:text-indigo-900 cursor-pointer"
                    >
                        &times;
                    </button>
                </div>
            ))}
        </div>
    </div>
}
