import React from "react";
import SelectableButton from "./SelectableButton";
import colors from "../constants/colors";


export default function SelectButtonList({ data, onSelect, selectedItems, horizontal=true, label="" }) {

    return <div className={"flex flex-col gap-2 flex-1"}>
        <label className="text-base font-semibold" style={{color: colors.textPrimary}}>
            { label }
        </label>
        <div className={horizontal ? "flex gap-2" : "flex flex-col gap-3"}>            
            {data.map((item) => (
                <SelectableButton
                    key={item.id}
                    item={item}
                    isSelected={selectedItems.includes(item.id)}
                    onClick={() => onSelect(item.id)}
                />
            ))}
        </div>
    </div>
}