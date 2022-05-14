import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Chat from "./reducers";
const store = createStore(
	Chat,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<ChakraProvider>
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</ChakraProvider>
			</Provider>
		</QueryClientProvider>
	</React.StrictMode>
);
