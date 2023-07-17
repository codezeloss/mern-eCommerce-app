import { Navigate } from "react-router-dom"

export const OpenRoutes = ({ children }: any) => {
  // @ts-ignore
  const getTokenFromLocalStorage = JSON.parse(localStorage.getItem("user"))

  if (!getTokenFromLocalStorage?.token) {
    return children
  } else {
    return <Navigate to="/account" replace={true} />
  }
}
