module.exports = {
  themeConfig: {
    repo: "https://github.com/leansocket/nodex-libs",
    nav: [
      { text: "首页", link: "/" },
      { text: "文档", link: "/apis/" },
      { text: "示例", link: "/demo/" },
      { text: "脚手架", link: "/cli" },
      
    ],
    sidebarDepth: 2,
    sidebar: {
      "/apis/": [
        {
          title: "API",
          collapsable: false,
          children: [
            {title: 'HTTP', path:"/apis/http"},
            "/apis/authes",
            "/apis/crypto",
            "/apis/flakes",
            "/apis/log",
            "/apis/fmt",
            "/apis/html",
            "/apis/mysql",
            "/apis/mongo",
            "/apis/schedule",
            "/apis/smtp",
            "/apis/spawn",
            "/apis/time",
            "/apis/common",
            "/apis/util"
          ],
        }
      ],
      "/demo/": [
        {
          title: '基础功能',
          collapsable: false,
          children: [
            {title: '介绍', path: '/demo/'},
            {title: '日志', path: '/demo/logger.md'},
            {title: 'HTTP服务', path: '/demo/http.md'},
            {title: '数据库', path: '/demo/mysql.md'},
            {title: '加密', path: '/demo/crypto.md'},
            {title: '身份识别', path: '/demo/token.md'},
            {title: '数据校验', path: '/demo/fmt.md'},
            {title: '子进程', path: '/demo/spawn.md'},
            {title: '编码生成器', path: '/demo/flake.md'},
            {title: '日期', path: '/demo/date.md'},
            {title: '定时任务', path: '/demo/schedule.md'},
            
          ]
        }
      ],
      "/":["/","cli"],
    },
  },
  title: "nodex-libs",
  markdown: {
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
  },
};
