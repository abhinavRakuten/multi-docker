import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import OtherPage from "./otherPage";
import Fib from "./Fib";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> We are here</h1>
          <Link to="/">Home</Link>
          <Link to="/otherpage"> Other page </Link>
        </header>
        <div>
          <Routes>
            <Route path="/" element={<Fib />} />
            <Route path="/otherpage" element={<OtherPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
