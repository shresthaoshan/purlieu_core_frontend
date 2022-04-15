import { AnimatePresence } from "framer-motion";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

const App = () => {
	return (
		<AnimatePresence exitBeforeEnter>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</AnimatePresence>
	);
};

export default App;
