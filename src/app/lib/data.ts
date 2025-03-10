export const categories = ["Mathematics", "Science"];

export const dummyQuestions: { [key: string]: { id: number; question_text: string; correct_answer: string; incorrect_answers: string[]; }[] } = {
  Mathematics: [
    {
      id: 1,
      question_text: "What is 2 + 2?",
      correct_answer: "4",
      incorrect_answers: ["3", "5", "6"]
    },
    {
      id: 2,
      question_text: "What is 5 x 5?",
      correct_answer: "25",
      incorrect_answers: ["20", "30", "15"]
    }
  ],
  Science: [
    {
      id: 3,
      question_text: "What planet is known as the Red Planet?",
      correct_answer: "Mars",
      incorrect_answers: ["Venus", "Earth", "Jupiter"]
    }
  ]
};
