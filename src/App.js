import React from "react";
import { Provider } from "react-redux";
import Header from "./component/Header";
import SearchResult from "./component/SearchResult";
import store from "./redux/store";
const App = () => {
	return (
		<Provider store={store}>
			<div className="flex flex-col h-full">
				<Header />
				<SearchResult />
			</div>
		</Provider>
	);
};

export default App;
