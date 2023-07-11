// @ts-ignore
const getTokenFromLocalStorage = localStorage.getItem("customer") || ""

export const config = {
  headers: {
    // @ts-ignore
    Authorization: `Bearer ${getTokenFromLocalStorage.token || ""}`,
    Accept: "application/json",
  },
}
