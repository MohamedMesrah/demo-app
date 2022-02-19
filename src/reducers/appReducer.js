export function appReducer(state, action) {
  switch (action.type) {
    // sign-up && sign-in views
    case "SET_SIGN_UP":
      return { ...state, isSignUp: action.isSignUp };

    // registration
    case "SET_REGESTERED":
      return { ...state, registered: action.registered };

    // sidebar
    case "SET_SIDEBAR":
      return { ...state, opendedSideBar: action.opendedSideBar };

    // default return
    default:
      return state;
  }
}
