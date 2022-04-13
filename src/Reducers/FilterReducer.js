export const FilterReducer=(state,action)=>{
  switch(action.type){
      case "ADD_PRODUCTS": return{...state,products:action.payload}
  }
}