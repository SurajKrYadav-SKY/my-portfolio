import React, { useRef} from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.scss";

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8z5k0q4", "template_y7ozpqr", form.current, {
        publicKey: "nne9tO5uqiBi0KDMA",
      })
      .then(
        () => {
          console.log(alert('Thank You...! I will get back to you soon!'));
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="email" id="contacts">
      <div className="formContainer">
        <div className="title">
          <h1>Contact Me</h1>
          <span>Feel free to react out</span>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="input">
            <label>Name</label>
            <input type="text" name="user_name" />
          </div>
          <div className="input">
            <label>Email</label>
            <input type="email" name="user_email" />
          </div>
          <div className="inputS">
            <label>Message</label>
            <textarea name="message" />
            <div className="button">
            <input type="submit" value="Send"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
