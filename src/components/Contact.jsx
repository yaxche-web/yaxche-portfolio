// components/Contact.jsx
import React, { useRef } from "react";

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);
  const securityAnswerRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value,
      message: messageRef.current.value,
      securityAnswer: securityAnswerRef.current.value,
    };

    // Validation du formulaire
    const requiredFields = ["name", "email", "subject", "message", "securityAnswer"];
    const isFormValid = requiredFields.every((field) => formData[field].trim() !== "");

    if (!isFormValid || formData.securityAnswer.trim().toLowerCase() !== "à la main") {
      alert("Please fill out all fields correctly!");
      return;
    }

    // Code d'envoi d'e-mail
    const emailData = {
      to: "eaqmijangos@gmail.com",
      subject: formData.subject,
      body: formData.message,
    };
    console.log("Email data:", emailData);

    // Effacer le formulaire
    nameRef.current.value = "";
    emailRef.current.value = "";
    subjectRef.current.value = "";
    messageRef.current.value = "";
    securityAnswerRef.current.value = "";
  };

  return (
    <div id="contact">
      <h2>Contact :</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type="text" ref={nameRef} required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" ref={emailRef} required />
        </label>
        <br />
        <label>
          Sujet:
          <input type="text" ref={subjectRef} required />
        </label>
        <br />
        <label>
          Message:
          <textarea ref={messageRef} required />
        </label>
        <br />
        <label>
        De quelle façon ce site a-t-il été réalisé ?
          <input type="text" ref={securityAnswerRef} required />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
