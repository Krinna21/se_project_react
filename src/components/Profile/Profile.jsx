import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({
  clothingItems,
  onCardClick,
  handleAddClick,
  onCardLike,
  setActiveModal,
  onLogout,
}) {
  const handleEditProfile = () => {
    setActiveModal("edit-profile");
  };

  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar onEditProfile={handleEditProfile} onSignOut={onLogout} />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          clothingItems={clothingItems}
          handleCardClick={onCardClick}
          handleAddClick={handleAddClick}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
