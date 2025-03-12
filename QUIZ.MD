<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Quiz</h1>
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6">
        <p className="text-lg font-semibold text-gray-700 mb-4">
          {currentQuestion.question_text}
        </p>
        <ul className="space-y-2">
          {shuffledAnswers.map((answer) => (
            <li
              key={answer}
              className={`cursor-pointer py-2 px-4 rounded-lg transition ${
                selectedAnswers[currentQuestion.id] === answer
                  ? "bg-green-500 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
              onClick={() => handleAnswerSelect(answer)}
            >
              {answer}
            </li>
          ))}
        </ul>
        <div className="flex justify-between mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg disabled:opacity-50"
          >
            Previous
          </button>
          {currentIndex < questions.length - 1 ? (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-500 text-white rounded-lg"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>