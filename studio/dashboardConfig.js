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
                  buildHookId: '5d0cc6a45f34c2ca7550b28e',
                  title: 'Sanity Studio',
                  name: 'moderadio-net-studio',
                  apiId: 'cb45b94b-1b29-4c22-abb1-bc5cb37a0ab0'
                },
                {
                  buildHookId: '5d0cc6a4bc165959fbbb7606',
                  title: 'Landing pages Website',
                  name: 'moderadio-net',
                  apiId: '93efb77d-8fbe-46c9-8903-d16d761ef930'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hjbrandt/moderadio-net',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://moderadio-net.netlify.com', category: 'apps'}
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
