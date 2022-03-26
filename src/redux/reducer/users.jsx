export default function usersReducer(
  state = { sort: "date", users: [] },
  action
) {
  if (action.type === "GET_USERS") {
    return { ...state, users: [...action.payload] };
  }

  return state;
}
