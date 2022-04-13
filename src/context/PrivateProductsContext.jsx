import { createContext,useContext,useState,useReducer } from "react";
import { productReducer } from "../Reducers/ProductReducer";

const PrivateProductContext = createContext()
const usePrivateproducts=()=>useContext(PrivateProductContext)
const privateTypes= {wishlist:[],cart:[]}

const PrivateProductsProvider=({children})=>{
    
    
    const [state,dispatch]=useReducer(productReducer,privateTypes)
    return <PrivateProductContext.Provider value={{state,dispatch}}>{children}</PrivateProductContext.Provider>
}
export {usePrivateproducts,PrivateProductsProvider}