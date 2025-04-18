import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuejsx from '@vitejs/plugin-vue-jsx'
import Unocss from "unocss/vite";

const rollupOptions = {
  external: ["vue", "vue-router"], // 这些依赖不会被打包到最终的库文件中，而是期望在运行时由环境提供
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins:[
    vue(),
    vuejsx({}),
    // 添加UnoCSS插件
    Unocss({
      configFile: "./uno.config.ts",
    })
  ],
  build: {
    rollupOptions,
    minify: false, // 表示禁用代码压缩
    lib: {
      entry: "./src/entry.ts",
      name: "IUI",
      fileName: "i-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
})