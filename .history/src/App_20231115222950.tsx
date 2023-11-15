
import { HashRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";
import i18n from "i18next";
import "moment/dist/locale/zh-cn";
import { useState } from "react";
import { useDispatch, useSelector } from "@/redux";
import "./App.css"
import Router from "@/routers/index";
// Route用来定义
function App() {
  const dispatch = useDispatch();
  // const { language, assemblySize } = useSelector((state:any) => state.global);
  const [i18nLocale, setI18nLocale] = useState(zhCN);

  return (
    <div className="App" >
      <HashRouter>
        {/* <ConfigProvider locale={i18nLocale} componentSize={assemblySize}> */}
        <ConfigProvider locale={i18nLocale} >
          <Router />
        </ConfigProvider>
      </HashRouter>
    </div>
  )
}

export default App
