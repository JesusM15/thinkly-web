import colors from "../constants/colors";

export default function Input({ type = 'text', required = false, placeholder, Icon }){
    return <div className="flex gap-4 items-center bg-gray-200 pl-4">
            <Icon color={colors.textSecondary} />
            <input 
                className="text-sm h-13 w-full border-b-2 border-gray-400 bg-gray-50
                    p-2 outline-0 focus:border-black placeholder:text-black
                "
                style={{color: colors.textPrimary}}
                type={type}
                placeholder={placeholder}
                required={false}

            />
        </div>
}