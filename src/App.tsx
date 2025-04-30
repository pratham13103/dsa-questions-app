import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import QuestionViewer from "./components/QuestionViewer";
import ThemeToggle from "./components/ThemeToggle";
import hashingData from "./data/hashing.json";
import BTData from "./data/BT.json";
import DivideAndConquerData from "./data/DivideAndConquer.json";


export interface Question {
  id: number;
  title: string;
  description: string;
  example: {
    input: string;
    output: string;
    explanation?: string;  // Make explanation optional
  };
  answer: string;
}

export interface Topic {
  id: string;
  name: string;
  questions: Question[];
}

function App() {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const topics: Topic[] = [
    {
      id: "hashing",
      name: "Hashing",
      questions: hashingData.questions,
    },
    {
      id: "BT",
      name: "Binary tree",
      questions: BTData.questions,
    },
    {
      id: "D&C",
      name: "Divide and Conquer",
      questions: DivideAndConquerData.questions,
    },
  ];

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 relative">
      <Sidebar topics={topics} onSelectQuestion={setSelectedQuestion} />
      <QuestionViewer question={selectedQuestion} />
      <div className="absolute top-4 right-4">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}

export default App;
