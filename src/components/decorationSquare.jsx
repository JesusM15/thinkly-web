import React from "react"
import colors from "../constants/colors"

export default function decorationSquare({ top, left, rotate }){
    return <div className={`absolute h-20 w-20 border-3
        ${rotate}
        ${top} ${left} rounded-md`} style={{
        borderColor: colors.gold,
    }}>
        
    </div>
}