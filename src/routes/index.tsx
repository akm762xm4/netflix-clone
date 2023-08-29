import { Routes as Routing, Route, useLocation } from "react-router-dom"
import { Protected } from "./Protected"
import { MoviesModule } from "../pages/Movies/MoviesModule"
import { SeriesModule } from "../pages/Series/SeriesModule"
import { ActorsModule } from "../pages/Actors/ActorsModule"
import { Home } from "../components/Home/Home"
import { SearchModule } from "../pages/Search/SearchModule"
import { PageNotFound } from "../components/Error/PageNotFound"
export const Router = () => {
  const location = useLocation()
  return (
    <Routing key={location?.pathname} location={location}>
      <Route path="/" element={<Protected />}>
        <Route path="" element={<Home />} />
        <Route path="movies/*" element={<MoviesModule />} />
        <Route path="series/*" element={<SeriesModule />} />
        <Route path="actors/*" element={<ActorsModule />} />
        <Route path="/search/*" element={<SearchModule />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routing>
  )
}
