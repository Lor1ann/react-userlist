const initialState = {
  searchValue: "",
};

export default function searchReducer(state = initialState, action) {
  if (action.type === "SET_SEARCH") {
    return {
      searchValue: action.payload,
    };
  }
  return state;
}
