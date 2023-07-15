// @ts-ignore
let getTokenFromLocalStorage
if (localStorage.getItem("user")) {
  // @ts-ignore
  getTokenFromLocalStorage = JSON.parse(localStorage.getItem("user"))
} else {
  getTokenFromLocalStorage = ""
}

export const config = {
  headers: {
    Authorization: `Bearer ${
      getTokenFromLocalStorage.token !== null
        ? getTokenFromLocalStorage.token
        : ""
    }`,
    Accept: "application/json",
  },
}
