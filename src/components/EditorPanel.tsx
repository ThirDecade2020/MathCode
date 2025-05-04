import { useState } from 'react';

export default function EditorPanel() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  const runQuery = () => {
    setResult('Query executed. (Simulation)');
  };

  return (
    <>
      <textarea
        className="w-full h-40 p-2 border rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Write your SQL query here..."
      />
      <button className="mt-2 p-2 bg-blue-600 text-white rounded" onClick={runQuery}>
        Run
      </button>
      <div className="mt-4 p-2 bg-gray-100 rounded min-h-[100px]">
        <strong>Output:</strong>
        <pre>{result}</pre>
      </div>
    </>
  );
}