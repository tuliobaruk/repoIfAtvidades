import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cadastro } from "./pages/cadastroPage/Cadastro";
import { Home } from "./pages/homePage/Home";
import { Login } from "./pages/loginPage/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
