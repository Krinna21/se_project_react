import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

const RegisterModal = ({ isOpen, onClose, onRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ name, avatar, email, password });
  };

  return (
    <ModalWithForm
      title="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Register"
      secondButton={
        <button
          type="button"
          className="modal__second-button"
          onClick={() => {
            onClose();
            setTimeout(() => {
              document.dispatchEvent(new CustomEvent("open-login-modal"));
            }, 300);
          }}
        >
          or Login
        </button>
      }
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="modal__input"
        />
      </label>
      <label className="modal__label">
        Avatar URL
        <input
          type="url"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          required
          className="modal__input"
        />
      </label>
      <label className="modal__label">
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="modal__input"
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="modal__input"
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
