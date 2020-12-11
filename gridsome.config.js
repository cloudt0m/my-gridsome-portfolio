// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'A Portfolio of Homeway',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post', // Required
        baseDir: './blog', // Where .md files are located
        pathPrefix: '/blog', // Add route prefix. Optional
        template: './src/templates/PostTemplate.vue', // Optional
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Work', // Required
        baseDir: './works', // Where .md files are located
        pathPrefix: '/works', // Add route prefix. Optional
        template: './src/templates/WorkTemplate.vue', // Optional
      },
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        searchFields: ['title', 'tags', 'summary'],
        collections: [
          {
            typeName: 'Post',
            indexName: 'Post',
            fields: ['title', 'summary', 'tags'],
          },
          {
            typeName: 'Work',
            indexName: 'Work',
            fields: ['title', 'summary'],
          },
        ],
      },
    },
    {
      use: 'gridsome-plugin-i18n',
      options: {
        locales: ['tw', 'en'],
        defaultLocale: 'tw',
        messages: {},
      },
    },
  ],
  templates: {
    Tag: '/tag/:id',
  },
};
