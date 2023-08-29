import { useRoutes, Outlet } from "react-router-dom"
import { Results } from "../../features/search/result/Result"
import { PageNotFound } from "../../components/Error/PageNotFound"
export const SearchModule = () => {
  let elements = useRoutes([
    { path: ":q", element: <Results /> },
    { path: "*", element: <PageNotFound /> },
  ])
  return (
    <div>
      <Outlet />
      {elements}
    </div>
  )
}
