import QueryPromptList from './QueryPromptList';
import EditorPanel from './EditorPanel';
import MathPanel from './MathPanel';

export default function Layout() {
  return (
    <div className="min-h-screen w-screen flex">
      {/* Left panel */}
      <div className="w-1/4 p-4 overflow-y-auto border-r">
        <QueryPromptList />
      </div>

      {/* Center panel */}
      <div className="w-2/4 p-4 border-r">
        <EditorPanel />
      </div>

      {/* Right panel */}
      <div className="w-1/4 p-4 overflow-y-auto">
        <MathPanel />
      </div>
    </div>
  );
}



