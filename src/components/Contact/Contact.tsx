
      import React, { useState, useRef } from "react";
import "./Contact.css";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validate = () => {
    let newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (!nameRegex.test(formData.name)) {
      newErrors.name = "Only alphabets allowed";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      const serviceID = "service_x8bqd55";
      const templateID = "template_anf6hao";
      const publicKey =  'ydZ7L8ppRLWT7-b91';

      // Use sendForm just like your footer component
      emailjs
        .sendForm(
          serviceID,
          templateID,
          formRef.current!,
          publicKey
        )
        .then(() => {
          alert("Message sent successfully!");
          // Reset both state and the physical form
          setFormData({ name: "", email: "", message: "" });
          formRef.current?.reset();
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Try again.");
        });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact-info__heading">
            Let's build something <br />
            <span className="italic">extraordinary.</span>
          </h3>
          <p className="contact-info__text">
            Whether you have a specific project in mind or just want to say hi,
            my inbox is always open.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <FiMail className="contact-item__icon" />
              <span>snehanahak6@gmail.com</span>
            </div>
            <div className="contact-item">
              <FiMapPin className="contact-item__icon" />
              <span>Bengaluru, India</span>
            </div>
          </div>
        </div>

        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            {/* Added a second hidden input to fill the duplicate template variable {{user_name}} */}
            <input type="hidden" name="user_name" value={formData.name} />
            <input
              type="text"
              name="name" // Matches {{name}} in your template
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z\s]*$/.test(value)) {
                  setFormData({ ...formData, name: value });
                }
              }}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="user_email" // Matches {{user_email}} in your template
              placeholder="email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message" // Matches {{message}} in your template
              rows={5}
              placeholder="Send me a message..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>

          <button type="submit" className="submit-btn">
            Send Message <FiSend className="btn-icon" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;