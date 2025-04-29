import { Question } from "../App";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import vscDarkPlus from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";
import ReactMarkdown from "react-markdown"; // ✅ Import react-markdown
import remarkGfm from "remark-gfm";

interface QuestionViewerProps {
  question: Question | null;
}

const QuestionViewer = ({ question }: QuestionViewerProps) => {
  if (!question) {
    return (
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-semibold">Select a question from the sidebar</h2>
      </div>
    );
  }

  // Directly access the input, output and explaination from the example object
  const { input, output, explaination } = question.example;

  return (
    <div className="flex-1 p-8 overflow-y-auto text-[20px] leading-relaxed">
      <h1 className="text-4xl font-bold mb-6">{question.title}</h1>

      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Description:</h2>
        {/* ✅ Use ReactMarkdown for rendering description */}
        <div className="prose prose-lg max-w-none text-[20px] dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{question.description}</ReactMarkdown>
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Example:</h2>
        <div className="space-y-4 text-[20px]">
          {input && (
            <p>
              <span className="font-semibold">Input:</span> {input}
            </p>
          )}
          {output && (
            <p>
              <span className="font-semibold">Output:</span> {output}
            </p>
          )}
          {explaination && (
            <p>
              <span className="font-semibold">Explaination:</span> {explaination}
            </p>
          )}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Sample Answer:</h2>
        <div className="inline-block rounded-lg overflow-hidden">
          <SyntaxHighlighter
            language="python"
            style={vscDarkPlus}
            customStyle={{
              borderRadius: "0.5rem",
              padding: "1.0rem",
              fontSize: "24px",
              fontFamily: "Calibri",
              width: "100%",
              maxWidth: "700px",
              backgroundColor: "#1e1e1e",
            }}
          >
            {question.answer}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default QuestionViewer;
