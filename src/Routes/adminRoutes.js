/**
 * all admin routes
 */

import AddProduct from "../pages/Dashboard/AddProduct";
import AllOrders from "../pages/Dashboard/AllOrders";
import MakeAdmin from "../pages/Dashboard/MakeAdmin";
import ManageProduct from "../pages/Dashboard/ManageProduct";

export const adminRoutes = [
	{ path: "/dashboard/all-orders", name: "all-orders", Component: AllOrders },
	{
		path: "/dashboard/add-product",
		name: "add-product",
		Component: AddProduct,
	},
	{
		path: "/dashboard/manage-product",
		name: "manage-product",
		Component: ManageProduct,
	},
	{ path: "/dashboard/make-admin", name: "make-admin", Component: MakeAdmin },
];
