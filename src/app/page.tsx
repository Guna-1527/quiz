import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto text-center py-10">
        <h1 className="text-4xl font-bold">Welcome to Quiz App</h1>
        <p className="text-lg mt-4">Test your knowledge across multiple categories!</p>
        <Link href="/quiz">
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg">Start Quiz</button>
        </Link>
      </main>
      <Footer />
    </div>
  );
}

export default Home;