import "./App.css";
import Nav from "./components/Navbar/Nav";
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home page/Home";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
