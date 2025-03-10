"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

interface Question {
  id: string;
  question_text: string;
  correct_answer: string;
}

export default function ResultsPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: string }>({});
  const [score, setScore] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const storedResults = localStorage.getItem("quizResults");
    if (storedResults) {
      setUserAnswers(JSON.parse(storedResults));
    } else {
      router.push("/quiz");
    }
  }, [router]);

  useEffect(() => {
    async function fetchQuestions() {
      const questionIds = Object.keys(userAnswers);
      if (questionIds.length === 0) return;

      const { data, error } = await supabase
        .from("questions")
        .select("id, question_text, correct_answer")
        .in("id", questionIds);

      if (!error) {
        setQuestions(data || []);
        let correctCount = 0;
        data.forEach((q) => {
          if (userAnswers[q.id] === q.correct_answer) correctCount++;
        });
        setScore(correctCount);
      }
    }

    if (Object.keys(userAnswers).length > 0) {
      fetchQuestions();
    }
  }, [userAnswers]);

  return (
    <div>
      <h1>Quiz Results</h1>
      <p>Your Score: {score} / {questions.length}</p>
      <ul>
        {questions.map((q) => (
          <li key={q.id}>
            <p>{q.question_text}</p>
            <p>
              Your Answer:{" "}
              <span
                style={{
                  color: userAnswers[q.id] === q.correct_answer ? "green" : "red",
                }}
              >
                {userAnswers[q.id]}
              </span>
            </p>
            <p>Correct Answer: {q.correct_answer}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => router.push("/quiz")}>Retake Quiz</button>
    </div>
  );
}
