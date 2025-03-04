import "./AddItemModal.css";

export default function AddItemModal() {
  <ModalWithForm
    title="New garment"
    buttonText="Add garment"
    isOpen={activeModal === "add-garment"}
    onClose={closeActiveModal}
  >
    <label htmlFor="name" className="modal__label">
      Name{" "}
      <input
        type="text"
        className="modal__input"
        id="name"
        placeholder="Name"
      />
    </label>
    <label htmlFor="imageUrl" className="modal__label">
      Image{" "}
      <input
        type="text"
        className="modal__input"
        id="imageUrl"
        placeholder="Image URL"
      />
    </label>
    <fieldset className="modal__radio-buttons">
      <legend className="modal__legend">Select the weather type:</legend>
      <label htmlFor="hot" className="modal__label modal__label_type_radio">
        <input
          id="hot"
          type="radio"
          name="weather"
          className="modal__radio-input"
        />
        Hot
      </label>
      <label htmlFor="warm" className="modal__label modal__label_type_radio">
        <input
          id="warm"
          type="radio"
          name="weather"
          className="modal__radio-input"
        />
        Warm
      </label>
      <label htmlFor="cold" className="modal__label modal__label_type_radio">
        <input
          id="cold"
          type="radio"
          name="weather"
          className="modal__radio-input"
        />
        Cold
      </label>
    </fieldset>
  </ModalWithForm>;
}
