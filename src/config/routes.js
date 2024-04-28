import {routes} from '../constant/routes';
import appIndex from '../pages';

export const appRoutes = [
    {
        path:routes.popular_on_db,
        Components: appIndex.PopularOnDb,
    },
    {
        path:routes.top_rated,
        Components: appIndex.TopRated,
    },
    {
        path:routes.home,
        Components: appIndex.Home,
    },
  
    {
        path:routes.popular_on_db_single,
        Components: appIndex.PopularMovieSingle,
    },
    {
        path:routes.top_rated_single,
        Components: appIndex.TopRatedSingle,
    },
  
]