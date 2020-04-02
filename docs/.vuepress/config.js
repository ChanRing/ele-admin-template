module.exports = {
  dest: 'vuepress',
  serviceWorker: true,
  themeConfig: {
    sidebar: [
      '/',
      '/page1',
      '/page2',
      [
        '/page3',
        'Custom link page'
      ]
    ]
  },
  title: 'md-element-admin-template',
  base: '/'
}