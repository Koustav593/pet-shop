import React from "react";
import img6 from "../assets/product_01.jpg";
import img7 from "../assets/product_02.jpg";
import img8 from "../assets/product_03.jpg";
import img9 from "../assets/product_04.jpg";
import img10 from "../assets/product_05.jpg";
import img11 from "../assets/product_06.jpg";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ShoppingCartSharpIcon from "@material-ui/icons/ShoppingCartSharp";
import FavoriteBorderSharpIcon from "@material-ui/icons/FavoriteBorderSharp";
function Shop() {
  return (
    <section id="shop">
      <div className="text">
        <h3>
          <span>Our </span> Products
        </h3>
      </div>
      <div className="container1">
        <div className="box">
          <div className="img-box">
            <img src={img6} alt="" />
            <div className="icons">
              <VisibilityIcon className="icon" />
              <ShoppingCartSharpIcon className="icon" />
              <FavoriteBorderSharpIcon className="icon" />
            </div>
          </div>

          <div className="data-box">
            <h1>Air - Dried Food</h1>
            <h2>$15.00 - $30.00</h2>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={img7} alt="" />
            <div className="icons">
            <VisibilityIcon className="icon" />
              <ShoppingCartSharpIcon className="icon" />
              <FavoriteBorderSharpIcon className="icon" />
            </div>
          </div>
          <div className="data-box">
            <h1>Air - Dried Food</h1>
            <h2>$15.00 - $30.00</h2>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={img8} alt="" />
            <div className="icons">
            <VisibilityIcon className="icon" />
              <ShoppingCartSharpIcon className="icon" />
              <FavoriteBorderSharpIcon className="icon" />
            </div>
          </div>
          <div className="data-box">
            <h1>Air - Dried Food</h1>
            <h2>$15.00 - $30.00</h2>
          </div>
        </div>
      </div>
      <div className="container1">
        <div className="box">
          <div className="img-box">
            <img src={img9} alt="" />
            <div className="icons">
            <VisibilityIcon className="icon" />
              <ShoppingCartSharpIcon className="icon" />
              <FavoriteBorderSharpIcon className="icon" />
            </div>
          </div>
          <div className="data-box">
            <h1>Air - Dried Food</h1>
            <h2>$15.00 - $30.00</h2>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={img10} alt="" />
            <div className="icons">
            <VisibilityIcon className="icon" />
              <ShoppingCartSharpIcon className="icon" />
              <FavoriteBorderSharpIcon className="icon" />
            </div>
          </div>
          <div className="data-box">
            <h1>Air - Dried Food</h1>
            <h2>$15.00 - $30.00</h2>
          </div>
        </div>
        <div className="box">
          <div className="img-box">
            <img src={img11} alt="" />
            <div className="icons">
            <VisibilityIcon className="icon" />
              <ShoppingCartSharpIcon className="icon" />
              <FavoriteBorderSharpIcon className="icon" />
            </div>
          </div>
          <div className="data-box">
            <h1>Air - Dried Food</h1>
            <h2>$15.00 - $30.00</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;
