export const FilterReducer=(state,action)=>{
  switch(action.type){
      case "ADD_PRODUCTS":
        return{...state,products:action.payload}
      case "PRICE_RANGE":
        return{...state,price:action.payload}
      case "REFRESH_PRODUCTS":
        return{...action.payload}
      case "CATEGORY":
        return{...state,categories:[...state.categories,action.payload]}
      case "REMOVE-CATEGORY":return{...state,categories:[...state.categories.filter((category)=>category !== action.payload)]}
      case "RATINGS":
        return{...state,rating:action.payload}
      case "LOW_TO_HIGH":
        return{...state,sort:action.payload}
      case "HIGH_TO_LOW":
        return{...state,sort:action.payload}
      default:
        return state
  }
}