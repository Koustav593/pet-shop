import React from "react";
import img12 from "../assets/contact_img.png";
function Contact() {
  return (
    <section id="contact">
      <div className="image">
        <img src={img12} alt="image" />
      </div>
      <div className="form">
        <h1>
          Contact <span>Us</span>
        </h1>
        <form action="">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Your Name"
            required=""
          />
          <br />
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email"
            required=""
          />
          <br />
          <input
            type="number"
            name=""
            id=""
            placeholder="Enter Phone No"
            required=""
          />
          <br />
          <div className="btns">
            <button type="submit">Send</button>
            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
