import { useState } from 'react';

export default function EditorPanel() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  const runQuery = () => {
    setResult('Query executed. (Simulation)');
  };

  return (
    <div className="flex flex-col space-y-6">
      <div>
        <textarea
          className="w-full min-h-[150px] p-3 border border-gray-300 rounded shadow text-sm font-mono resize-y"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Write your SQL query here..."
        />
        <button
          onClick={runQuery}
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Run
        </button>
      </div>

      <div>
        <h2 className="font-semibold mb-2 text-base">Output:</h2>
        <div className="bg-gray-100 border border-gray-300 p-4 rounded text-sm font-mono">
          {result || 'Output will appear here.'}
        </div>
      </div>
    </div>
  );
}

