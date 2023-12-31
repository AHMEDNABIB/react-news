import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Main from "../layouts/Main";
import NewsLayout from "../layouts/NewsLayout";
import Category from "../pages/Home/Category/Category";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import News from "../pages/News/News";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Share/Terms/Terms";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginLayout></LoginLayout>,
		children: [
			{
				path: "/",
				element: <Navigate to="/category/0"></Navigate>,
			},
			{
				path: "login",
				element: <Login></Login>,
			},
			{
				path: "register",
				element: <Register></Register>,
			},
			{
				path: 'terms',
				element:<Terms></Terms>
			}
		],
	},
	{
		path: "/category",
		element: <Main></Main>,
		children: [
			// {
			// 	path: "/",
			// 	element: <Category></Category>,
			// 	loader: () => fetch(`http://localhost:5000/news/`),
			// },
			{
				path: ":id",
				element: <Category></Category>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/categories/${params.id}`),
			},
		],
	},
	{
		path: "news",
		element: <NewsLayout></NewsLayout>,
		children: [
			{
				path: ":id",
				element: (
					<PrivateRoute>
						<News></News>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(`http://localhost:5000/news/${params.id}`),
			},
		],
	},
]);

export default router;
