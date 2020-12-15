// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.createPages(async ({ graphql, createPage }) => {
    const result = await graphql(`
      {
        allWork {
          edges {
            node {
              id
              path
              lang
            }
          }
        }
      }
    `);

    result.data.allWork.edges.forEach((edge, i, edges) => {
      const sameLanguageEdges = edges.filter(
        (e) => e.node.lang == edge.node.lang
      );
      const index = sameLanguageEdges.indexOf(edge);
      const prev = sameLanguageEdges[index - 1];
      const next = sameLanguageEdges[index + 1];

      createPage({
        path: edge.node.path,
        component: './src/templates/WorkTemplate.vue',
        queryVariables: {
          id: edge.node.id,
          prevId: prev ? prev.node.id : null,
          nextId: next ? next.node.id : null,
        },
      });
    });
  });
};
