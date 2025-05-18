import { TextInput } from "flowbite-react";

export default function QuestionDescription() {
  return (
    <div className="mb-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
      <div className="flex flex-col items-center">
        <div className="mb-4 flex h-48 w-full max-w-md items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700">
          <p className="p-4 text-center text-gray-500 dark:text-gray-400">
            Image ou illustration de la question
            <br />
            (Contenu visuel relatif à la question)
          </p>
        </div>

        <TextInput
          className="w-full truncate text-sm text-gray-600 dark:text-gray-300"
          id="large"
          type="text"
          sizing="lg"
        />
        <p className="text-center text-gray-600 dark:text-gray-300"></p>
      </div>
    </div>
  );
}
