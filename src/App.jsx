import React from "react";
import ParentComponent from "./components/ParentComponent";

const App = () => {
	return (
		<div className="container mt-12 mx-auto p-8">
			<h1 className="text-3xl font-bold mb-8">My React App</h1>
			<ParentComponent />
		</div>
	);
};

export default App;
