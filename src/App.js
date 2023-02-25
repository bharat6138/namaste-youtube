import React, { useState } from "react";
import { Provider } from "react-redux";
import Header from "./component/Header";
import SearchResult from "./component/SearchResult";
import store from "./redux/store";
import VideoDetails from "./component/VideoDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCards from "./component/AllCards";
import LoadingBar from "react-top-loading-bar";
import BtnSlider from "./component/BtnSlider";
import LeftNav from "./component/LeftNav";

const App = () => {
	const [progress, setProgress] = useState(0);
	const [selectedCategory, setSelectedCategory] = useState("New");
	return (
		<Provider store={store}>
			<LoadingBar color="#f11946" progress={progress} />

			<BrowserRouter>
				<div className="flex flex-col h-full">
					<Header onLoaderFinished={setProgress} />
					<div className="flex flex-row h-[calc(100%-56px)]">
						<LeftNav
							category={selectedCategory}
							setcategory={setSelectedCategory}
							onLoaderFinished={setProgress}
						/>
						<div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white">
							<BtnSlider />
							<Routes>
								<Route
									path="/"
									exact
									element={
										<AllCards
											onLoaderFinished={setProgress}
											category={selectedCategory}
											setcategory={setSelectedCategory}
										/>
									}
								/>
								<Route
									path="/searchResult/:searchQuery"
									element={<SearchResult onLoaderFinished={setProgress} />}
								/>
								<Route
									path="/video/:id"
									element={<VideoDetails onLoaderFinished={setProgress} />}
								/>
							</Routes>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</Provider>
	);
};

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <MainContianer />,
// 		children: [
// 			{
// 				path: "/",
// 				element: <AllCards />,
// 			},
// 			{
// 				path: "/video/:id",
// 				element: <VideoDetails />,
// 			},
// 			{
// 				path: "/searchResult/:searchQuery",
// 				element: <SearchResult />,
// 			},
// 		],
// 	},
// ]);

export default App;
