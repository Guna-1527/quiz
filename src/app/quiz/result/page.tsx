"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const score = searchParams.get("score");
  const total = searchParams.get("total");
  const percentage = ((Number(score) / Number(total)) * 100).toFixed(2);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Quiz Result</h1>
        <p className="text-lg text-gray-700 mb-2">You scored:</p>
        <p className="text-4xl font-bold text-blue-500">
          {score} / {total}
        </p>
        <p className="text-lg text-gray-600 mt-2">({percentage}%)</p>
        <button
          onClick={() => router.push("/")}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}
