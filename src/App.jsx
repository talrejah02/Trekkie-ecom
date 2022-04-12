import "./App.css";
import {Nav} from "./components/index";
import {Routes,Route} from "react-router-dom"


import {Home,ProductPage,Login} from "./pages/index";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Shop" element={<ProductPage/>}/>

      </Routes>
    </div>
  );
}

export default App;
