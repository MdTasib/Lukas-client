/**
 * all dashboard routes
 */

import EditProfile from "../pages/Dashboard/EditProfile";
import MyOrders from "../pages/Dashboard/MyOrders";
import MyReview from "../pages/Dashboard/MyReview";
import Profile from "../pages/Dashboard/Profile";
import Payment from "../pages/Payment/Payment";

export const dashboardRoutes = [
	{ path: "/dashboard/review", name: "review", Component: MyReview },
	{ path: "/dashboard/my-order", name: "my-order", Component: MyOrders },
	{ path: "/dashboard/profile", name: "profile", Component: Profile },
	{
		path: "/dashboard/edit-profile",
		name: "edit-profile",
		Component: EditProfile,
	},
	{ path: "/dashboard/payment/:id", name: "payment", Component: Payment },
];
