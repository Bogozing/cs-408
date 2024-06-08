import mathjax3 from "markdown-it-mathjax3";
import { defineConfig } from 'vitepress';
import { sidebar } from './config/links.mts';
import { customElements } from "./config/mathjax3.mts";

const BASE_PATH = '/';

// https://vitepress.dev/reference/site-config
export default defineConfig({

  srcDir: './docs',
  outDir: `./build${BASE_PATH}`,
  assetsDir: 'assets',
  base: BASE_PATH,

  title: "408",
  description: "计算机考研408",

  // Theme
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '案例', link: '/markdown-examples'},
      { text: '数据结构', link: '/ds/'},
      { text: '计算机组成原理', link: '/cs/'},
      { text: '操作系统', link: '/os/'},
      { text: '计算机网络', link: '/cn/' }
    ],

    sidebar: sidebar,
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      copyright: "Copyright@2024 Bogo Zhang"
    }
  },
  markdown: {
		config: (md) => {
			md.use(mathjax3);
		},
	},
  vue: {
		template: {
			compilerOptions: {
				isCustomElement: (tag) => customElements.includes(tag),
			},
		},
	}
})
