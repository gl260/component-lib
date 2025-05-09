/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuejsx from '@vitejs/plugin-vue-jsx';
import Unocss from 'unocss/vite';

const rollupOptions = {
  external: ['vue', 'vue-router'], // 这些依赖不会被打包到最终的库文件中，而是期望在运行时由环境提供
  output: {
    globals: {
      vue: 'Vue',
    },
  },
};

export default defineConfig({
  plugins: [
    vue(),
    vuejsx({}),
    // 添加UnoCSS插件
    Unocss({
      configFile: './uno.config.ts',
    }),
  ],
  build: {
    rollupOptions,
    minify: 'terser', // boolean(false禁用代码压缩) | 'terser' | 'esbuild'
    cssCodeSplit: false, // css 代码分割
    // sourcemap: true, // 输出单独 source文件
    lib: {
      entry: './src/entry.ts',
      name: 'IUI',
      // fileName: 'i-ui',
      fileName: (format, entryName) => {
        if (entryName === 'style') {
          return 'style.css'; // 样式文件输出名称
        }
        return `i-ui.${format}.js`; // JS 文件输出名称
      },
      formats: ['es', 'umd', 'iife'], // 导出模块格式
    },
  },
  test: {
    globals: true, // 以在测试文件中直接使用Vitest的测试函数
    environment: 'happy-dom', // 使用happy-dom作为测试环境
    testTransformMode: {
      web: ['.[tj]sx$'],
    },
  },
} as any);
