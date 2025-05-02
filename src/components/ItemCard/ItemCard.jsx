import "./ItemCard.css";
import { useContext, useState } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import LikeIcon from "../../assets/like-button.svg";
import LikeHoverIcon from "../../assets/like-hover.svg";
import LikedIcon from "../../assets/liked-button.svg";

function ItemCard({ item, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    onCardClick(item);
  };

  const handleLike = () => {
    onCardLike({
      id: item._id,
      isLiked: item.likes?.includes(currentUser?._id),
    });
  };

  const isLiked = item.likes?.includes(currentUser?._id);

  let icon = LikeIcon;
  if (isHovered && !isLiked) icon = LikeHoverIcon;
  if (isLiked) icon = LikedIcon;

  return (
    <li className="card">
      <div className="card__header">
        <h2 className="card__name">{item.name}</h2>
        <button
          onClick={handleLike}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="card__like-btn"
        >
          <img src={icon} alt="like icon" className="card__like-icon" />
        </button>
      </div>
      <img
        onClick={handleCardClick}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </li>
  );
}

export default ItemCard;
