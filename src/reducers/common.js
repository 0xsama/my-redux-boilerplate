const defaultState = {
  appName: 'APP_NAME'
}


export default (state= defaultState, action) => {
  switch (action.payload) {
    case "APP_LOAD":
      return {
        ...state,
        appLoaded: true
      };
    default:
        return state
  }
}
