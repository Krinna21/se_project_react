import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./EditProfileModal.css";

function EditProfileModal({ isOpen, onClose, onUpdateUser }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name || "");
      setAvatar(currentUser.avatar || "");
    }
  }, [currentUser, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({ name, avatar });
  };

  return (
    <div className={`modal ${isOpen ? "modal_open" : ""}`}>
      <div className="modal__content">
        <button className="modal__close-btn" onClick={onClose}>
          X
        </button>
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit} className="modal__form">
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Avatar URL
            <input
              type="url"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="modal__save-btn">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProfileModal;
