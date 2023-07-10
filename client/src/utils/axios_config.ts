// @ts-ignore
const getTokenFromLocalStorage = localStorage.getItem("customer")
  ? JSON.parse(localStorage.getItem("customer"))
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
