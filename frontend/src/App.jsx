import { useSelector, useDispatch } from 'react-redux';
import { setPrompt } from './store/promptSlice';

function App() {
  const dispatch = useDispatch();
  const userPrompt = useSelector((state) => state.prompt.userPrompt);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600">PromptCraft</h1>
      <input
        type="text"
        value={userPrompt}
        onChange={(e) => dispatch(setPrompt(e.target.value))}
        className="mt-4 p-2 border rounded w-64"
        placeholder="Enter your prompt"
      />
      <p className="mt-2 text-gray-600">Current Prompt: {userPrompt}</p>
    </div>
  );
}

export default App;