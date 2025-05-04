import { useState } from 'react';

export default function MathPanel() {
  const [explanation, setExplanation] = useState('');
  const [showChat, setShowChat] = useState(false);

  const fetchExplanation = async () => {
    const response = await fetch('/api/explanation');
    const data = await response.json();
    setExplanation(data.explanation);
    setShowChat(true);
  };

  return (
    <div className="flex flex-col space-y-6">
      <button
        onClick={fetchExplanation}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Explore Mathematical Equivalent for this Query
      </button>

      {explanation && (
        <div className="bg-white border border-gray-300 p-4 rounded shadow text-sm space-y-2">
          <h2 className="font-semibold text-base">Mathematical Explanation:</h2>
          <p>{explanation}</p>
        </div>
      )}

      {showChat && (
        <div className="text-sm italic text-gray-500">
          (Chat component placeholder)
        </div>
      )}
    </div>
  );
}

