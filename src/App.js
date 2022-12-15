import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import BreakingBad from "./pages/BreakingBad";
import Favourites from "./pages/Favourites";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/breakingbad" element={<BreakingBad />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
