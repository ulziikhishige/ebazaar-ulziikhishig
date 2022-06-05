import React from "react";
import "./MenuItem.css";

const MenuItem = (props) => {
	return (
		<div className="menu-item">
			<img src={props.icon} alt="icon" />
			<div className="text">{props.text}</div>
		</div>
	);
};

export default MenuItem;
