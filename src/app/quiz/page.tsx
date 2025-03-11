"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";

interface Category {
  id: string;
  name: string;
}

export default function QuizCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data, error } = await supabase.from("categories").select("*");
        if (error) throw error;
        setCategories(data || []);
      } catch (err: any) {
        console.error("❌ Error fetching categories:", err.message);
      }
    }
    fetchCategories();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Select a Quiz Category
      </h1>
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        {categories.length > 0 ? (
          <div className="grid gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => router.push(`/quiz/${category.id}`)}
                className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                {category.name}
              </button>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">Loading categories...</p>
        )}
      </div>
    </div>
  );
}
