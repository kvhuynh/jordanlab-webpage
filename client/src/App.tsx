import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./views/Home";
import Contact from "./views/Contact";
import Publications from "./views/Publications";
import People from "./views/People";
import News from "./views/News";
import Nav from "./components/Nav";
import "./App.css";
import "./index.css";
import Research from "./views/Research";
import JoinUs from "./views/JoinUs";
import { Box } from "@chakra-ui/react";
import Footer from "./components/Footer";
import CloudedSection from "./components/CloudedSection";
import { useEffect, useState } from "react";
import ReactGA from "react-ga4";

function App() {
	const location = useLocation();
	const [showNav, setShowNav] = useState(location.pathname !== "/");

	const MEASUREMENT_ID = "G-TRACKINGID";
	ReactGA.initialize(MEASUREMENT_ID);

	useEffect(() => {
		if (location.pathname === "/") {
			// hide nav during animation
			setShowNav(false);
			const timer = setTimeout(() => setShowNav(true), 4000);
			return () => clearTimeout(timer);
		} else {
			setShowNav(true);
		}
	}, [location.pathname]);

	useEffect(() => {
		window.history.scrollRestoration = "manual";
	}, []);

	useEffect(() => {
		ReactGA.send({ hitType: "pageview", page: window.location.pathname });
	}, []);
	return (
		<>
			<Nav show={showNav}></Nav>
			<CloudedSection>
				<Box margin={"0 auto"} maxWidth={"1200px"} px={{ base: 4, md: 8 }}>
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/research" element={<Research />}></Route>
						<Route path="/People" element={<People />}></Route>
						<Route path="/publications" element={<Publications />}></Route>
						<Route path="/contact" element={<Contact />}></Route>
						<Route path="/news" element={<News />}></Route>
						<Route path="/join-us" element={<JoinUs />}></Route>
					</Routes>
				</Box>
			</CloudedSection>
			<Footer></Footer>
		</>
	);
}

export default App;
