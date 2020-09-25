
export function toggleDarkMode() {
  return {
    type: "DARKMODE"
  }
}

export function setFilter(region){
  return {
    type: "FILTER",
    region
  }
}

export function updateSearch(text){
  return {
    type: "SEARCH",
    text
  }
}
