import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/image/xiu.svg",
      },
    ],
  ], // head图标
  title: "2024-龙", // 左上角标题

  description: "奋斗",
  themeConfig: {
    // 搜索
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
    logo: "/image/龙.svg", // 左上角图标
    // https://vitepress.dev/reference/default-theme-config
    // 本地搜索
    nav: [
      { text: "首页", link: "/" },
      { text: "前端", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/ThisWo/" }],
    // 定制底部
    footer: {
      copyright: "Copyright © 2024-present My Bai",
    },
    lastUpdated: true  // 最后更新时间
  },
});
