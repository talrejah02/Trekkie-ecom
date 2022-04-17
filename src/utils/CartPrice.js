export const cartInitialprice=(cart)=>{
 return cart.reduce((acc,curr)=>{
        return acc+curr.orignalPrice*curr.quantity
    })
}
export const cartDiscountprice=(cart)=>{
    return cart.reduce((acc,curr)=>{
        return acc+(curr.orignalPrice-curr.discountedPrice)*curr.quantity
    })
}
export const cartTotalprice=(cart)=>{
   return cart.reduce((acc,curr)=>{
       return acc+curr.discountedPrice*curr.quantity
   })
}
