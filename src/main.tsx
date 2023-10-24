import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
 // import store from './redux/index.js';
import { store, persistor } from "@/redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
      <Provider store={store}>
       <PersistGate loading={null}  persistor={persistor}>
			<App />
		</PersistGate>
      </Provider>
  // </React.StrictMode>
)
