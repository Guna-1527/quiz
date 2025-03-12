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
    router.push(`/quiz/result?score=${score}&total=${questions.length}`);
  };

  if (loading)
    return <p className="text-center text-gray-500">Loading questions...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  const currentQuestion = questions[currentIndex];

  return (
    <div>
      <div className="navbar w-full h-[60px] bg-red-50"></div>
      <div className="main">
        <div className="sidebar w-[300px] h-[calc(100vh-60px)] bg-red-700"></div>
        <div className="mainContainer w-[calc(100vw-300px)] h-[calc(100vh-60px)]  bg-red-900"></div>
      </div>
    </div>
  );
}
