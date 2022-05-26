import AllItems from "../pages/AlIItems/AllItems";
import AllReviews from "../pages/AllReviews/AllReviews";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Singin from "../pages/Login/Singin";
import MyProfile from "../pages/MyProfile/MyProfile";
import NotFound from "../pages/NotFound/NotFound";

export const publicRoutes = [
	{ path: "/", name: "Home", Component: Home },
	{ path: "/home", name: "Home", Component: Home },
	{ path: "/all-items", name: "Home", Component: AllItems },
	{ path: "/all-reviews", name: "Home", Component: AllReviews },
	{ path: "/my-profile", name: "Home", Component: MyProfile },
	{ path: "/blog", name: "Home", Component: Blog },
	{ path: "/login", name: "Login", Component: Login },
	{ path: "/singup", name: "Login", Component: Singin },
	{ path: "*", name: "notfound", Component: NotFound },
];
