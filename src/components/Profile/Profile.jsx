import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ clothingItems, onCardClick }) {
  return (
    <div className="profile">
      <section className="profile__sidebar">{<SideBar />}</section>
      <section className="profile__clothing-items">
        <ClothesSection
          clothingItems={clothingItems}
          handleCardClick={onCardClick}
        />
      </section>
    </div>
  );
}

export default Profile;
