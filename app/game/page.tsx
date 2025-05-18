'use client';



import React, { useState, useEffect } from 'react';



// import { ChevronUp, ChevronDown, Plus, Minus, Save, Upload } from 'flowbite';
import { FaChevronUp, FaChevronDown, FaPlus, FaMinus, FaSave, FaUpload, FaUser } from 'react-icons/fa';


  

export default function GamePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isQuestionActive, setIsQuestionActive] = useState(true);
  const [questionType, setQuestionType] = useState('simple'); // 'simple' ou 'multiple'
  const [quizName, setQuizName] = useState('');
  const [quizTheme, setQuizTheme] = useState('');
  const themes = [
    'Culture Générale',
    'Sciences',
    'Histoire',
    'Géographie',
    'Sport',
    'Musique',
    'Cinéma',
    'Littérature',
    'Technologie'
  ];
  type QuestionOption = {
    id: number;
    text: string;
    isCorrect?: boolean;
  };

  type Question = {
    id: number;
    text: string;
    options: QuestionOption[];
  };

  const [questions, setQuestions] = useState<Question[]>([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      type: questionType,
      duration: formData.get('duration'),
      points: formData.get('points'),
      isActive: isQuestionActive
    };
    console.log('Données soumises:', data);
    // Traitement des données...
  };
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);

  useEffect(() => {
  if (questions.length > 0 && activeQuestionIndex >= 0 && activeQuestionIndex < questions.length) {
    setSelectedQuestion(questions[activeQuestionIndex]);
  } else {
    setSelectedQuestion(null);
  }
}, [questions, activeQuestionIndex]);

  // Handler for loading a quiz
  function handleLoadQuiz(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();
    // Simulate loading a quiz (replace with real logic later)
    alert('Chargement du quiz... (fonctionnalité à implémenter)');
  }

  // Handler for creating a quiz
  function handleCreateQuiz(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
    event.preventDefault();
    if (!quizName.trim()) {
      alert('Veuillez donner un nom à votre quiz');
      return;
    }
    // Initialize with a first question
    setQuestions([{ id: Date.now(), text: 'Nouvelle question', options: [] }]);
    setActiveQuestionIndex(0);
  }

  function navigateQuestions(direction: number): void {
    if (questions.length === 0) return;
    setActiveQuestionIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return 0;
      if (newIndex >= questions.length) return questions.length - 1;
      return newIndex;
    });
  }

  // Ajoute une nouvelle question après l'index donné
  function handleAddQuestion(index: number): void {
    const newQuestion: Question = {
      id: Date.now(),
      text: 'Nouvelle question',
      options: []
    };
    setQuestions((prevQuestions) => {
      const updated = [...prevQuestions];
      updated.splice(index + 1, 0, newQuestion);
      return updated;
    });
    setActiveQuestionIndex(index + 1);
  }

  const handleRemoveQuestion = (index: number): void => {
  const newQuestions: Question[] = [...questions];
  newQuestions.splice(index, 1);
  setQuestions(newQuestions);
  
  // Ajuste l'index actif si nécessaire
  if (newQuestions.length === 0) {
    setActiveQuestionIndex(-1); // Aucune question active si la liste est vide
    setSelectedQuestion(null);
  } else if (activeQuestionIndex >= newQuestions.length) {
    setActiveQuestionIndex(newQuestions.length - 1);
  }
};

  // Traitement des données...


  return (
  <>
      <div className="antialiased bg-gray-50 dark:bg-gray-900">
        {/* Navbar */}
        <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
          <div className="flex flex-wrap justify-between items-center">
            {/* Hamburger button for mobile */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Toggle sidebar</span>
            </button>

            {/* User profile button */}
            <button
              type="button"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 text-white focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
            >
            <span className="sr-only">Open user menu</span>
            <FaUser size={16} />
            </button>
            
          </div>
        </nav>

        <div className="flex pt-16">
          {/* Left Sidebar - Liste */}
        <aside
          className={`fixed top-16 left-0 z-40 w-64 h-screen transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 lg:static lg:w-64`}
        >
          <div className="overflow-y-auto h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            {/* En-tête avec titre */}
            <div className="bg-blue-600 text-white p-4">
              <h2 className="text-xl font-bold">Gestion des Quizz</h2>
            </div>
            
            {/* Section des actions principales */}
            <div className="p-4 border-b border-gray-300">
              <div className="grid grid-cols-2 gap-2 mb-4">
                <button 
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded flex items-center justify-center"
                  onClick={handleLoadQuiz}
                >
                  <FaUpload size={16} className="mr-2" />
                  Charger
                </button>
                <button 
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center justify-center"
                  onClick={handleCreateQuiz}
                >
                  <FaSave size={16} className="mr-2" />
                  Créer
                </button>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                  Nom du quiz
                </label>
                <input 
                  type="text" 
                  className="w-full p-2 border border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  value={quizName}
                  onChange={(e) => setQuizName(e.target.value)}
                  placeholder="Entrez un nom pour votre quiz"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
                  Thème
                </label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  value={quizTheme}
                  onChange={(e) => setQuizTheme(e.target.value)}
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
            <div className="flex justify-between items-center px-4 py-2 bg-gray-200 dark:bg-gray-700">
              <button 
                className="p-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
                onClick={() => navigateQuestions(-1)}
                disabled={activeQuestionIndex === 0 || questions.length === 0}
              >
                <FaChevronUp size={20} className="dark:text-white" />
              </button>
              <span className="font-medium dark:text-white">
                {questions.length > 0 ? `${activeQuestionIndex + 1}/${questions.length}` : 'Aucune question'}
              </span>
              <button 
                className="p-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
                onClick={() => navigateQuestions(1)}
                disabled={activeQuestionIndex === questions.length - 1 || questions.length === 0}
              >
                <FaChevronDown size={20} className="dark:text-white" />
              </button>
            </div>
            
            {/* Liste des questions */}
            <div className="flex-1 overflow-y-auto p-4">
              {questions.length === 0 ? (
                <div className="text-center py-6 text-gray-500 dark:text-gray-400">
                  Créez un nouveau quiz pour commencer à ajouter des questions
                </div>
              ) : (
                questions.map((question, index) => (
                  <div 
                    key={question.id}
                    className={`mb-4 p-4 rounded-lg border-2 ${
                      index === activeQuestionIndex 
                        ? 'border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-900' 
                        : 'border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800'
                    }`}
                    onClick={() => setActiveQuestionIndex(index)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium dark:text-white">Question {index + 1}</h3>
                      <div className="flex space-x-1">
                        <button 
                          className="p-1 rounded bg-green-100 hover:bg-green-200 text-green-600 dark:bg-green-900 dark:hover:bg-green-800 dark:text-green-400"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddQuestion(index);
                          }}
                        >
                          <FaPlus size={16} />
                        </button>
                        <button 
                          className="p-1 rounded bg-red-100 hover:bg-red-200 text-red-600 dark:bg-red-900 dark:hover:bg-red-800 dark:text-red-400"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveQuestion(index);
                          }}
                        >
                          <FaMinus size={16} />
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 truncate dark:text-gray-300">
                      {question.text || "Question sans titre"}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>
        </aside>

          {/* Main Content */}
        <main className="flex-1 p-4 min-h-screen">
  {/* Titre fixe en haut */}
  <div className="sticky top-16 bg-white dark:bg-gray-800 p-4 shadow-md rounded-lg mb-4 z-10">
    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Question 2</h1>
  </div>
  
  {/* Description/Consigne */}
  <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-6 border border-blue-200 dark:border-blue-800">
    <p className="text-gray-700 dark:text-gray-200">
      Lisez attentivement la question et sélectionnez la réponse qui vous semble correcte. Une seule réponse est possible.
    </p>
  </div>
  
  {/* Image ou description principale */}
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
    <div className="flex flex-col items-center">
      <div className="w-full max-w-md h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400 text-center p-4">
          Image ou illustration de la question
          <br />
          (Contenu visuel relatif à la question)
        </p>
      </div>
      <p className="text-lg font-semibold text-gray-800 dark:text-white text-center mb-2">
        Quelle est la capitale de la France?
      </p>
      <p className="text-gray-600 dark:text-gray-300 text-center">
        Choisissez la ville qui est la capitale officielle du pays.
      </p>
    </div>
  </div>
  
  {/* 4 choix de réponse avec checkbox */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
    {/* Option 1 */}
    <div className="bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-700 p-4 hover:border-blue-500 dark:hover:border-blue-400 cursor-pointer transition-colors">
      <label className="flex items-start cursor-pointer">
        <input 
          type="checkbox" 
          className="w-5 h-5 rounded border-gray-300 text-blue-600 mt-1 focus:ring-blue-500"
        />
        <div className="ml-3">
          <h3 className="font-medium text-gray-800 dark:text-white">Paris</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Ville située sur les rives de la Seine, connue pour la Tour Eiffel et le Louvre.
          </p>
        </div>
      </label>
    </div>
    
    {/* Option 2 */}
    <div className="bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-700 p-4 hover:border-blue-500 dark:hover:border-blue-400 cursor-pointer transition-colors">
      <label className="flex items-start cursor-pointer">
        <input 
          type="checkbox" 
          className="w-5 h-5 rounded border-gray-300 text-blue-600 mt-1 focus:ring-blue-500"
        />
        <div className="ml-3">
          <h3 className="font-medium text-gray-800 dark:text-white">Lyon</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Troisième plus grande ville française, située au confluent du Rhône et de la Saône.
          </p>
        </div>
      </label>
    </div>
    
    {/* Option 3 */}
    <div className="bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-700 p-4 hover:border-blue-500 dark:hover:border-blue-400 cursor-pointer transition-colors">
      <label className="flex items-start cursor-pointer">
        <input 
          type="checkbox" 
          className="w-5 h-5 rounded border-gray-300 text-blue-600 mt-1 focus:ring-blue-500"
        />
        <div className="ml-3">
          <h3 className="font-medium text-gray-800 dark:text-white">Marseille</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Deuxième plus grande ville et premier port de France, sur la côte méditerranéenne.
          </p>
        </div>
      </label>
    </div>
    
    {/* Option 4 */}
    <div className="bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-700 p-4 hover:border-blue-500 dark:hover:border-blue-400 cursor-pointer transition-colors">
      <label className="flex items-start cursor-pointer">
        <input 
          type="checkbox" 
          className="w-5 h-5 rounded border-gray-300 text-blue-600 mt-1 focus:ring-blue-500"
        />
        <div className="ml-3">
          <h3 className="font-medium text-gray-800 dark:text-white">Bordeaux</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Ville portuaire célèbre pour ses vignobles et son architecture du XVIIIe siècle.
          </p>
        </div>
      </label>
    </div>
  </div>
  
  
</main>

             {/* Right Sidebar - Options */}
      <aside
        className={`fixed top-16 right-0 z-40 w-64 h-screen bg-white border-l border-gray-200 lg:translate-x-0 dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:static lg:w-64`}
      >
        <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
          <h3 className="text-lg font-semibold mb-4 dark:text-white">Menu Options</h3>

          {/* Formulaire pour les paramètres de la question */}
          <form onSubmit={handleSubmit} className="mt-6">
            <h4 className="text-md font-medium mb-4 text-gray-700 dark:text-gray-300">Configuration de la Question</h4>
            
            <div className="grid grid-cols-1 gap-4">
              {/* Type de question (Simple/Multiple) */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Type de question
                </label>
                <div className="flex space-x-2">
                  <button 
                    type="button"
                    onClick={() => setQuestionType('simple')}
                    className={`px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      questionType === 'simple' 
                        ? 'bg-blue-600 text-white focus:ring-blue-500 hover:bg-blue-700' 
                        : 'bg-gray-200 text-gray-800 focus:ring-gray-500 hover:bg-gray-300'
                    }`}
                  >
                    Simple
                  </button>
                  <button 
                    type="button"
                    onClick={() => setQuestionType('multiple')}
                    className={`px-4 py-2 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 ${
                      questionType === 'multiple' 
                        ? 'bg-blue-600 text-white focus:ring-blue-500 hover:bg-blue-700' 
                        : 'bg-gray-200 text-gray-800 focus:ring-gray-500 hover:bg-gray-300'
                    }`}
                  >
                    Multiple
                  </button>
                </div>
              </div>

              {/* Durée de la question */}
              <div className="space-y-2">
                <label htmlFor="duration" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Durée (secondes)
                </label>
                <input
                  type="number"
                  id="duration"
                  name="duration"
                  min="1"
                  max="300"
                  defaultValue="30"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              {/* Points attribués */}
              <div className="space-y-2">
                <label htmlFor="points" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Points attribués
                </label>
                <input
                  type="number"
                  id="points"
                  name="points"
                  min="0"
                  defaultValue="100"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>

              {/* Bouton Activer/Désactiver - version corrigée avec état React */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  État de la question
                </label>
                <div className="relative inline-block w-full">
                  <div 
                    className="flex items-center cursor-pointer" 
                    onClick={() => setIsQuestionActive(!isQuestionActive)}
                  >
                    <div className="relative">
                      <div className="block bg-gray-200 dark:bg-gray-700 w-14 h-8 rounded-full"></div>
                      <div 
                        className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${
                          isQuestionActive ? 'transform translate-x-6' : ''
                        }`}
                      ></div>
                    </div>
                    <div className="ml-3 text-gray-700 dark:text-gray-300 font-medium">
                      {isQuestionActive ? 'Activée' : 'Désactivée'}
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
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  Enregistrer
                </button>
                <button 
                  type="reset"
                  className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                >
                  Annuler
                </button>
              </div>
            </div>
          </form>
        </div>
      </aside>
        </div>
      </div>
    </>
  );
}



