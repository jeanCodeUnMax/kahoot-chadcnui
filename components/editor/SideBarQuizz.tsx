import { FaChevronDown, FaChevronUp, FaSave, FaUpload } from "react-icons/fa";
import CardQuiz from "./GroupeQuizz/CardQuizz";
import { Button } from "flowbite-react";

export default function SideBarQuizz() {
  const sidebarOpen = false;
  const themes = [
    "Culture Générale",
    "Sciences",
    "Histoire",
    "Géographie",
    "Sport",
    "Musique",
    "Cinéma",
    "Littérature",
    "Technologie",
  ];

  return (
    <aside
      className={`fixed top-16 left-0 z-40 h-screen w-64 transition-transform duration-300 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } lg:static lg:w-64 lg:translate-x-0`}
    >
      <div className="h-full overflow-y-auto border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        {/* En-tête avec titre */}
        <div className="bg-blue-600 p-4 text-white">
          <h2 className="text-xl font-bold">Gestion des Quizz</h2>
        </div>

        {/* Section des actions principales */}
        <div className="border-b border-gray-300 p-4">
          <div className="mb-4 grid grid-cols-2 gap-2">
            <button
              className="flex items-center justify-center rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              onClick={() => console.log("click")}
            >
              <FaUpload size={16} className="mr-2" />
              Charger
            </button>
            <button
              className="flex items-center justify-center rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
              onClick={() => console.log("click")}
            >
              <FaSave size={16} className="mr-2" />
              Créer
            </button>
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
              Nom du quiz
            </label>
            <input
              type="text"
              className="w-full rounded border border-gray-300 p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              value={"toto"}
              onChange={() => console.log("click")}
              placeholder="Entrez un nom pour votre quiz"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-200">
              Thème
            </label>
            <select
              className="w-full rounded border border-gray-300 bg-white p-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
              value={"titi"}
              onChange={() => console.log("youpi")}
            >
              <option value="">Sélectionnez un thème</option>
              {themes.map((theme) => (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Navigation des questions */}
        <div className="flex items-center justify-between bg-gray-200 px-4 py-2 dark:bg-gray-700">
          <button
            className="rounded p-1 hover:bg-gray-300 disabled:opacity-50 dark:hover:bg-gray-600"
            onClick={() => console.log("tutu")}
            disabled={false}
          >
            <FaChevronUp size={20} className="dark:text-white" />
          </button>
          <span className="font-medium dark:text-white">69/70</span>
          <button
            className="rounded p-1 hover:bg-gray-300 disabled:opacity-50 dark:hover:bg-gray-600"
            onClick={() => console.log("webman aime bien se faire foueté")}
            disabled={false}
          >
            <FaChevronDown size={20} className="dark:text-white" />
          </button>
        </div>

        {/* Liste des questions */}
        <div className="flex-1 overflow-y-auto p-4">
          <CardQuiz />
          <CardQuiz />
          <Button color="green">Ajouter une question</Button>
        </div>
      </div>
    </aside>
  );
}
