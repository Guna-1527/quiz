"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
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
  console.log(categoryId);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("✅ Category ID received:", categoryId); // Debugging log

    if (!categoryId) {
      setError("❌ Category ID is missing.");
      setLoading(false);
    }

    async function fetchQuestions() {
      try {
        const { data, error } = await supabase
          .from("questions")
          .select("id, question_text, correct_answer, incorrect_answer_1, incorrect_answer_2, incorrect_answer_3")
          .eq("category_id", categoryId);

        setQuestions(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, [categoryId]);

  if (loading) return <p>Loading questions...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Quiz</h1>
      {questions.length > 0 ? (
        questions.map((q) => (
          <div key={q.id}>
            <p>{q.question_text}</p>
            <ul>
              {[q.correct_answer, q.incorrect_answer_1, q.incorrect_answer_2, q.incorrect_answer_3]
                .sort(() => Math.random() - 0.5)
                .map((answer) => (
                  <li key={answer}>{answer}</li>
                ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No questions found for this category.</p>
      )}
    </div>
  );
}
