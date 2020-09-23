const darkmode = (state=false, action) => {
  switch(action.type){
    case "DARKMODE":
      return !state;
    default:
      return state;
  }
}

export default darkmode;
