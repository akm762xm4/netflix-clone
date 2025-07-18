import { useRoutes, Outlet } from "react-router-dom";
import { ActorsInfo } from "../features/actors/ActorsInfo";
import { PopularActorsList } from "../features/actors/PopularList";
import { PageNotFound } from "../components/Error/PageNotFound";
export const ActorsModule = () => {
  let elements = useRoutes([
    { path: "", element: <PopularActorsList /> },
    { path: ":id", element: <ActorsInfo /> },
    { path: "*", element: <PageNotFound /> },
  ]);
  return (
    <div>
      <Outlet />
      {elements}
    </div>
  );
};
