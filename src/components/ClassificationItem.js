import React from "react";
import "./ClassificationItem.css";

const ClassificationItem = (props) => {
	return (
		<div className="classification-item">
			<img src={props.icon} className="ci" alt="icon" />
			<div className="cit">{props.text}</div>
		</div>
	);
};
export default ClassificationItem;
