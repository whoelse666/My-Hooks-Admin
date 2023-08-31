
import { HashRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import AuthRouter from "@/routers/utils/authRouter";
import { connect } from "react-redux";

import './App.css'
import Router from "@/routers/index";
function App() { 
  return (
    <HashRouter>
		<ConfigProvider>
				<AuthRouter>
					<Router />
				</AuthRouter>
			</ConfigProvider> 
		</HashRouter>
  )
}
export default App
