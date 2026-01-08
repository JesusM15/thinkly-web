import React from "react";

export default function SelectableButton({ item, isSelected, onClick }) {

    return <div className={`py-1.5 px-4 
    transition-colors border  flex gap-1 flex-1
    rounded-md cursor-pointer shadow-lg ${isSelected ? 'bg-indigo-700 border-indigo-700' : 'bg-white hover:bg-gray-200 border-gray-300'} flex justify-center items-center`} onClick={onClick}>
        {<item.icon
        
            color={isSelected ? "#fff" : "#4B5563"}
        />}
        <span className={`font-medium ${isSelected ? 'text-white' : 'text-gray-800'}`}>
            {item.label}
        </span>
    </div>
}