import React from "react";
import { Link } from "react-router-dom";
import CardItemCount from "./CardItemCount";
import { connect } from "react-redux";

function Navbar({ username,loggedIn, displayMenu }) {

  return (
    <div className="flex flex-row bg-bars w-full h-16 rounded-lg justify-between p-5 shadow-elevate  mb-5 items-center ">
      <div className="flex flex-row space-x-4">
        <Link to="/Cart">
          <button className="relative flex flex-col justify-center items-center w-10 h-10">
            <div className=" size-5 sm:size-9">
              <img src="src/assets/carticon-white.png"></img>
            </div>
            <CardItemCount></CardItemCount>
          </button>
        </Link>
        <Link to="/Wishlist">
          <button className="relative flex flex-col justify-center items-center w-10 h-10">
            <div className=" size-5 sm:size-9 text-white items-center flex justify-center text-2xl">
              ❤️
            </div>
          </button>
        </Link>
      </div>
      <h1 className="text-lg sm:text-3xl  flex flex-row font-bold justify-center items-center text-white ml-9">
        Florify
        <img
          className=" ml-1 md:ml-2 mb-1 size-8 md:size-12"
          src="src/assets/icon.png"
        ></img>
      </h1>
      <div className="flex flex-row justify-center sm:justify-around w-32  items-center">
        <img
          onClick={displayMenu}
          className="size-4 mr-2 sm:mr-0  cursor-pointer sm:size-5 "
          src="src/assets/user.png"
        ></img>
        <h1
          onClick={displayMenu}
          className=" cursor-pointer text-white text-sm sm:text-md"
        >{loggedIn?username:"Sign Up"}
        </h1>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    username: state.user.user.firstName + " " + state.user.user.lastName,
    loggedIn:state.user.user.LoggedIn
  };
};
export default connect(mapStateToProps, null)(Navbar);
