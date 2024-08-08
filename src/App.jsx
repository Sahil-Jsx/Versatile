import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./pages/header/header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;