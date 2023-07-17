import { Navigate } from "react-router-dom"

export const PrivateRoutes = ({ children }: any) => {
  // @ts-ignore
  const getTokenFromLocalStorage = localStorage.getItem("token")

  if (getTokenFromLocalStorage) {
    return children
  } else {
    return <Navigate to="/account" replace={true} />
  }
}
