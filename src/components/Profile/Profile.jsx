import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

function Profile({ clothingItems }) {
  return (
    <div className="profile">
      <section className="profile__sideblock">{<SideBar />}</section>
      <section className="profile__clothing-items">
        <ClothesSection clothingItems={clothingItems} />
      </section>
    </div>
  );
}

export default Profile;
