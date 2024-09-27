import React, { useState } from "react";
import { UilEnvelopeEdit } from "@iconscout/react-unicons";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Optionally reset the form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container">
        {/* Contact Me Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="on"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="on"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              autoComplete="on"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={10}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="button">
            Send
          </button>
        </form>
        <div className="contact__wrapper">
          <a href="mailto:aniraannu@gmail.com">
            <div className="contact__information">
              <UilEnvelopeEdit className="contact__icon" />
              <div>
                <h3 className="contact__title">Email Me</h3>
                <span className="contact__subtitle">aniraannu@gmail.com</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
