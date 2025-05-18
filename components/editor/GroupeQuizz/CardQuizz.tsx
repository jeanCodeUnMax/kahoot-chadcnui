import { FaPlus, FaMinus } from "react-icons/fa";

export default function CardQuiz() {
  const isActive = false;
  return (
    <div
      key="X"
      className={`mb-4 rounded-lg border-2 p-4 ${
        isActive
          ? "border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900"
          : "border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800"
      }`}
      onClick={() => console.log("tata")}
    >
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-medium dark:text-white">Question X</h3>
        <div className="flex space-x-1">
          <button
            className="rounded bg-green-100 p-1 text-green-600 hover:bg-green-200 dark:bg-green-900 dark:text-green-400 dark:hover:bg-green-800"
            onClick={() => {
              console.log("zuzu");
            }}
          >
            <FaPlus size={16} />
          </button>
          <button
            className="rounded bg-red-100 p-1 text-red-600 hover:bg-red-200 dark:bg-red-900 dark:text-red-400 dark:hover:bg-red-800"
            onClick={() => {
              console.log("remi saute comme zebulon");
            }}
          >
            <FaMinus size={16} />
          </button>
        </div>
      </div>
      <p className="truncate text-sm text-gray-600 dark:text-gray-300">
        {"Question sans titre"}
      </p>
    </div>
  );
}
