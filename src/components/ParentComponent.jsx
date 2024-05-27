import React from "react";
import ChildComponent from "./ChildComponent";
import { FaUserAstronaut } from "react-icons/fa";

const ParentComponent = () => {
	return (
		<div className="p-4 bg-blue-200">
			<h1 className="mb-4 text-2xl font-bold">Parent Component</h1>
			<ChildComponent
				name="John"
				age={30}
			/>
		</div>
	);
};

// const ParentComponent = () => {
// 	return (
// 		<div className="p-4 bg-blue-200">
// 			<h1 className="mb-4 text-2xl font-bold">Parent Component</h1>
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
// 		{ name: "Kate", age: 25, location: "Bangkok" },
// 		{ name: "Mark", age: 19 },
// 		{ name: "Vivian", age: 32, location: "New York" },
// 	];

// 	return (
// 		<div className="p-4 bg-gray-200">
// 			<h1 className="mb-4 text-2xl font-bold">Parent Component</h1>
// 			{data.map((person, index) =>
// 				person.age > 20 ? (
// 					<ChildComponent
// 						key={index}
// 						name={person.name}
// 						age={person.age}
// 						location={person.location}
// 					/>
// 				) : (
// 					<div
// 						key={index}
// 						className="flex items-center p-4 my-8 text-2xl font-bold text-white rounded-md shadow-lg bg-slate-700"
// 					>
// 						<FaUserAstronaut />
// 						<span className="ml-4">This person is under 20.</span>
// 					</div>
// 				)
// 			)}
// 		</div>
// 	);
// };

export default ParentComponent;
