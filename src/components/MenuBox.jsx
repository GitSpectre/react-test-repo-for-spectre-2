import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser, logoutAndClear } from "../actions";

function MenuBox({ loggedIn,LogoutUser }) {
  if (loggedIn) {
    return (
      <div className="bg-bars font-inter flex flex-col justify-evenly items-center p-5 text-center rounded-xl  shadow-elevate w-2/5 sm:w-1/6 h-2/5 absolute right-5 top-24 z-30">
        <button className=" w-20 h-8 sm:w-20 md:w-40 sm:h-9 text-sm md:text-lg rounded-lg text-black shadow-lg  bg-background">
          <Link to="/Profile"> Profile</Link>{" "}
        </button>

        <button onClick={()=>LogoutUser()} className=" w-20 h-8 sm:w-20 md:w-40 sm:h-9 text-sm md:text-lg rounded-lg text-black shadow-lg  bg-background">
          Log out
        </button>
        <button className=" w-20 h-8 sm:w-20 md:w-40 sm:h-9 text-sm md:text-lg rounded-lg text-black shadow-lg  bg-background">
          <Link to={"/Cart"}>View Cart</Link>
        </button>
        <button className=" w-20 h-8 sm:w-20 md:w-40 sm:h-9 text-sm md:text-lg rounded-lg text-black shadow-lg  bg-background">
          Settings
        </button>
      </div>
    );
  } else {
    return (
      <div className="bg-bars font-inter flex flex-col justify-evenly items-center p-5 text-center rounded-xl  shadow-elevate w-3/6 md:w-2/6 lg:w-1/6 h-2/5 absolute right-5 top-24 md:top-28 z-30">
        <h1 className="text-white font-normal">
          Create an account to avail exclusive discounts
        </h1>
        <button className=" w-20 h-8 sm:w-20 md:w-40 sm:h-9 text-sm md:text-lg rounded-lg text-black shadow-lg  bg-background">
          <Link to={"/SignUp"}>Sign up</Link>
        </button>
        <button className=" w-20 h-8 sm:w-20 md:w-40 sm:h-9 text-sm md:text-lg rounded-lg text-black shadow-lg  bg-background">
          <Link to={"/LogIn"}>Log In</Link>
        </button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.user.LoggedIn,
  };
};
const mapDispatchToProps = (dispatch) => { 
  return  {
    LogoutUser: ()=>{dispatch(logoutAndClear())}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuBox);
