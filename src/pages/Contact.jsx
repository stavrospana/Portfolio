import React, { useState } from "react";
import { BsEnvelope } from "react-icons/bs";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setValidationErrors({
      ...validationErrors,
      [name]: value.trim() === "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // log to show submission is working
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container contact-container mt-5">
      <h2 className="contact-me mb-4">
        Contact Me <BsEnvelope />
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className={`form-control ${
              validationErrors.name ? "is-invalid" : ""
            }`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {validationErrors.name && (
            <div className="invalid-feedback">Name is required.</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address:
          </label>
          <input
            type="email"
            className={`form-control ${
              validationErrors.email ? "is-invalid" : ""
            }`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {validationErrors.email && (
            <div className="invalid-feedback">Email is required.</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            className={`form-control ${
              validationErrors.message ? "is-invalid" : ""
            }`}
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          ></textarea>
          {validationErrors.message && (
            <div className="invalid-feedback">Message is required.</div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
