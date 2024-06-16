import mathjax3 from "markdown-it-mathjax3";
import { defineConfig } from 'vitepress';
import { nav, sidebar } from './config/links.mts';
import { customElements } from "./config/mathjax3.mts";

const BASE_PATH = '/cs-408';

// https://vitepress.dev/reference/site-config
export default defineConfig({

  srcDir: './docs',
  outDir: `.vitepress/dist`,
  assetsDir: 'assets',
  base: '/cs-408/',
  

  title: "408",
  description: "计算机考研408",

  // Theme
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,

    sidebar: sidebar,
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    // 锚点导航
    outline: {
      level: [2, 4],
      label: '章节目录'
    },
    docFooter: {
      "prev": "前一篇",
      "next": "后一篇"
    },
    // 页脚
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
