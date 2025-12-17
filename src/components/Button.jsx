export default function Button({ label, background, color="#fff", onClick, Icon } ){
    return <button className="text-md py-3.5 cursor-pointer 
        transition-all duration-200 font-semibold
            hover:brightness-110 w-full flex flex-row justify-center items-center gap-2
        " style={{background, color}} onClick={onClick}>
            {Icon}
            {label}
    </button>
}
