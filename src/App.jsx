import "./App.css";
import {Nav} from "./components/index";
import {Routes,Route} from "react-router-dom"


import {Home,ProductPage,Login,Cart} from "./pages/index";
import MockmanEs from "mockman-js";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Shop" element={<ProductPage/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/mock"element={<MockmanEs/>}/>
      </Routes>
    </div>
  );
}

export default App;
