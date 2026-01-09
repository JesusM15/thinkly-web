import colors from "../constants/colors";

export default function QuestionTypeCard({ type, title, description, onSelect, Icon, textColor="text-indigo-700", bgColor="bg-indigo-100" }) {
    return (
        <article
            className="border rounded-lg border-gray-100 shadow-md p-4 hover:shadow-lg cursor-pointer bg-white flex gap-8 flex-1 justify-between
            px-8 py-6"
            onClick={() => onSelect(type)}
        >
            <div className={`self-center ${bgColor} w-12 h-12 flex items-center justify-center rounded-lg p-2 shadow-sm`}>
                <Icon className={`${textColor}`} size={24} />
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
            <span className="text-2xl font-semibold opacity-70" style={{
                color: colors.textSecondary
            }}>
                +
            </span>

        </article>
    );
}