export const FilterReducer=(state,action)=>{
  switch(action.type){
      case "ADD_PRODUCTS":
        return{...state,products:action.payload}
      case "PRICE_RANGE":
        return{...state,products:state["products"].filter((item)=>item.discountedPrice<action.payload)}
      case "REFRESH_PRODUCTS":
        return{...state,products:action.payload}
      case "CATEGORY":
        return{...state,products:state["products"].filter((item)=>item.categoryName === action.payload)}
      case "RATINGS":
        return{...state,products:state["products"].filter((item)=>item.ratings>=parseInt(action.payload))}
      case "LOW_TO_HIGH":
        return{...state,products:state["products"].sort((a,b)=>a.discountedPrice-b.discountedPrice)}
      case "HIGH_TO_LOW":
        return{...state,products:state["products"].sort((a,b)=>b.discountedPrice-a.discountedPrice)}
      default:
        return state
  }
}