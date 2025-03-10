import Link from "next/link";
import { categories } from "../lib/data";

const QuizCategories = () => {
  return (
    <div className="container mx-auto text-center py-10">
      <h1 className="text-3xl font-bold">Choose a Quiz Category</h1>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {categories.map((category) => (
          <Link key={category} href={`/quiz/${category}`}>
            <div className="border p-4 rounded-lg cursor-pointer hover:bg-gray-100">
              {category}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default QuizCategories;