import axios from "axios";

export const getUsers = (url) => async (dispatch) => {
  try {
    const data = await axios.get(url);
    dispatch({ type: "GET_USERS", payload: data.data });
  } catch (error) {
    console.error(error);
  }
};
