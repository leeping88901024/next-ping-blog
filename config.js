module.exports = {
  title: 'Ping 的技术博客',
  maxPostsInPage: 10,
  meta: {
    description: 'Ping 技术博客，开发日常，以及遇到的坑',
    keyword: 'ping, blog, JavaScript',
    theme_color: '#384f7c',
    favicon: '',
    google_site_verification: '',
  },
  name: 'Ping',
  email: 'leeping88901024@gmail.com',
  iconUrl: 'https://avatars0.githubusercontent.com/u/33998600?s=400&u=fa92489bd1f38b715bdda627338e5752c9b389aa&v=4',
  License: 'by',
  url: 'https://calpa.me',
  about: '/2018/05/01/about-calpa-liu/',
  // Sidebar
  wordings: ['简单的自我简绍'],
  zhihuUsername: 'li-ping-60-30',
  githubUsername: 'leeping88901024',
  friends: [],
  // Plugins
  gaOptimizeId: 'GTM-WHP7SC5',
  gaTrackId: 'UA-84737574-3',
  navbarList: [
    {
      href: '/stats/',
      title: '文档翻译',
    },
    {
      href: '/test/',
      title: '测试 Bootstrap'
    },
    {
      href: '/second/',
      title: '第二次更改'
    }
  ],
  redirectors: [
    {
      fromPath: '/',
      toPath: '/page/1/',
    },
  ],
  gitalk: {
    clientID: '18255f031b5e11edd98a',
    clientSecret: '2ff6331da9e53f9a91bcc991d38d550c85026714',
    repo: 'calpa.github.io',
    owner: 'calpa',
    admin: ['calpa'],
    distractionFreeMode: true,
  },
  stats: {
    title: '過去三十日數據',
    description: '過去三十日數據',
    image: 'https://i.imgur.com/VjBWiSt.png',
  },
};
