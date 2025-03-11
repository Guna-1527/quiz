import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto text-center py-16 px-4 flex-1">
        <h1 className="text-5xl font-bold text-gray-800">
          Welcome to Quiz App
        </h1>
        <p className="text-lg mt-4 text-gray-600">
          Test your knowledge across multiple categories and challenge yourself!
        </p>
        <Link href="/quiz">
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-blue-600 transition">
            Start Quiz
          </button>
        </Link>

        {/* How It Works Section */}
        <section className="mt-16 bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-700">How It Works</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-medium">1. Choose a Category</h3>
              <p className="text-gray-600 mt-2">
                Select from various topics to start your quiz journey.
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-medium">2. Answer Questions</h3>
              <p className="text-gray-600 mt-2">
                Each quiz has multiple-choice questions. Pick the right answer!
              </p>
            </div>
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="text-xl font-medium">3. See Your Score</h3>
              <p className="text-gray-600 mt-2">
                Get instant feedback on your performance and improve your
                knowledge.
              </p>
            </div>
          </div>
        </section>

        {/* Feedback Section */}
        <section className="mt-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-700">
            What Our Users Say
          </h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg bg-white shadow-md">
              <p className="text-gray-600 italic">
                "This app is amazing! It helped me test my knowledge in a fun
                way!"
              </p>
              <h4 className="mt-4 font-semibold text-gray-800">- Alex J.</h4>
            </div>
            <div className="p-6 border rounded-lg bg-white shadow-md">
              <p className="text-gray-600 italic">
                "Love the UI and the variety of quizzes. Highly recommend!"
              </p>
              <h4 className="mt-4 font-semibold text-gray-800">- Sarah M.</h4>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
