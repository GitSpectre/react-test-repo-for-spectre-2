import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import ProductCard from "../components/ProductCard";
import MenuBox from "../components/MenuBox";
import { removeFromWishlist, addToCart } from "../actions";

function Wishlist({ wishlist, removeFromWishlist, addToCart }) {
  const [ShowMenu, setShowMenu] = useState(false);

  const displayMenuBox = () => {
    ShowMenu ? setShowMenu(false) : setShowMenu(true);
  };

  const addProductToCart = (id, amount) => {
    const product = wishlist.find((prd) => prd.id === id);
    if (product) {
      let cartProduct = { ...product, Quantity: amount };
      addToCart(cartProduct);
      // Optional: remove from wishlist once added to cart? 
      // leaving it in wishlist for now as it's common.
    }
  };

  return (
    <div className="w-screen p-3 md:p-5 h-screen flex flex-col bg-background overflow-scroll">
      <Navbar displayMenu={displayMenuBox}></Navbar>
      {ShowMenu ? <MenuBox /> : null}
      <h1 className="font-inter text-xl md:text-3xl mt-5 text-bars font-bold mb-5 ">
        {wishlist.length > 0
          ? wishlist.length + ` item${wishlist.length > 1 ? "s" : ""} in wishlist`
          : "Wishlist is Empty :("}
      </h1>
      <div className="flex flex-row flex-wrap justify-between pr-3 pl-3 sm:pr-10 sm:pl-10">
        {wishlist.map((product) => (
          <div key={product.id} className="relative">
            <ProductCard
              id={product.id}
              name={product.name}
              categories={product.categories}
              price={product.price}
              image={product.image}
              rating={product.rating}
              addProductToCart={addProductToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToprops = (state) => ({
  wishlist: state.wishlist.wishlist,
});

const mapDispatchToProps = (dispatch) => ({
  removeFromWishlist: (id) => dispatch(removeFromWishlist(id)),
  addToCart: (prod) => dispatch(addToCart(prod)),
});

export default connect(mapStateToprops, mapDispatchToProps)(Wishlist);