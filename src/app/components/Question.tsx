"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { dummyQuestions } from "../lib/data";
import { shuffleArray } from "../utils/shuffle";

interface Question {
  id: number;
  question_text: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const QuizPage = () => {
  const { category } = useParams();
  const router = useRouter();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!category || typeof category !== "string") return;
    setQuestions(dummyQuestions[category] || []);
  }, [category]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold">Quiz: {category}</h1>
      {questions.length > 0 ? (
        <div>
          <p>{questions[currentIndex].question_text}</p>
          <ul>
            {shuffleArray([...questions[currentIndex].incorrect_answers, questions[currentIndex].correct_answer]).map((answer, i) => (
              <li key={i} className="border p-2 mt-2 cursor-pointer">{answer}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading questions...</p>
      )}
      <button onClick={() => router.push('/quiz/result')} className="mt-6 bg-green-500 px-4 py-2 text-white rounded">Submit</button>
    </div>
  );
}

export default QuizPage;