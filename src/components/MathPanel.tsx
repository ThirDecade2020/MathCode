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
    <div>
      <button
        className="p-2 bg-green-600 text-white rounded mb-4"
        onClick={fetchExplanation}
      >
        Explore Mathematical Equivalent for this Query
      </button>
      {explanation && (
        <div className="bg-white p-2 rounded shadow">
          <h3 className="font-bold">Mathematical Explanation:</h3>
          <p>{explanation}</p>
        </div>
      )}
      {showChat && (
        <div className="mt-4 p-2 bg-gray-100 rounded">
          <strong>Chat about this math:</strong>
          <p>[Chat UI placeholder]</p>
        </div>
      )}
    </div>
  );
}