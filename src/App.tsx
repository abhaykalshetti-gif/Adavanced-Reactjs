
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ContextApp from './contextapi/ContextApp';
import CodeSplitting from './codesplitting/CodeSplitting';
import UseReducer from './advance-hooks/UseReducer';
import UseMemo from './advance-hooks/UseMemo';
import UseCallback from './advance-hooks/UseCallback';
import UseRef from './advance-hooks/UseRef';
import ReactRouter from './reactrouting/ReactRouter';
import ReactQuery from './reactquery/App'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contextapi" element={<ContextApp/>} />
        <Route path="/codesplitting/*" element={<CodeSplitting />} />
        <Route path="/usereducer" element={<UseReducer />} />
        <Route path="/usememo" element={<UseMemo />} />
         <Route path="/usecallback" element={<UseCallback/>} />
        <Route path="/useref" element={<UseRef />} />
        <Route path="/reactrouter/*" element={<ReactRouter />} />
        <Route path="/reactquery" element={<ReactQuery/>} />
        
        </Routes>
    </Router>
  );
}

export default App;
