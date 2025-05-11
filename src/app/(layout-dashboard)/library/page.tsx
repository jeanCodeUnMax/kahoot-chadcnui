import CardQuizz from "@/app/ui/CardQuizz";

export default function LibraryPage() {
  return (
    <>
      <h2>La Bibliothèques des quizz</h2>
      <div className="flex-row flex flex-wrap m-5">
        <CardQuizz />
        <CardQuizz />
        <CardQuizz />
        <CardQuizz />
        <CardQuizz />
        <CardQuizz />
        <CardQuizz />
        <CardQuizz />
        <CardQuizz />
        <CardQuizz />
        <CardQuizz />
        <CardQuizz />
      </div>
    </>
  );
}
