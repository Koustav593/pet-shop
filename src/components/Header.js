import React, { useRef } from "react";
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ShoppingCartSharpIcon from '@material-ui/icons/ShoppingCartSharp';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import PetsSharpIcon from '@material-ui/icons/PetsSharp';
import CancelSharpIcon from '@material-ui/icons/CancelSharp';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
const Header = () => {
  const user_open = useRef();
  const nav_open = useRef();
  return (
    <header className="header">
    <a href="#" className="logo">{<PetsSharpIcon className="icon"/>} shop</a>
    <nav className="navbar" ref={nav_open}>
    <PetsSharpIcon className="icon"/>
      <a href="#home">home</a>
      <a href="#about">about</a>
      <a href="#shop">shop</a>
      <a href="#services">services</a>
      <a href="#plan">plan</a>
      <a href="#contact">contact</a>     
      <CancelSharpIcon className="icon"  onClick={()=>{
         nav_open.current.style.left="-100%";
       }}/>
    </nav>
    <div className="icons">
      <MenuSharpIcon id="menu" className="icon"
       onClick={()=>{
         nav_open.current.style.left=0;
       }}
      />
      <ShoppingCartSharpIcon className="icon"/>
      <AccountCircleSharpIcon className="icon"
        onClick={()=>{user_open.current.style.right=0;}} 
      />
    </div>
    <form action="" className="login-form" ref={user_open}>
      <h3>Sign In</h3>
      <input
        type="email"
        name=""
        placeholder="email"
        className="box"
        required=""
      />
      <input
        type="password"
        name=""
        placeholder="password"
        className="box"
        required=""
      />
      <div className="remember">
        <input type="checkbox" name="" id="remember-me" />
        <label Htmlfor="remember-me">Remember Me</label>
      </div>
      <button type="submit">Sign In</button>
      <span id="close" onClick={()=>{
        user_open.current.style.right="-100%";
      }}>Close</span>
    </form>
  </header>
  );
};

export default Header;
