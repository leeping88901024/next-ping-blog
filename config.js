module.exports = {
  title: 'Ping 的技术博客',
  meta: {
    favicon: 'https://i.imgur.com/2B9jRyn.jpg',
  },
  name: 'Ping',
  email: 'leeping88901024@gmail.com',
  iconUrl: 'https://i.imgur.com/2B9jRyn.jpg',
  License: 'by',
  url: 'http://www.macdull.top',
  about: '/blog?url=5c0a9e594a589a08dc87ce89',
  // also repository link blog/header
  jueJinPostLink: 'https://github.com/leeping88901024/next-ping-blog', 
  jueJinLikeIconLink: 'https://img.shields.io/github/stars/leeping88901024/next-ping-blog.svg?style=social',
  // headers
  mtitle: '你好，昆明。',
  msubTitle: 'Hello, Kun Ming.',
  mheaderImage: 'https://i.imgur.com/yBt4oU2.jpg',
  mtitleVisible: true,
  msubTitleVisible: true,
  // editor
  gitRepository: 'https://github.com/leeping88901024/next-ping-blog',
  gitHome: 'https://github.com/leeping88901024',
  tmpheaderBkgrdColor: '#ededed',
  defaultheaderImageUri: 'https://i.imgur.com/oLJNTdS.jpg',
  // Sidebar
  wordings: [`你们的时间有限，所以不要把它浪费在过其他人的生活。最重要的是，你要有勇气跟随你的内心和直觉。某种程度上，它们已经知道你真正想要成为什么样子。其他所有事情都是次要的。`],
  zhihuUsername: 'li-ping-60-30',
  githubUsername: 'leeping88901024',
  friends: [
    {
      href: 'https://calpa.me',
      title: 'Calpa'
    }
  ],
  // pagination size/page
  pageSize: 3,
  // Plugins - Google Analytics
  gaOptimizeId: 'GTM-WHP7SC5',
  gaTrackId: 'UA-130591707-1',
  // Navbar
  navbarList: [
    {
      href: '/',
      title: '首页'
    },
    {
      href: '/tags',
      title: '分类'
    },
    {
      href: '/guestbook',
      title: '留言板'
    },
    {
      href: '/blog?url=5c0a9e594a589a08dc87ce89',
      title: '关于作者'
    }
  ],
  // pluggins
  gitalk: {
    clientID: '106ab12fa69d9f235e1f',
    clientSecret: 'a1eda91e5225817427aab929917f87657b2192eb',
    repo: 'next-ping-blog',
    owner: 'leeping88901024',
    admin: ['leeping88901024'],
    distractionFreeMode: true,
  },
  // mongodb connect string
  dbstring: {
    uri: 'mongodb://test:test@cluster0-shard-00-00-avsto.azure.mongodb.net:27017,cluster0-shard-00-01-avsto.azure.mongodb.net:27017,cluster0-shard-00-02-avsto.azure.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',
  },
  
};
