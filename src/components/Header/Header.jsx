import { Link } from "react-router-dom";
import { useContext } from "react";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import logo from "../../assets/logo.svg";
import defaultAvatar from "../../assets/avatar.png";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  currentUser,
  onLogout,
  onLoginClick,
  onRegisterClick,
}) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__left">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
      </div>

      <div className="header__spacer"></div>

      <div className="header__right">
        <ToggleSwitch />
        {isLoggedIn && (
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add clothes
          </button>
        )}

        {isLoggedIn ? (
          <>
            <Link to="/profile" className="header__profile-link">
              <div className="header__user-container">
                <p className="header__username">
                  {currentUser?.name || "User"}
                </p>
                {currentUser?.avatar ? (
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="header__avatar"
                  />
                ) : (
                  <div className="header__avatar-placeholder">
                    {currentUser?.name?.charAt(0) || "U"}
                  </div>
                )}
              </div>
            </Link>
            <button
              onClick={onLogout}
              type="button"
              className="header__logout-btn"
            >
              Log out
            </button>
          </>
        ) : (
          <>
            <button
              onClick={onRegisterClick}
              type="button"
              className="header__auth-btn"
            >
              Sign Up
            </button>
            <button
              onClick={onLoginClick}
              type="button"
              className="header__auth-btn"
            >
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
