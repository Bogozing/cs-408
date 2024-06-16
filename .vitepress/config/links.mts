export const nav = [
  { text: 'Home', link: '/' },
  { text: '案例', link: '/markdown-examples'},
  { text: '数据结构', link: '/ds/'},
  { text: '计算机组成原理', link: '/co/'},
  { text: '操作系统', link: '/os/'},
  { text: '计算机网络', link: '/cn/' }
]

export const sidebar = {
  '/markdown-examples': [
    {
      text: 'Examples',
      items: [
        { text: 'Markdown Examples', link: '/markdown-examples' },
        { text: 'Runtime API Examples', link: '/api-examples' }
      ]
    }
  ],
  '/ds/': [
    {
      text: "数据结构",
      items: [
        {text:'0.index',link:"/ds/index.html"},
        {text:'1.绪论',link:"/ds/绪论"},
        {text:'2.线性表',link:"/ds/线性表"},
        {text:'3.栈和队列',link:"/ds/栈和队列"},
        {text:'4.串',link:"/ds/串"},
        {text:'5.树与二叉树',link:"/ds/树与二叉树"},
        {text:'6.图',link:"/ds/图"},
        {text:'7.查找',link:"/ds/查找"},
        {text:'8.排序',link:"/ds/排序"}
      ]
    }
],
  '/co/': [
    {
      text: "计算机组成原理",
      items: [
        {text:'0.index',link:"/co/index.html"},
        {text:'1.计算机系统概述',link:"/co/计算机系统概述"},
        {text:'2.数据的表示和运算',link:"/co/数据的表示和运算"},
        {text:'3.存储系统',link:"/co/存储系统"},
        {text:'4.指令系统',link:"/co/指令系统"},
        {text:'5.中央处理器',link:"/co/中央处理器"},
        {text:'6.总线',link:"/co/总线"},
        {text:'7.输入输出系统',link:"/co/输入输出系统"}
      ]
    }
],
    '/os/': [
        {
          text: "操作系统",
          items: [
            {text:'0.index',link:"/os/index.html"},
            {text:'1.计算机系统概述',link:"/os/计算机系统概述"},
            {text:'2.进程管理',link:"/os/进程管理"},
            {text:'3.内存管理',link:"/os/内存管理"},
            {text:'4.文件管理',link:"/os/文件管理"},
            {text:'5.输入输出管理',link:"/os/输入输出管理"}
          ]
        }
    ],
    "/cn/": [
        {
          text: "计算机网络",
          items: [
            {text:'0.index',link:"/cn/index.html"},
            {text:'1.计算机网络概述',link:"/cn/计算机网络概述"},
            {text:'2.物理层',link:"/cn/物理层"},
            {text:'3.数据链路层',link:"/cn/数据链路层"},
            {text:'4.网络层',link:"/cn/网络层"},
            {text:'5.传输层',link:"/cn/传输层"},
            {text:'6.应用层',link:"/cn/应用层"}
          ]
        }
    ]
}