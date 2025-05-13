import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import QuestionViewer from "./components/QuestionViewer";
import ThemeToggle from "./components/ThemeToggle";
import hashingData from "./data/hashing.json";
import BTData from "./data/BT.json";
import DivideAndConquerData from "./data/DivideAndConquer.json";
import linkedListData from "./data/linkedlist.json";
import arrayData from "./data/arrays.json";
import stringData from "./data/strings.json";
import sortingData from "./data/sorting.json";
import recursionData from "./data/recursion.json";
import backtrackingData from "./data/backtracking.json";
import SearchingAlgoData from "./data/SearchingAlgo.json";
import TwoPointersData from "./data/TwoPointers.json";
import bitmanipulationData from "./data/bitmanipulation.json";
import slidingwindowdata from "./data/slidingwindow.json";
import heapsdata from "./data/heaps.json";
import MathAlgodata from "./data/MathAlgo.json";

// ✅ Newly added imports
import stackData from "./data/stack.json";
import queueData from "./data/queue.json";
import graphData from "./data/graph.json";
import fastandslowpointersData from "./data/fastandslowpointers.json";

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
      id: "hashing",
      name: "Hashing",
      questions: hashingData.questions,
    },
    {
      id: "BT",
      name: "Binary Tree",
      questions: BTData.questions,
    },
    {
      id: "D&C",
      name: "Divide and Conquer",
      questions: DivideAndConquerData.questions,
    },
    {
      id: "searchingalgo",
      name: "Searching Algorithms",
      questions: SearchingAlgoData.questions,
    },
    {
      id: "twopointer",
      name: "Two Pointers",
      questions: TwoPointersData.questions,
    },
    {
      id: "slidingwindow",
      name: "Sliding Window",
      questions: slidingwindowdata.questions,
    },
    {
      id: "linkedlist",
      name: "Linked List",
      questions: linkedListData.questions,
    },
    {
      id: "arrays",
      name: "Arrays",
      questions: arrayData.questions,
    },
    {
      id: "strings",
      name: "Strings",
      questions: stringData.questions,
    },
    {
      id: "sorting",
      name: "Sorting",
      questions: sortingData.questions,
    },
    {
      id: "recursion",
      name: "Recursion",
      questions: recursionData.questions,
    },
    {
      id: "backtracking",
      name: "Backtracking",
      questions: backtrackingData.questions,
    },
    {
      id: "bitmanipulation",
      name: "Bit Manipulation",
      questions: bitmanipulationData.questions,
    },
    {
      id: "heaps",
      name: "Heaps",
      questions: heapsdata.questions,
    },
    {
      id: "mathalgo",
      name: "Mathematical Algorithms",
      questions: MathAlgodata.questions,
    },
    {
      id: "stack",
      name: "Stack",
      questions: stackData.questions,
    },
    {
      id: "queue",
      name: "Queue",
      questions: queueData.questions,
    },
    {
      id: "graph",
      name: "Graph",
      questions: graphData.questions,
    },
    {
      id: "fastandslowpointers",
      name: "Fast and Slow Pointers",
      questions: fastandslowpointersData.questions,
    },
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
