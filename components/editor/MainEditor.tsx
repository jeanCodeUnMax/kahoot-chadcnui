import AreaAnswer from "./GroupeMain/AreaAnswer";
import QuestionDescription from "./GroupeMain/QuestionDescription";

export default function MainEditor() {
  return (
    <main className="min-h-screen flex-1 p-4">
      {/* Titre fixe en haut */}
      <div className="sticky top-16 z-10 mb-4 rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Question n° toto
        </h1>
      </div>

      {/* Description/Consigne */}
      <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900">
        <p className="text-gray-700 dark:text-gray-200">
          Lisez attentivement la question et sélectionnez la/les réponses qui
          vous semble correcte.trop de reponse vous donne un malus !
        </p>
      </div>

      {/* Image ou description principale */}
      <QuestionDescription />

      {/* 4 choix de réponse avec checkbox */}
      <AreaAnswer />
    </main>
  );
}
