import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { NavigationBar } from "./Components/NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
