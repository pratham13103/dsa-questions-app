import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import QuestionViewer from "./components/QuestionViewer";
import ThemeToggle from "./components/ThemeToggle";
import hashingData from "./data/hashing.json";
import BTData from "./data/BT.json";
import DivideAndConquerData from "./data/DivideAndConquer.json";
import linkedListData from "./data/linkedlist.json"; // Importing linked list data
import arrayData from "./data/arrays.json";
import stringData from "./data/strings.json";
import sortingData from "./data/sorting.json";
import recursionData from "./data/recursion.json";
import backtrackingData from "./data/backtracking.json";
import SearchingAlgoData from "./data/SearchingAlgo.json";
import TwoPointersData from "./data/TwoPointers.json";
import bitmanipulationData from "./data/bitmanipulation.json";
import slidingwindowdata from "./data/slidingwindow.json";

export interface Question {
  id: number;
  title: string;
  description: string;
  example: {
    input: string | string[];
    output: string | string[] | string[][];
    explanation?: string;  // Explanation is optional
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
      id: "hashing", // Added Hashing topic
      name: "Hashing",
      questions: hashingData.questions,
    },
    {
      id: "BT", // Added Binary tree topic
      name: "Binary Tree",
      questions: BTData.questions,
    },
    {
      id: "D&C", // Added Divide and conquer topic
      name: "Divide and Conquer",
      questions: DivideAndConquerData.questions,
    },
    {
      "id": "searchingalgo",
      "name": "Searching Algorithms",
      "questions": SearchingAlgoData.questions
    },
    {
      "id": "twopointer",
      "name": "Two Pointers",
      "questions": TwoPointersData.questions
    },
    {
      "id": "slidingwindow",
      "name": "Sliding Window",
      "questions": slidingwindowdata.questions
    },
    {
      id: "linkedlist", // Added Linked List topic
      name: "Linked List",
      questions: linkedListData.questions, // Include the linked list questions
    },
    {
      id: "arrays", // Added Linked List topic
      name: "Arrays",
      questions: arrayData.questions, // Include the linked list questions
    },
    {
      id: "strings", // Added Linked List topic
      name: "Strings",
      questions: stringData.questions, // Include the linked list questions
    },
    {
      id: "sorting", // Added Linked List topic
      name: "Sorting",
      questions: sortingData.questions, // Include the linked list questions
    },
    {
      id: "recursion", // Added Linked List topic
      name: "Recursion",
      questions: recursionData.questions, // Include the linked list questions
    },
    {
      id: "backtracking", // Added Linked List topic
      name: "Backtracking",
      questions: backtrackingData.questions, // Include the linked list questions
    },
    {
      id: "bitmanipulation", // Added Linked List topic
      name: "Bit Manipulation",
      questions: bitmanipulationData.questions, // Include the linked list questions
    }

  ];

  useEffect(() => {
    const rootElement = document.documentElement;
    if (darkMode) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.remove("dark");
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






