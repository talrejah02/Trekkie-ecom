import axios from "axios";
import { createContext,useContext } from "react";
import { useEffect, useReducer } from "react";
import {FilterReducer} from '../Reducers/FilterReducer'


const ProductContext = createContext()

const useProducts=()=>useContext(ProductContext)
const InitialProducts={products:[]}
const ProductProvider=({children})=>{

    const [state,dispatch]=useReducer(FilterReducer,InitialProducts)
    

    useEffect(()=>{ 
    (async ()=>{
        try{
             const response = await axios.get("/api/products")
             dispatch({type:"ADD_PRODUCTS",payload:response.data.products})
        }catch(error){

            console.log(error)
        }
    })();
    }, [])
   
 return<ProductContext.Provider value={{state,dispatch}}>
     {children}
 </ProductContext.Provider>
}

export{useProducts,ProductProvider}