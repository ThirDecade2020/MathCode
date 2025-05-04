import QueryPromptList from './QueryPromptList';
import EditorPanel from './EditorPanel';
import MathPanel from './MathPanel';

export default function Layout() {
  return (
    <div className="flex w-full min-h-screen bg-gray-50 p-6 gap-8">
      {/* Left column */}
      <div className="w-1/4 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <QueryPromptList />
      </div>

      {/* Center column */}
      <div className="w-2/4 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <EditorPanel />
      </div>

      {/* Right column */}
      <div className="w-1/4 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <MathPanel />
      </div>
    </div>
  );
}




