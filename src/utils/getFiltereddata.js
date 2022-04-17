export const getFiltereddata=(state,productList)=>{


    const{categories,rating,price,sort}=state
   // By Sort
  
    let sortedList=[
        ...productList.sort((productA,productB)=>{
        if(sort=="ascending"){
            return productA.discountedPrice-productB.discountedPrice
        }else if(sort=="descending"){
            return productB.discountedPrice-productA.discountedPrice
        }
        return[...productList]
    })]

    // By rating
    let filteredData = [
        ...sortedList.filter((item)=>item.ratings>=rating)
    ]

    filteredData=categories.length?[...filteredData.filter((product)=>categories.includes(product.categoryName))]:[...filteredData]
  
    filteredData=[...filteredData.filter((item)=>item.discountedPrice < price)]



    return[...filteredData]

}