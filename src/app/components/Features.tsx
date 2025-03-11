import React from "react";

const howItWorks = [
  {
    step: 1,
    title: "Choose a Quiz Category",
    description:
      "Browse from multiple categories like Science, History, Sports, and more. Select the topic that interests you the most.",
  },
  {
    step: 2,
    title: "Answer the Questions",
    description:
      "Each quiz has multiple-choice questions. Select the correct answer before the timer runs out (if enabled).",
  },
  {
    step: 3,
    title: "Get Instant Feedback",
    description:
      "See if your answer is right or wrong immediately. Move to the next question and keep going!",
  },
  {
    step: 4,
    title: "Complete the Quiz & Get Your Score",
    description:
      "At the end of the quiz, view your final score and correct answers. Compare your results with others on the leaderboard (if available).",
  },
  {
    step: 5,
    title: "Challenge Friends & Improve",
    description:
      "Share your score and challenge your friends to beat it! Take more quizzes and track your progress over time.",
  },
  {
    step: 6,
    title: "Challenge Friends & Improve",
    description:
      "Share your score and challenge your friends to beat it! Take more quizzes and track your progress over time.",
  },
];

const Features = () => {
  return (
    <div className="flex w-[1300px] h-[600px] items-center m-auto justify-center">
      <div>
        <h1 className="text-center font-bold text-3xl mb-10">How it Works</h1>
        <div className="flex flex-wrap justify-evenly gap-6">
          {howItWorks.map((item) => (
            <div key={item.step} className="card w-96 bg-base-100 shadow-md">
              <div className="card-body">
                <h3 className="text-center font-semibold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
