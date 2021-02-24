export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60367a3f1f396637bd34920f',
                  title: 'Sanity Studio',
                  name: 'elk-website-kitchensink-studio',
                  apiId: 'dc733bfa-04cf-47f6-b8c6-af2fc7c442ce'
                },
                {
                  buildHookId: '60367a3f1595b535bac7d6c7',
                  title: 'Blog Website',
                  name: 'elk-website-kitchensink',
                  apiId: 'b80be54a-7f4d-41c6-9f48-342a19aa67e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mgleeson/elk-website-kitchensink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://elk-website-kitchensink.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
