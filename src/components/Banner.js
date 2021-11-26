import React from 'react'
import img2 from "../assets/dog_food.png";
import img3 from "../assets/shop_now_dog.png";
import img4 from "../assets/shop_now_cat.png";
import img5 from "../assets/cat_food.png";
function Banner() {
    return (
        <div id="shop-show">
        <div className="dog-food">
          <div className="image">
            <img src={img2} alt="dog image" />
          </div>
          <div className="content">
            <h3><span>Air-Dried</span> Dog Food</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              soluta eos hic vitae repellat minima facilis quae mollitia quod
              illo?
            </p>
            <br />
            <h1>$15.00 - $30.00</h1>
            <br />
            <a href="#shop"><img src={img3} alt="image" /></a>
          </div>
        </div>
        <div className="cat-food">
          <div className="content">
            <h3><span>Air-Dried</span> Cat Food</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              soluta eos hic vitae repellat minima facilis quae mollitia quod
              illo?
            </p>
            <br />
            <h1>$15.00 - $30.00</h1>
            <br />
            <a href="#shop"><img src={img4} alt="image" /></a>
          </div>
          <div className="image">
            <img src={img5} alt="dog image" />
          </div>
        </div>
      </div>
    )
}

export default Banner;
