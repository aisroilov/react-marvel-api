import "./App.scss";
import Details from "./pages/Details";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
