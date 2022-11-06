export const initialState = {
  basket: [], // start with empty basket
  user: null,
};

//reduce: maps/iterates through the basket and it tallies up the total
// this is like a for loop

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

// reducer : always listening for a dispatch
// action: what I'm trying to do with the basket
const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in the basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user, // here we're listening from the dispatch
      };
    default:
      return state;
  }
};

export default reducer;
