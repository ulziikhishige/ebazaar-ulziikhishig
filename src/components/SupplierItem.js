import React from "react";
import "./SupplierItem.css";

const SupplierItem = (props) => {
	return (
		<div className="supplier-container">
			<div className="supplier-item">
				<img src={props.img} alt="icon" className="supplier-img" />
				<div className="supplier-text">
					<div className="name">{props.name}</div>
					<div className="category">{props.category}</div>
				</div>
			</div>
		</div>
	);
};

export default SupplierItem;
