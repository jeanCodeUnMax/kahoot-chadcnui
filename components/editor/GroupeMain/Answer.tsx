export default function Answer() {
  return (
    <div className="cursor-pointer rounded-lg border-2 border-gray-200 bg-white p-4 transition-colors hover:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-blue-400">
      <label className="flex cursor-pointer items-start">
        <input
          type="checkbox"
          className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <div className="ml-3 min-w-0 flex-1">
          <h3 className="w-full font-medium text-gray-800 dark:text-white">
            <input
              type="text"
              value={
                "Ville située sur les rives de la Seine, connue pour la Tour Ville située sur les rives de la Seine, connue pour la Tour"
              }
              onChange={() => console.log("click")}
              placeholder="Entrez un nom pour votre quiz"
              className="w-full break-words whitespace-normal"
              style={{
                maxWidth: "100%",
                wordWrap: "break-word",
                overflowWrap: "break-word",
              }}
            />
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300"></p>
        </div>
      </label>
    </div>
  );
}
