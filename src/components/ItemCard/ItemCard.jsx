import "./ItemCard.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import LikeIcon from "../../assets/like-button.svg";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    onCardLike({
      id: item._id,
      isLiked: item.likes?.includes(currentUser?._id),
    });
  };

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        <button onClick={handleLike} className="card__like-btn">
          <img
            src={LikeIcon}
            alt="like icon"
            className={`card__like-icon ${
              item.likes?.includes(currentUser?._id) ? "liked" : ""
            }`}
          />
        </button>
      </div>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.link}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
