import { defineConfig } from "vitepress";

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: "en-US",
  base: "/",
  title: "Design Patterns in Vanilla JS",
  description: "Guide to Design Patterns in Vanilla JavaScript",
  lastUpdated: true,
  head: [
    //Google AdSense
    [
      "script",
      {
        "data-ad-client": "ca-pub-3517052833771002", //[!code focus]
        async: "",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
      },
    ],
  ],
  cleanUrls: true,
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/SouravBandyopadhyay/design-patterns",
      },
    ],
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Dropdown Menu",
        items: [
          { text: "Item A", link: "/item-1" },
          { text: "Item B", link: "/item-2" },
          { text: "Item C", link: "/item-3" },
        ],
      },
    ],

    sidebar: [
      {
        text: "Design Patterns",
        items: [
          { text: "Command Pattern", link: "/patterns/command-pattern" },
          { text: "Factory Pattern", link: "/patterns/factory-pattern" },
          { text: "Flyweight Pattern", link: "/patterns/flyweight-pattern" },
          { text: "Middleware Pattern", link: "/patterns/middleware-pattern" },
          { text: "Observer Pattern", link: "/patterns/observer-pattern" },
        ],
      },
    ],
    footer: {
      message: 'Made By Sourav Bandyopadhyay',
      // copyright: 'Copyright © 2019-present Evan You'
    }
  },
});
