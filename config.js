module.exports = {
  title: 'Ping 的技术博客',
  meta: {
    favicon: 'https://i.imgur.com/JJryeCE.jpg',
  },
  name: 'Ping',
  email: 'leeping88901024@gmail.com',
  iconUrl: 'https://i.imgur.com/JJryeCE.jpg',
  License: 'by',
  url: 'http://www.macdull.top',
  about: '/profile',
  // also repository link blog/header
  jueJinPostLink: 'https://github.com/leeping88901024/next-ping-blog', 
  jueJinLikeIconLink: 'https://img.shields.io/github/stars/leeping88901024/next-ping-blog.svg?style=social',
  // headers
  mtitle: '你好，昆明',
  msubTitle: 'Hello, Kun Ming',
  mheaderImage: 'https://rehasense.com/wp-content/uploads/2015/07/facility-slider.jpg',
  mtitleVisible: true,
  msubTitleVisible: true,
  // editor
  gitRepository: 'https://github.com/leeping88901024/next-ping-blog',
  gitHome: 'https://github.com/leeping88901024',
  tmpheaderBkgrdColor: '#ededed',
  // Sidebar
  wordings: ['这是一个简单的自我简绍'],
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
      href: '/test/',
      title: '留言'
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
