import colors from "../constants/colors";

export default function InputForm({ 
    label,
    placeholder=label,
    required=false,
    type = 'text',
    onChange=(e) => {},
    value
 }){

    return <div className="flex flex-col gap-1 flex-1">
        <label className="text-base font-semibold" style={{
            color: colors.textPrimary
        }}>
            {label} {required && ' *'}
        </label>
        {
            (type == 'text' || type == 'email' || type == 'password') ? 
            <input 
                type={type}
                className="
                    border rounded-md py-1.5 px-3 outline-0 border-gray-200 shadow-sm text-sm
                "
                style={{
                    color: colors.textPrimary
                }}
                required={required}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            : type == 'textarea' ? 
            <textarea 
                className="
                    border rounded-md py-1.5 px-3 outline-0 border-gray-200 shadow-sm text-sm min-h-32 resize-none
                "
                style={{
                    color: colors.textPrimary
                }}        
                required={required}
                value={value}
                onChange={onChange}
                placeholder={placeholder}>
                    {value}
            </textarea> : null
        }
    </div>
}