import React from "react";
import { Provider } from "react-redux";
import Header from "./component/Header";
import SearchResult from "./component/SearchResult";
import store from "./redux/store";
import VideoDetails from "./component/VideoDetails";
import MainContianer from "./component/MainContianer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainContianer />,
		children: [
			{
				path: "/",
				element: <SearchResult />,
			},
			{
				path: "watch",
				element: <VideoDetails />,
			},
		],
	},
]);

const App = () => {
	return (
		<Provider store={store}>
			<div className="flex flex-col h-full">
				<Header />
				<RouterProvider router={router} />
			</div>
		</Provider>
	);
};

export default App;
