import avatar from "../../assets/avatar.png";
import "./SideBar.css";

function SideBar({ onEditProfile, onSignOut }) {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img className="sidebar__avatar" src={avatar} alt="Default avatar" />
        <p className="sidebar__username">Username</p>
      </div>
      <div className="sidebar__buttons">
        <button onClick={onEditProfile} className="sidebar__edit-button">
          Edit Profile
        </button>
        <button onClick={onSignOut} className="sidebar__signout-button">
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default SideBar;
