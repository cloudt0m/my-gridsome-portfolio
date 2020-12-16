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
        pathPrefix: '/blog',
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
        pathPrefix: '/works',
        template: './src/templates/WorkTemplate.vue', // Optional
      },
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        autoSetup: false,
        searchFields: ['title', 'tags', 'summary'],
        collections: [
          {
            typeName: 'Post',
            indexName: 'Post',
            fields: ['title', 'summary', 'tags', 'lang'],
          },
          {
            typeName: 'Work',
            indexName: 'Work',
            fields: ['title', 'summary', 'lang'],
          },
        ],
        flexsearch: {
          encode: false,
          tokenize: function(str) {
            const chineseStringArray = str
              .split('')
              .filter((char) => /\p{Script=Han}/u.test(char));
            const englishStringArray = str
              .toLowerCase()
              .match(/\p{Script=Han}+|\p{Script=Latin}+/gu);
            if (str.match(/\p{Script=Han}/u)) {
              return [
                ...chineseStringArray,
                ...(englishStringArray ? englishStringArray : []),
              ];
            } else {
              return englishStringArray;
            }
          },
        },
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
