// components/Contact.jsx
import React, { useRef } from "react";
import '../styles/Contact.scss';


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

    <div className="formcont">
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nom:
          <input type="text" id="name" ref={nameRef} required placeholder="Votre nom *" />
        </label>
        <br />
        <label htmlFor="email">
          Email:
          <input type="email" id="email" ref={emailRef} required placeholder="Votre email *" />
        </label>
        <br />
        <label htmlFor="subject">
          Sujet:
          <input type="text" id="subject" ref={subjectRef} required placeholder="Sujet de votre message *" />
        </label>
        <br />
        <label htmlFor="message">
          Message:
          <textarea id="message" ref={messageRef} required placeholder="Votre message *" />
        </label>
        <br />
        <label htmlFor="securityAnswer">
  Pour valider ce formulaire, veuillez indiquer comment ce site a été réalisé (Réponse dans le footer).
  <input type="text" id="securityAnswer" ref={securityAnswerRef} required placeholder="Votre réponse ici *" />
</label>
        <br />
        <button type="submit">Envoyer</button>
      </form>

    </div>


      


    </div>
  );
};

export default Contact;
