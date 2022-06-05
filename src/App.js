import "./App.css";
import Header from "./Header";
import Menu from "./Menu";
import Slide from "./Slide";
import Footer from "./Footer";
import Classification from "./Classification";
import Supplier from "./Supplier";

function App() {
	const showHome = () => {
		if (window.location.pathname === "/") {
			return (
				<div>
					<Slide />
					<Classification />
					<Supplier />
				</div>
			);
		}
	};
	const showCompanies = () => {
		if (window.location.pathname === "/companies") {
			return <Supplier />;
		}
	};
	return (
		<div className="app">
			<Header />
			<Menu />
			{showHome()}
			{showCompanies()}
			<Footer />
		</div>
	);
}

export default App;
