const isQuestionActive = false;

export default function SideBarOption() {
  const questionType = "simple";

  return (
    <aside
      className={
        "top-16 right-0 z-40 flex h-screen w-64 border-l border-gray-200 bg-white transition-transform duration-300 lg:translate-x-0 dark:border-gray-700 dark:bg-gray-800"
      }
    >
      <div className="h-full overflow-y-auto bg-white px-3 py-5 dark:bg-gray-800">
        <h3 className="mb-4 text-lg font-semibold dark:text-white">
          Menu Options
        </h3>

        {/* Formulaire pour les paramètres de la question */}
        <form className="mt-6">
          <h4 className="text-md mb-4 font-medium text-gray-700 dark:text-gray-300">
            Configuration de la Question
          </h4>

          <div className="grid grid-cols-1 gap-4">
            {/* Type de question (Simple/Multiple) */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Type de question
              </label>
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => console.log("toto")}
                  className={`focus:ring-opacity-50 rounded-l-lg px-4 py-2 focus:ring-2 focus:outline-none ${
                    questionType === "simple"
                      ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500"
                  }`}
                >
                  Simple
                </button>
                <button
                  type="button"
                  onClick={() => console.log("tata")}
                  className={`focus:ring-opacity-50 rounded-r-lg px-4 py-2 focus:ring-2 focus:outline-none ${
                    questionType === "multiple"
                      ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500"
                  }`}
                >
                  Multiple
                </button>
              </div>
            </div>

            {/* Durée de la question */}
            <div className="space-y-2">
              <label
                htmlFor="duration"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Durée (secondes)
              </label>
              <input
                type="number"
                id="duration"
                name="duration"
                min="1"
                max="300"
                defaultValue="30"
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Points attribués */}
            <div className="space-y-2">
              <label
                htmlFor="points"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Points attribués
              </label>
              <input
                type="number"
                id="points"
                name="points"
                min="0"
                defaultValue="100"
                className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Bouton Activer/Désactiver  */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                État de la question
              </label>
              <div className="relative inline-block w-full">
                <div
                  className="flex cursor-pointer items-center"
                  onClick={() => !isQuestionActive}
                >
                  <div className="relative">
                    <div className="block h-8 w-14 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    <div
                      className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white transition-transform duration-300 ${
                        isQuestionActive ? "translate-x-6 transform" : ""
                      }`}
                    ></div>
                  </div>
                  <div className="ml-3 font-medium text-gray-700 dark:text-gray-300">
                    {isQuestionActive ? "Activée" : "Désactivée"}
                  </div>
                </div>
                {/* Input hidden pour soumettre la valeur */}
                <input
                  type="hidden"
                  name="isActive"
                  value={isQuestionActive.toString()}
                />
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex space-x-3 pt-4">
              <button
                type="submit"
                className="focus:ring-opacity-50 flex-1 rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </form>
      </div>
    </aside>
  );
}
