import { useRoutes, Outlet } from "react-router-dom";
import { MoviesInfo } from "../features/movies/MovieInfo";
import { MovieList } from "../features/movies/MovieList";
import { PageNotFound } from "../components/Error/PageNotFound";
export const MoviesModule = () => {
  let elements = useRoutes([
    { index: true, path: "", element: <MovieList /> },
    { path: ":id", element: <MoviesInfo /> },
    { path: "*", element: <PageNotFound /> },
  ]);
  return (
    <div>
      <Outlet />
      {elements}
    </div>
  );
};
