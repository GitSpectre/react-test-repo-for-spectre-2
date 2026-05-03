// Action Types Reference: SET_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, CLEAR_CART, CREATE_USER, LOGIN_USER, LOGOUT_USER

//product list actions
export const getProducts = (products) => {
  return {
    type: "SET_PRODUCTS",
    payload: products,
  };
};
export function asyncGetProducts() {
  return async (dispatch) => {
    try {
      // Placeholder array of products
      const placeholderProducts = [
        {
          id: 1,
          name: "Plant A",
          price: 19.99,
          rating: 3,
          image: "src/assets/snake-plant.webp",
          categories: ["Indoor", "Succulent"],
        },
        {
          id: 2,
          name: "Plant B",
          price: 29.99,
          rating: 4,
          image: "src/assets/peperomia.webp",
          categories: ["Outdoor"],
        },
        {
          id: 3,
          name: "Plant C",
          price: 15.99,
          rating: 4,
          image: "src/assets/chinese-evergreen.webp",
          categories: ["Succulent"],
        },
        {
          id: 4,
          name: "Plant D",
          price: 25.99,
          rating: 4,
          image: "src/assets/grape-ivy.webp",
          categories: ["Indoor", "Flowering"],
        },
        {
          id: 5,
          name: "Plant E",
          price: 19.99,
          rating: 3,
          image: "src/assets/aloe.webp",
          categories: ["Outdoor", "Cactus"],
        },
        {
          id: 6,
          name: "Plant F",
          price: 29.99,
          rating: 4,
          image: "src/assets/dieffenbachia.webp",
          categories: ["Indoor"],
        },
        {
          id: 7,
          name: "Plant G",
          price: 15.99,
          rating: 4,
          image: "src/assets/aloe.webp",
          categories: ["Succulent", "Flowering"],
        },
        {
          id: 8,
          name: "Plant H",
          price: 25.99,
          rating: 4,
          image: "src/assets/aloe.webp",
          categories: ["Cactus"],
        },
        {
          id: 9,
          name: "Plant I",
          price: 19.99,
          rating: 3,
          image: "src/assets/aloe.webp",
          categories: ["Indoor"],
        },
        {
          id: 10,
          name: "Plant J",
          price: 29.99,
          rating: 4,
          image: "src/assets/aloe.webp",
          categories: ["Outdoor", "Succulent"],
        },
        {
          id: 11,
          name: "Plant K",
          price: 15.99,
          rating: 4,
          image: "src/assets/aloe.webp",
          categories: ["Flowering"],
        },
        {
          id: 12,
          name: "Plant L",
          price: 25.99,
          rating: 4,
          image: "src/assets/aloe.webp",
          categories: ["Cactus", "Indoor"],
        },
      ];

      dispatch(getProducts(placeholderProducts));
    } catch (error) {
      console.log(error);
    }
  };
}

// export function asyncGetProducts() {
//   return async dispatch => {
//     try {
//       const url = "https://f31034629432850f201ef0a8321d47ff.serveo.net/plants/";
//       const response = await fetch(url, { method: "GET" });
//       const data = await response.json();
//       dispatch(getProducts(data));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

//add to cart actions
export const addToCart = (prod) => {
  return {
    type: "ADD_TO_CART",
    payload: prod,
  };
};
export const removeFromCart = (id) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
};
export const incrementQuantity = (id) => {
  return {
    type: "INCREMENT_QUANTITY",
    payload: id,
  };
};
export const decrementQuantity = (id) => {
  return {
    type: "DECREMENT_QUANTITY",
    payload: id,
  };
};
export const createUser = (user) => {
  return {
    type: "CREATE_USER",
    payload: user,
  };
};
export const loginUser = (user) => {
  return {
    type: "LOGIN_USER",
    payload: user,
  };
};
export const logoutUser = () =>{
  return {
    type: "LOGOUT_USER",
  };
};

// clear cart action
export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

// logout and clear cart (thunk)
export const logoutAndClear = () => {
  return (dispatch) => {
    dispatch({ type: "LOGOUT_USER" });
    dispatch({ type: "CLEAR_CART" });
  };
};

// wishlist actions
export const addToWishlist = (prod) => {
  return {
    type: "ADD_TO_WISHLIST",
    payload: prod,
  };
};

export const removeFromWishlist = (id) => {
  return {
    type: "REMOVE_FROM_WISHLIST",
    payload: id,
  };
};

// export function asyncAddtocart(prod) {
//   return async (dispatch) => {
//     (dispatch) => {
//       try {
//         // const status = await.api.addToCart(prod);
//         status == -1
//           ? dispatch(addToCartFailure("unable to add to cart"))
//           : dispatch(addToCart(peod));
//       } catch (error) {}
//     };
//   };
// }
