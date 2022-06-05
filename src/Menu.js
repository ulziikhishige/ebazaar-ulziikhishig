import React from "react";
import logo from "./img/ebazaar.svg";
import cate from "./img/category2.svg";
import noti from "./icon/noti.svg";
import prof from "./icon/prof.svg";
import store from "./icon/store.svg";
import arrow from "./icon/arrow.svg";
import sags from "./icon/sags.svg";
import MenuItem from "./components/MenuItem";
import "./Menu.css";

const Menu = () => {
	const homeHandler = () => {
		window.location.href = "/";
	};
	const companiesHandler = () => {
		window.location.href = "/companies";
	};
	return (
		<div className="menu-container">
			<div className="contain">
				<div className="menu">
					<img src={logo} alt="logo" onClick={() => homeHandler()} />
					<input
						className="input"
						placeholder="Хайх утгаа энд оруулна уу..."
					/>
					<MenuItem icon={noti} text="Мэдэгдэл" />
					<MenuItem icon={prof} text="Нэвтрэх" />
					<div className="box">
						<img src={store} alt="logo" />
						<div>Таны үйлчилгээний цэг энд байна</div>
						<img src={arrow} height="7" alt="logo" />
						<img src={sags} alt="logo" />
						<div>Таны сагсанд</div>
					</div>
				</div>
				<div className="tabs">
					<img src={cate} alt="logo" />
					<div
						className="tab-item"
						onClick={() => companiesHandler()}
					>
						Нийлүүлэгчид
					</div>
					<div className="tab-item">Бүх бүтээгдэхүүн</div>
				</div>
			</div>
		</div>
	);
};
export default Menu;
