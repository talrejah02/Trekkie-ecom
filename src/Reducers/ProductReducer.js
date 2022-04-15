export const productReducer = (state, action) => {
  switch (action.type) {
    case "Add_To_Cart":
      return {
        ...state, cart: [...state.cart, {
          ...action.payload,
          quantity: 1
        }]
      }

    case "INC_QTY":
        return {
          ...state, cart: state["cart"].map((item) => item._id === action.payload._id ? {
            ...item,
            quantity: item.quantity + 1
          } : item)
        }

        case "DEC_QTY":
          let quantityZero = false

          let newCart = state["cart"].map((item) => {
            if (item._id === action.payload._id) {
              if (item.quantity === 1) quantityZero = true
              else {
                return {
                  ...item,
                  quantity: item.quantity - 1
                }
              }
              return item
            } else {
              return item
            }
          });


          if (quantityZero) {
            newCart = newCart.filter((item) => item._id !== action.payload._id)
          }


          return {
            ...state, cart: newCart
          }

          case "REMOVE_FROM_CART":
            return {
              ...state, cart: state["cart"].filter((item) => item._id !== action.payload._id)
            }
            case "MOVE_TO_WISHLIST":
              const NewCart = state["cart"].filter((item) => item._id !== action.payload._id)
              const newWishlist = state["wishlist"].concat(action.payload)
              return {
                ...state, wishlist: newWishlist, cart: NewCart
              }
              default:
                return state;
  }
}


// hide add to wishlist if product is already in wishlist