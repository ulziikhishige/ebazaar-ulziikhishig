import React from "react";
import rightArrow from "../icon/all.svg";
import "./ShowAll.css";

const ShowAll = () => {
	return (
		<div className="showAll">
			Бүгдийг үзэх
			<img src={rightArrow} height="12" alt="arrow" />
		</div>
	);
};

export default ShowAll;
