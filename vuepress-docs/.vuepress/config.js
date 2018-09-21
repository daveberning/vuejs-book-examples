module.exports = {
  title: 'VuePress Test Site',
  locales: {
    '/': { lang: 'English' },
    '/fr/': {
      lang: 'Français',
      title: 'Le site de VuePrees Demo',
      description: 'Ceci est un site de documentation traduit en français.',
    },
  },
  themeConfig: {
    nav: [{ text: 'Hello', link: '/hello.html' }],
    sidebar: ['/', 'hello'],
    locales: {
      '/fr/': {
        sidebar: ['/fr/', '/fr/une'],
      },
    },
  },
};
