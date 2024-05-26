import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
	return (
		<div className="bg-blue-200 p-4">
			<h1 className="text-2xl font-bold mb-4">Parent Component</h1>
			<ChildComponent
				name="John"
				age={30}
			/>
		</div>
	);
};

// const ParentComponent = () => {
// 	return (
// 		<div className="bg-blue-200 p-4">
// 			<h1 className="text-2xl font-bold mb-4">Parent Component</h1>
// 			<ChildComponent
// 				name="John"
// 				age={30}
// 			/>
// 			<ChildComponent
// 				name="Alex"
// 				age={20}
// 			/>
// 			<ChildComponent
// 				name="Kate"
// 				age={25}
// 			/>
// 			<ChildComponent
// 				name="Mark"
// 				age={19}
// 			/>
// 			<ChildComponent
// 				name="Vivian"
// 				age={32}
// 			/>
// 		</div>
// 	);
// };

// const ParentComponent = () => {
// 	const data = [
// 		{ name: "John", age: 30 },
// 		{ name: "Alex", age: 20 },
// 		{ name: "Kate", age: 25 },
// 		{ name: "Mark", age: 19 },
// 		{ name: "Vivian", age: 32 },
// 	];

// 	return (
// 		<div className="bg-gray-200 p-4">
// 			<h1 className="text-2xl font-bold mb-4">Parent Component</h1>
// 			{data.map((person, index) => (
// 				<ChildComponent
// 					key={index}
// 					name={person.name}
// 					age={person.age}
// 				/>
// 			))}
// 		</div>
// 	);
// };

export default ParentComponent;
