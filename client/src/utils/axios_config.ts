// @ts-ignore
const getTokenFromLocalStorage = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("user"))
  : ""

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
