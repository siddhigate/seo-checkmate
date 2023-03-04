import "./App.css";
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Landing from "./pages/Landing";

function App() {
  return (
    <div className="App">
          <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </div>
  );
}

export default App;
