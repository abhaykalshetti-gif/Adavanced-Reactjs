
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen text-gray-800">
<h1 className="text-4xl font-bold mb-8 text-center">React advanced Baseline couerse</h1>  
         

  <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Components</h2>
        <ol className="list-decimal list-inside space-y-1">
           <li><Link to="/contextapi" className="text-blue-600 hover:underline">Context Api implementation</Link></li>
        </ol>
      </div>

        <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Components</h2>
        <ol className="list-decimal list-inside space-y-1">
<li><Link to="/codesplitting" className="text-blue-600 hover:underline">CodeSplitting implementation</Link></li>
        </ol>

      </div>
       <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Advanced Hooks implementation</h2>
        <ol className="list-decimal list-inside space-y-1">
<li><Link to="/usereducer" className="text-blue-600 hover:underline">UseReducer hook</Link></li>
<li><Link to="/usememo" className="text-blue-600 hover:underline">UseMemo hook</Link></li>
<li><Link to="/usecallback" className="text-blue-600 hover:underline">UseCallback hook</Link></li>
<li><Link to="/useref" className="text-blue-600 hover:underline">UseRef hook</Link></li>

        </ol>
      </div>

       <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">React routing implementation</h2>
        <ol className="list-decimal list-inside space-y-1">
<li><Link to="/reactrouter" className="text-blue-600 hover:underline">React router hook</Link></li>

        </ol>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">React query implementation</h2>
        <ol className="list-decimal list-inside space-y-1">
<li><Link to="/reactquery" className="text-blue-600 hover:underline">React query hook</Link></li>

        </ol>
      </div>
    </div>
  );
}
