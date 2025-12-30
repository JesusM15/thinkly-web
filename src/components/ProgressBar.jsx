export default function ProgressBar({ percent }){
  const safePercent = Math.min(100, Math.max(0, percent));
  const color =
    safePercent < 40
        ? "bg-red-500"
        : safePercent < 70
        ? "bg-yellow-500"
        : "bg-green-500";
  return (
    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 rounded-full`}
        style={{ width: `${safePercent}%` }}
      />
    </div>
  );
}