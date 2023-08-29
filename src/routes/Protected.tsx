import { Outlet } from "react-router-dom"
import { Layout } from "../components/Layout/Layout"

export const Protected = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
