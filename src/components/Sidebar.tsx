import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { Question } from "../App";

interface SidebarProps {
  topics: {
    id: string;
    name: string;
    questions: Question[];
  }[];
  onSelectQuestion: (question: Question) => void;
}

const Sidebar = ({ topics, onSelectQuestion }: SidebarProps) => {
  const [openTopicId, setOpenTopicId] = useState<string | null>(null);

  const toggleTopic = (id: string) => {
    if (openTopicId === id) {
      setOpenTopicId(null);
    } else {
      setOpenTopicId(id);
    }
  };

  return (
    <div className="w-320 bg-gray-100 dark:bg-gray-800 h-full overflow-y-auto p-6">
      <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">DSA Topics</h2>

      {topics.map((topic) => (
        <div key={topic.id} className="mb-4">
          <div
            onClick={() => toggleTopic(topic.id)}
            className="flex items-center justify-between cursor-pointer text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100 hover:text-blue-500 transition"
          >
            {topic.name}
            {openTopicId === topic.id ? (
              <ChevronUpIcon className="h-6 w-6" />
            ) : (
              <ChevronDownIcon className="h-6 w-6" />
            )}
          </div>

          {openTopicId === topic.id && (
            <ul className="space-y-2 ml-4 mt-2">
              {topic.questions.map((question) => (
                <li
                  key={question.id}
                  onClick={() => onSelectQuestion(question)}
                  className="cursor-pointer text-lg text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-lg transition duration-300"
                >
                  {question.title}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
