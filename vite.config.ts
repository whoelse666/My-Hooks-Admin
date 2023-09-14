/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineConfig, loadEnv, ConfigEnv } from "vite"

import react from "@vitejs/plugin-react"
import { resolve } from "path"

// Read all environment variable configuration files to process.env
function wrapperEnv(envConf: any) {
  const ret: any = {}
  for (const envName of Object.keys(envConf)) {
    let realName = envConf[envName].replace(/\\n/g, "\n")
    realName = realName === "true" ? true : realName === "false" ? false : realName
    if (envName === "VITE_PORT") {
      realName = Number(realName)
    }
    if (envName === "VITE_PROXY") {
      try {
        realName = JSON.parse(realName)
      } catch (error) {
        console.log(error)
      }
    }
    ret[envName] = realName
    process.env[envName] = realName
  }
  return ret
}

// https://vitejs.dev/config/
export default defineConfig((mode: ConfigEnv) => {
  const env = loadEnv(mode.mode, process.cwd())
  const viteEnv = wrapperEnv(env)
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/gobal.scss";',
        },
      },
    },
    server: {
      host: true,
      // host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
      port: viteEnv.VITE_PORT,
      open: viteEnv.VITE_OPEN,
      cors: true,
      // https: false,
      // 代理跨域（mock 不需要配置，这里只是个事列）
      proxy: {
        "/api": {
          target: "https://mock.mengxuegu.com/mock/62abda3212c1416424630a45", // easymock
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ""),
        },
      },
    },
  }
})
