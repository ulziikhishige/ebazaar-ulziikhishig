import React from "react";
import mcscocacola from "./img/mcs-coca-cola.jpg";
import mg from "./img/mg.png";
import anungoo from "./img/anungoo.jpg";
import milkotrade from "./img/milko-trade.jpg";
import tavanbogd from "./img/tavanbogd-international.jpg";
import gem from "./img/gem-international.jpg";
import gazar from "./img/gazar-shim.jpg";
import khuns from "./img/khuns-express.jpg";
import vitafit from "./img/vitafit-group.jpg";
import ochir from "./img/ochir-daginas.jpg";
import global from "./img/global-bridge.jpg";
import ebazaar from "./img/logon.png";
import SupplierItem from "./components/SupplierItem";
import ShowAll from "./components/ShowAll";
import "./Supplier.css";

const Classification = () => {
	return (
		<div className="supplier-container">
			<div className="cl">
				<div className="title">
					<h1>Нийлүүлэгч</h1>
					{window.location.pathname === "/" ? <ShowAll /> : ""}
				</div>
				<div className="supplier-row">
					<SupplierItem
						img={mcscocacola}
						name="М-Си-Эс Кока-Кола"
						category="Хүнс, ус ундаа"
					/>
					<SupplierItem
						img={mg}
						name="Маркет Гейт ХХК"
						category="Хүнс, ус ундаа"
					/>
					<SupplierItem
						img={anungoo}
						name="Анунгоо ХХК"
						category="Хүнс, ус ундаа"
					/>
					<SupplierItem
						img={milkotrade}
						name="Милко Трейд ХХК"
						category="Хүнс, ус ундаа"
					/>
				</div>
				<div className="supplier-row">
					<SupplierItem
						img={tavanbogd}
						name="Таванбогд Интернэшнл"
						category="Хүнс, ус ундаа"
					/>
					<SupplierItem
						img={gem}
						name="Жем Интернэшнл ХХК"
						category="Хүнс, ус ундаа"
					/>
					<SupplierItem
						img={gazar}
						name="Газар Шим"
						category="Хүнс, ус ундаа"
					/>
					<SupplierItem
						img={khuns}
						name="Хүнс Экспресс"
						category="Хүнс, ус ундаа"
					/>
				</div>
				<div className="supplier-row">
					<SupplierItem
						img={vitafit}
						name="Витафит"
						category="Хүнс, ус ундаа"
					/>
					<SupplierItem
						img={ochir}
						name="Очир дагинас "
						category="Хүнс, ус ундаа"
					/>
					<SupplierItem
						img={global}
						name="Глобал Бридж"
						category="Хүнс, ус ундаа"
					/>
					<SupplierItem
						img={ebazaar}
						name="Е Базаар Трейд"
						category="Шуурхай түгээлт"
					/>
				</div>
			</div>
		</div>
	);
};
export default Classification;
