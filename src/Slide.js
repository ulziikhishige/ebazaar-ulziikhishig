import React from "react";
import img1 from "./img/img-1.jpg";
import img2 from "./img/img-2.jpg";
import img3 from "./img/img-3.png";
import img4 from "./img/img-4.jpg";
import "./Slide.css";

const Slide = () => {
	return (
		<div className="slide">
			<img src={img1} alt="Slide" className="slide1" />
			<img src={img2} alt="Slide" className="slide2" />
			<img src={img3} alt="Slide" className="slide3" />
			<img src={img4} alt="Slide" className="slide4" />
		</div>
	);
};
export default Slide;
