import "./App.css";
import Nav from "./components/Navbar/Nav";
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home page/Home";
import {Login} from "../src/pages/index"

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
