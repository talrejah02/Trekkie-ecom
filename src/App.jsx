import "./App.css";
import {Nav} from "./components/index";
import {Routes,Route} from "react-router-dom"
import {Home,ProductPage} from "./pages/index";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Shop" element={<ProductPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
