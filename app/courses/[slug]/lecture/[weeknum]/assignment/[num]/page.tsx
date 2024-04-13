"use client";
import CourseContext from "@/app/courses/contexts";
import { useState, useContext } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Page({ params }: { params: any }) {
  const course: any = useContext(CourseContext);
  let module: any;
  let AssignData: any;
  let path = usePathname();
  let link = "/courses/" + params.slug + "/module/" + params.weeknum;

  if (Object.keys(course).length === 0) {
    return (
      <div className="fixed top-0  right-0 w-full h-[100vh] font-bold text-4xl flex bg-white justify-center items-center">
        Loading....
      </div>
    );
  } else {
    if (course.modules.length > 0) {
      module = course.modules[params.weeknum - 1];
      AssignData = module.assignments[params.num - 1];
    } else {
      return (
        <div className="fixed top-0 left-0 right-0 w-full h-[100vh] font-bold text-3xl flex bg-white justify-center items-center">
          No data found...!
        </div>
      );
    }
  }

  // Initialize userAnswers state with default values
  const [userAnswers, setUserAnswers] = useState<Record<string, string | null>>(
    {}
  );
  // Initialize submitted state
  const [submitted, setSubmitted] = useState(false);

  // Handle user's option selection
  const handleOptionSelect = (questionId: string, option: string) => {
    // Allow option selection only if not submitted
    if (!submitted) {
      setUserAnswers({ ...userAnswers, [questionId]: option });
    }
  };

  // Calculate the user's score
  const calculateScore = (): number => {
    let score = 0;
    // Loop through each question
    AssignData.questions.forEach((question: any) => {
      // Check if the user's answer matches the correct answer
      if (userAnswers[question._id] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  // Function to handle submission
  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="w-full pt-24 grid grid-cols-1 items-start justify-start px-11 relative">
      <h1 className="text-6xl font-bold">{AssignData.title}</h1>
      <div className="bg-slate-200 py-1 px-4 rounded-lg mt-11 flex items-center">
        <Link href={link}>{course.title}</Link>
        <span className="text-lg mx-2 font-bold text-[--pc]">&gt;</span>
        <Link href={link}>{module.title}</Link>
        <span className="text-lg mx-2 font-bold text-[--pc]">&gt;</span>
        <Link href="">{AssignData.title}</Link>
      </div>

      <div className="container mx-auto mt-10">
        {AssignData.questions.map((question: any) => (
          <div key={question._id} className="mb-4">
            <h2 className="text-lg font-medium mb-2">
              {question.questionText}
            </h2>
            <div className="flex flex-wrap flex-col text-left">
              {question.options.map((option: any) => {
                const isSelected = userAnswers[question._id] === option;
                const isCorrect = option === question.correctAnswer;
                let buttonClass = "m-2 p-2 border text-left w-full bg-gray-200";
                if (isSelected && !submitted) {
                  buttonClass += " bg-yellow-400 text-white";
                } else if (submitted) {
                  buttonClass += isCorrect
                    ? " bg-green-500 text-white"
                    : " bg-red-500 text-white";
                }
                return (
                  <button
                    key={option}
                    className={buttonClass}
                    onClick={() => handleOptionSelect(question._id, option)}
                    disabled={submitted}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
        {submitted && (
          <div className="w-full bg-[--pc] p-2 flex gap-4 items-baseline">
            <h2 className="text-lg text-white font-bold">Your Score:</h2>
            <p className="mb-4 text-white animate-bounce">
              {calculateScore()} / {AssignData.questions.length}
            </p>
          </div>
        )}
        {!submitted && (
          <button
            onClick={handleSubmit}
            className="bg-[--pc] text-white py-2 px-4 mb-4 rounded-md mt-4"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
