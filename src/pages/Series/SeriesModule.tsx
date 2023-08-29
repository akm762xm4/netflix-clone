import { useRoutes, Outlet } from "react-router-dom"
import { SeriesInfo } from "../../features/series/info/SeriesInfo"
import { SeriesList } from "../../features/series/list/SeriesList"
import { PageNotFound } from "../../components/Error/PageNotFound"

export const SeriesModule = () => {
  let elements = useRoutes([
    { path: "", element: <SeriesList /> },
    { path: ":id", element: <SeriesInfo /> },
    { path: "*", element: <PageNotFound /> },
  ])
  return (
    <div>
      <Outlet />
      {elements}
    </div>
  )
}
