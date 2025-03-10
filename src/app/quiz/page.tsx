"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";
import { Console } from "console";

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
        console.log(data);
        setCategories(data || []);
        
      } catch (err: any) {
        console.error("❌ Error fetching categories:", err.message);
      }
    }
    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Select a Quiz Category</h1>
      {categories.length > 0 ? (
        categories.map((category) => (
          <button key={category.id} onClick={() => router.push(`/quiz/${category.id}`)}>
            {category.name}
          </button>
        ))
      ) : (
        <p>Loading categories...</p>
      )}
    </div>
  );
}
