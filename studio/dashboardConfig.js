export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '615edf0b7fd6f300b5b135cd',
                  title: 'Sanity Studio',
                  name: 'musicbycara-sanity-nextjs-studio',
                  apiId: '391dc1f2-7bc6-4f53-a258-e9995c9b7f9e'
                },
                {
                  buildHookId: '615edf0b201e9200d19b0508',
                  title: 'Landing pages Website',
                  name: 'musicbycara-sanity-nextjs',
                  apiId: '04ff8096-885b-4c9f-88d3-7ca5aaec82f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Dawieking1/musicbycara-sanity-nextjs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://musicbycara-sanity-nextjs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
