import "./App.css";
import {Nav} from "./components/index";
import {Routes,Route} from "react-router-dom"
import MockmanEs from "mockman-js";
import {Home,ProductPage,Login,Cart, Wishlist, Signup} from "./pages/index";


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
        <Route path="/Wishlist" element={<Wishlist/>}/>
        <Route path="/Signup" element={<Signup/>}/>

      </Routes>
    </div>
  );
}

export default App;
