const filter = (state="", action) => {
  switch(action.type){
    case "FILTER":
      return action.region
    default:
      return state
  }
}

export default filter;
