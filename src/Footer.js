import React from "react";
import "./Footer.css";

const Footer = () => {
	return (
		<div>
			<div className="footer-container">
				<div className="footer">
					<span className="footer-column footer-menu">
						<h4>Бидний тухай</h4> <p>Түгээмэл асуулт, хариулт</p>
						<p>Үйлчилгээний нөхцөл</p>{" "}
						<p>Аюулгүй байдал, нууцлал</p>
					</span>
					<span className="footer-column">
						<h4>Холбоо барих</h4> <p>7707-1907</p>
						<p>info@ebazaar.mn</p>
						<h4>Хаяг</h4>
						<p>
							Сэнтрал тауэр, 15 давхар, 8-р хороо Сүхбаатар
							дүүрэг, Улаанбаатар
						</p>
					</span>
					<span className="footer-column">
						<h4>Биднийг дагаарай</h4>
					</span>
				</div>
			</div>
			<div className="center">
				<div className="copy-right">
					© 2022 БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН
				</div>
			</div>
		</div>
	);
};
export default Footer;
