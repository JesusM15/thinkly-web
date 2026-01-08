export default function DegradadeIcon({
    iconSize=24,
    size = '12',
    color="#fff",
    Icon
}){

    return <div className={`h-${size} w-${size} p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-indigo-200 flex justify-center items-center`} style={{
    }}>
        <Icon 
            color={color}
            size={iconSize}
        />
    </div>
}