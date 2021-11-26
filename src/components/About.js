import React from 'react'
// import Aboutimg from './Aboutimg';
import img1 from "../assets/about_img.png";
const About = () => {
    return (
        <section id="about">
        <div className="image">
        <img src={img1}/>
        </div>
        <div className="content"> 
          <h3>premium <span>pet food</span> manufacturer</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            omnis animi, veritatis labore tempora voluptatum officia ducimus vel
            qui saepe cupiditate nostrum exercitationem similique molestiae eos
            eum sint optio aliquam recusandae aut corrupti at delectus ut?
            Corrupti, ad voluptas. Quae, sint cumque. Porro nam quis ad nobis
            fugit sapiente error et natus id! Repudiandae magni aliquam veritatis
            aut, sint saepe.
          </p>
          <a href="#"><button>Know More</button></a>
        </div>
      </section>
    )
}

export default About;
