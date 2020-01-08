import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";
import "./Contact.css";

import contactImage from "../../assets/contact-img.svg";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: ""
};

const Contact = () => {
  const [formData, setFormData] = useState(initialState);

  const { firstName, lastName, email, message } = formData;

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(
        "https://fierce-earth-84105.herokuapp.com/api/email",
        formData,
        config
      );
      setFormData(initialState);

      if (res.data.success) {
        toast.success("🎉 Your email was sent with success!", {
          position: "top-right",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true
        });
      } else {
        toast.error("😢 I´m sorry the was a problem with your email. Try again later please.", {
          position: "top-right",
          autoClose: 8000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true
        });
      }
    } catch (err) {
      toast.error("😢 I´m sorry the was a problem with your email. Try again later please.", {
        position: "top-right",
        autoClose: 8000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true
      });
    }
  };

  return (
    <section className="contact" id="contact-section">
      <h1>Get in touch</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="name-information">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="Email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <textarea
            id=""
            rows="10"
            placeholder="Write your message here..."
            name="message"
            value={message}
            onChange={handleChange}
            minLength="20"
            required
          />
          <button className="btn" type="submit">
            Send Message
          </button>
        </form>
        <img src={contactImage} alt="hire" />
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
