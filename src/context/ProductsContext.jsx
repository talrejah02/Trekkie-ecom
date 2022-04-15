import { createContext, useContext } from "react";
import { useReducer } from "react";
import { FilterReducer } from '../Reducers/FilterReducer'


const ProductContext = createContext()

const useProducts = () => useContext(ProductContext)
const InitialProducts = { products: [] }
const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(FilterReducer, InitialProducts)
    return <ProductContext.Provider value={{ state, dispatch }}>
        {children}
    </ProductContext.Provider>
}

export { useProducts, ProductProvider }