import React from "react";
import "./css/HomeLogin.css";
import { auth, authProvider } from "../../firebase/firebase";
import { useStateValue } from "../../contexts/StateProvider";
import { actionTypes } from "../../contexts/reducer";
function HomeLogin() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(authProvider)
      .then((result) => {
        dispatch({
          action: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="home__feedback">
      <h1> Feel free to leave some tips, improvements or support</h1>

      <div className="home__feedback__login">
        <p>Login to leave me feecback and send it to me</p>
        <div className="home__feedback__loginButton">
          <img
            src="https://api.iconify.design/flat-color-icons:google.svg"
            alt=""
          />
          <button onClick={signIn}>Log in With a Google Account</button>
        </div>
      </div>
    </div>
  );
}

export default HomeLogin;
