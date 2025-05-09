# 设计

这是一个基于 Vite 开发的 Vue3 mini版组件库

## 技术栈

用到的技术`TS` `Vite` `Vue3` `tsx` `UnoCSS` `Vitest` `Eslint` `Prettier` `Husky`

组件功能参考了[`Element-Plus`](https://element-plus.org/zh-CN/) [`Ant Design Vue`](https://www.antdv.com/components/overview-cn)

Vite 没什么好说的，速度非常快，用过 Vue2 和 Vue3 的同学都知道，webpack 和 Vite 的速度完全就不是一个量级的(当然依然不可否认webpack是一个非常优秀的打包工具 🐶手动狗头保命)

Eslint Prettier Husky 也没什么好说的，搭建规范项目的基本三件套，使项目更加规范化，其实不用也没有啥关系

## UnoCSS

什么是 UnoCSS?

废话不多说，直接 3 2 1 上链接😤[点这里](https://antfu.me/posts/reimagine-atomic-css)，英语不好的同学[点这里](https://antfu.me/posts/reimagine-atomic-css-zh)

上面详细介绍了什么事原子化CSS，以及相比于Tailwind CSS/Windi CSS，UnoCSS的优势

UnoCSS 可以比 Tailwind 的 JIT 引擎快 200 倍！200倍啊家人们，还要啥自行车😘

[Unocss官网](https://unocss.dev/)

这时候就有同学就要问了，vocal！你的首页怎么和Unocss官网的首页渐变效果这么像 抄的吧

毁谤 我告你毁谤啊！借鉴 这是借鉴！而且完整的效果还没借鉴到 惭愧啊

## Vitest

单元测试为什么使用Vitest而不使用Jest?

在 Vitest 之前，前端普遍的测试框架是 Jest。

虽然 Vite 项目也可与 Jest 搭配使用，但它们在配置上存在重复，用户不得不维护和运行两套流程

Vitest 诞生的初衷，便是为了让测试能力能更便捷地集成到 Vite 项目中，并且以往 Jest 的使用经验依然可以用在 Vitest 中使用，因为 Vitest 是兼容 Jest API的，没有太多的重复学习过程。

[Vitest 官网](https://vitest.dev/)

## JSX

:::tip

这里为什么要用jsx语法编写Vue代码?

:::

- 首先 JSX 是一种 Javascript 的语法扩展，最早用在 React 架构中

- JSX 与 TypeScript 的集成更紧密(tsx)

- JSX 的编程能力、类型友好性和灵活性使其成为**组件库开发的更优选择**(许多基于Vue的组件库也都是使用的JSX语法)。

- 不过对于业务层开发，vue模板语法仍是推荐的首选方案

- 构建工具（Vite、Webpack）对 JSX 的支持已非常成熟

  ```shell
  pnpm i @vitejs/plugin-vue-jsx -D
  ```

  ```ts
  // vite.config.ts
  import { defineConfig } from 'vite';
  import vuejsx from '@vitejs/plugin-vue-jsx'; // [!code highlight]

  export default defineConfig({
    plugins: [
      vuejsx({}), // [!code highlight]
    ],
  });
  ```
