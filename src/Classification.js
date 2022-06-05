import React from "react";
import undaa from "./icon/undaa.svg";
import budaa from "./icon/budaa.svg";
import ger_ahui from "./icon/ger_ahui.svg";
import alhocol from "./icon/alhocol.svg";
import suu from "./icon/suu.svg";
import belen_hool from "./icon/belen_hool.svg";
import amttan from "./icon/amttan.svg";
import darshilsan from "./icon/darshilsan.svg";
import amtlagch from "./icon/amtlagch.svg";
import goo_saikhan from "./icon/goo_saikhan.svg";
import ClassificationItem from "./components/ClassificationItem";
import ShowAll from "./components/ShowAll";
import "./Classification.css";

const Classification = () => {
	return (
		<div className="clc">
			<div className="cl">
				<div className="title">
					<h1>Ангилал</h1>
					<ShowAll />
				</div>
				<div className="classification-container">
					<ClassificationItem icon={undaa} text="Ус, ундаа" />
					<ClassificationItem
						icon={budaa}
						text="Гурил, будаа, гоймон"
					/>
					<ClassificationItem icon={ger_ahui} text="Гэр ахуй" />
					<ClassificationItem icon={alhocol} text="Алкоголь" />
					<ClassificationItem
						icon={suu}
						text="Сүү, сүүн бүтээгдэхүүн"
					/>
					<ClassificationItem
						icon={belen_hool}
						text="Бэлэн хоол, түргэн хоол"
					/>
					<ClassificationItem icon={amttan} text="Амттан" />
					<ClassificationItem
						icon={darshilsan}
						text="Даршилсан, нөөшилсөн"
					/>
					<ClassificationItem
						icon={amtlagch}
						text="Хоол амтлагч, соус"
					/>
					<ClassificationItem icon={goo_saikhan} text="Гоо сайхан" />
				</div>
			</div>
		</div>
	);
};
export default Classification;
