import React from "react";
import PropTypes from "prop-types";

const ChildComponent = (props) => {
	return (
		<div className="bg-orange-300 shadow-md p-4 rounded-lg mb-4 font-semibold text-md">
			<h2 className="text-lg font-bold mb-2">Child Component</h2>
			<p className="text-gray-700">Name: {props.name}</p>
			<p className="text-gray-700">Age: {props.age}</p>
		</div>
	);
};

// const ChildComponent = ({ name, age }) => {
// 	return (
// 		<div className="bg-orange-300 shadow-md p-4 rounded-lg mb-4 font-semibold text-md">
// 			<h2 className="text-lg font-bold mb-2">Child Component</h2>
// 			<p className="text-gray-700">Name: {name}</p>
// 			<p className="text-gray-700">Age: {age}</p>
// 		</div>
// 	);
// };

ChildComponent.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
};

export default ChildComponent;
