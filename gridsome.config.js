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
      use: '@gridsome/source-filesystem',
      options: {
        path: 'works/**/*.yaml',
        typeName: 'Work',
      },
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        searchFields: ['title', 'tags'],
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
  ],
  templates: {
    Tag: '/tag/:id',
  },
};
