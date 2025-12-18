import { useEffect, useState } from "react";
import colors from "../constants/colors";

export default function Input({
  type = "text",
  required = false,
  placeholder,
  Icon,
  value,
  onChange,
  error=null
}) {
    const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`flex gap-4 items-center pl-4 relative bg-gray-50
      `}
    >
      <Icon color={colors.textSecondary} />

      <div className={`border-b absolute w-full bottom-0 left-0   ${isFocused ? " border-gray-900 " : "border-gray-400 "} ${error && 'border-red-500'}`}></div>

      <input
        className="text-sm h-13 w-full bg-gray-50 p-2 outline-0
          placeholder:text-black"
        style={{ color: colors.textPrimary }}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}
