import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* 
          En react-router-dom v6+, se usa <Routes> en vez de <Switch>.
          También, <Route> ahora usa el atributo 'element' en lugar de 'component'.
        */}
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Asegúrate de usar el atributo 'element' correctamente */}
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
