import { Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Contact from "./views/Contact";
import Publications from "./views/Publications";
// import Contact, { People } from "./views/People";
import People from "./views/People";
import Nav from "./components/Nav";
import "./App.css";
import "./index.css";
import Research from "./views/Research";
import { Box } from "@chakra-ui/react";

function App() {
	return (
		<Box margin={"0 auto"} maxWidth={"1200px"}>
			<Nav></Nav>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/research" element={<Research />}></Route>
				<Route path="/People" element={<People />}></Route>
				<Route path="/publications" element={<Publications />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
			</Routes>
		</Box>
	);
}

export default App;
