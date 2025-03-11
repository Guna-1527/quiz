"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

interface Question {
  id: string;
  question_text: string;
  correct_answer: string;
  incorrect_answer_1: string;
  incorrect_answer_2: string;
  incorrect_answer_3: string;
}

export default function QuizPage() {
  const params = useParams();
  const categoryId = params?.categoryId as string;
  const router = useRouter();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: string]: string;
  }>({});
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!categoryId) {
      setError("❌ Category ID is missing.");
      setLoading(false);
      return;
    }

    async function fetchQuestions() {
      try {
        const { data, error } = await supabase
          .from("questions")
          .select(
            "id, question_text, correct_answer, incorrect_answer_1, incorrect_answer_2, incorrect_answer_3"
          )
          .eq("category_id", categoryId);

        if (error) throw error;

        // Shuffle questions once after fetching
        const shuffledQuestions = shuffleArray(data || []);
        setQuestions(shuffledQuestions);

        // Set the shuffled answers for the first question
        if (shuffledQuestions.length > 0) {
          setShuffledAnswers(shuffleArray(getAnswers(shuffledQuestions[0])));
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, [categoryId]);

  // Function to shuffle an array
  function shuffleArray<T>(array: T[]): T[] {
    return [...array].sort(() => Math.random() - 0.5);
  }

  // Function to get all answers for a question
  function getAnswers(question: Question): string[] {
    return [
      question.correct_answer,
      question.incorrect_answer_1,
      question.incorrect_answer_2,
      question.incorrect_answer_3,
    ];
  }

  useEffect(() => {
    if (questions.length > 0) {
      setShuffledAnswers(shuffleArray(getAnswers(questions[currentIndex])));
    }
  }, [currentIndex, questions]);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questions[currentIndex].id]: answer,
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    let finalScore = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct_answer) {
        finalScore += 1;
      }
    });
    setScore(finalScore);
    router.push(`/quiz/result?score=${finalScore}&total=${questions.length}`);
  };

  if (loading)
    return <p className="text-center text-gray-500">Loading questions...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const currentQuestion = questions[currentIndex];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Quiz</h1>
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6">
        <p className="text-lg font-semibold text-gray-700 mb-4">
          {currentQuestion.question_text}
        </p>
        <ul className="space-y-2">
          {shuffledAnswers.map((answer) => (
            <li
              key={answer}
              className={`cursor-pointer py-2 px-4 rounded-lg transition ${
                selectedAnswers[currentQuestion.id] === answer
                  ? "bg-green-500 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
              onClick={() => handleAnswerSelect(answer)}
            >
              {answer}
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          {currentIndex < questions.length - 1 ? (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
