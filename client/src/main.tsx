import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Provider>
				<ParallaxProvider>
				<App />
				</ParallaxProvider>
			</Provider>
		</BrowserRouter>
	</StrictMode>
);
