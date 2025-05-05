import "./ModalWithForm.css";
import close from "../../assets/close.png";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
  secondButton,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h4 className="modal__title">{title}</h4>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={close} alt="Close" />
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__buttons-row">
            <button type="submit" className="modal__submit">
              {buttonText}
            </button>
            {secondButton}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
