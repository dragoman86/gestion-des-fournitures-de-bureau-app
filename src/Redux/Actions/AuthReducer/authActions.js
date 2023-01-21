import axios from "axios";

export const signIn = (user, navigate) => async (dispatch) => {
  try {
    // send get request to the server to get the user
    const res = await axios.get(
      `http://localhost:3000/user?login=${user.login}&&password=${user.password}`
    );
    // if the request is successful and user exist, dispatch the action to the reducer
    if (res.status === 200) {
      if (res.data.length === 0) {
        dispatch({ type: "SIGN_IN_ERROR", payload: "Bad credentials" });
      } else {
        console.log(res.data)
        dispatch({ type: "SIGN_IN", payload: res.data });
        // if the user is an admin, navigate to the home page
        localStorage.getItem("id")
        if (res.data[0].type === "admin") {
          navigate("/home");
        }
      }
    } else {
      dispatch({ type: "SIGN_IN_ERROR", payload: "Bad credentials" });
    }
  } catch (error) {
    dispatch({ type: "SIGN_IN_ERROR", payload: error });
  }
};

export const signOut = (navigate, dispatch) => {
  try {
    // dispatch the action to the reducer
    dispatch({ type: "SIGN_OUT", payload: null });
    // remove the token from the local storage to simulate the sign out
    // navigate to the home page
    navigate("/");
  } catch (error) {
    dispatch({ type: "SIGN_OUT_ERROR", payload: error });
  }
};

export const currentUser = () => async (dispatch) => {
  const res = await axios.get(
    `http://localhost:3000/user?id=${localStorage.getItem("id")}`
  );
  if (res.status === 200) {
    dispatch({ type: "CURRENT_USER", payload: res.data });
  }
};