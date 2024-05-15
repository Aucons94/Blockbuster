import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationBar } from "./Components/NavigationBar";
import { Homepage } from "./Components/Homepage";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
