import React from "react";
import PropTypes from "prop-types";

const ChildComponent = (props) => {
	return (
		<div className="p-4 mb-4 font-semibold bg-orange-300 rounded-lg shadow-md text-md">
			<h2 className="mb-2 text-xl font-bold">Child Component</h2>
			<p className="text-lg text-gray-700">Name: {props.name}</p>
			<p className="text-lg text-gray-700">Age: {props.age}</p>
			<p className="text-lg text-gray-700">Location: {props.location}</p>
		</div>
	);
};

//// to set a default prop is by destructuring the props object
// const ChildComponent = ({ name, age, location = "No Location" }) => {
// 	return (
// 		<div className="p-4 mb-4 font-semibold bg-orange-300 rounded-lg shadow-md text-md">
// 			<h2 className="mb-2 text-lg font-bold">Child Component</h2>
// 			<p className="text-gray-700">Name: {name}</p>
// 			<p className="text-gray-700">Age: {age}</p>
// 			<p className="text-gray-700">Location: {location}</p>
// 		</div>
// 	);
// };

ChildComponent.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	location: PropTypes.string,
};

// Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead

export default ChildComponent;
