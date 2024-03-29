import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { Page404 } from "./pages/404Page";

import "./css/Styles.css";
import "./css/NavBar.css";
import "./css/Intro.css";
import "./css/Project.css";
import "./css/Features.css";
import "./css/InvestorNfts.css";
import "./css/Impressum.css";
import "./css/Footer.css";
import "./css/MintPage.css";
import "./css/MediaQueries.css";
import { Toaster } from "react-hot-toast";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</BrowserRouter>
			<Toaster />
		</>
	);
}

export default App;
