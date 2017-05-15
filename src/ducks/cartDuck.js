const ADD_PRODUCT = 'cart/ADD_PRODUCT';
const REMOVE_PRODUCT = 'cart/REMOVE_PRODUCT';
const CHECKOUT = 'cart/CHECKOUT';
const initialState = {
  productsInCart : [],
  totalProductValue: 0,
  totalPurchaseFee: 0
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        productsInCart : [...state.productsInCart, action.design.name],
        totalProductValue: state.totalProductValue + action.design.denomQtyFee.denom,
        totalPurchaseFee: state.totalPurchaseFee + action.design.denomQtyFee.purchaseFee
      };
      case REMOVE_PRODUCT:
        return {
          productsInCart : state.productsInCart.filter(product => product._id !== action.design._id),
          totalProductValue: state.totalProductValue - action.design.denomQtyFee.denom,
          totalPurchaseFee: state.totalPurchaseFee - action.design.denomQtyFee.purchaseFee
        };
        case CHECKOUT:
          return initialState;
  }

  return state;
}

export default function addProduct(design) {
  return { type: ADD_PRODUCT, design};
}

export default function removeProduct(design) {
  return { type: REMOVE_PRODUCT, design};
}

export default function checkout() {
  return { type: CHECKOUT };
}
