import axios from "axios";
import { createContext,useContext } from "react";
import { useEffect, useState } from "react";


const ProductContext = createContext()

const useProducts=()=>useContext(ProductContext)

const ProductProvider=({children})=>{

    const [products,setproducts]=useState([])
    

    useEffect(()=>{ 
    (async ()=>{
        try{
             const response = await axios.get("/api/products")
             setproducts(response.data.products)
        }catch(error){

            console.log(error)
        }
    })();
    }, [])
   
 return<ProductContext.Provider value={{products}}>
     {children}
 </ProductContext.Provider>
}

export{useProducts,ProductProvider}