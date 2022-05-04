import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ChakraProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ChakraProvider>
		</QueryClientProvider>
	</React.StrictMode>
);
