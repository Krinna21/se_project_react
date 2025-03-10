import "./ItemModal.css";
import close from "../../assets/close.png";

function ItemModal({ activeModal, onClose, card, onDeleteItem }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={close} alt="Close" />
        </button>
        <img src={card.link} alt="image" className="modal__image" />
        <div className="modal__footer">
          <div className="modal__info">
            <h3 className="modal__caption">{card.name}</h3>
            <h3 className="modal__weather">Weather: {card.weather}</h3>
          </div>
          <button
            onClick={() => onDeleteItem(card)}
            className="modal__delete-btn"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
