export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ce6dcc5416da8419c479596',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-cpcuvpzd',
                  apiId: 'c021a052-bafb-4990-a6ee-b2656d229b35'
                },
                {
                  buildHookId: '5ce6dcc57af67b2fb1c0a2fa',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-hina2aw2',
                  apiId: 'd217d5e7-bb53-4e3b-a0c0-1d6c6db74c10'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AWolf81/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-hina2aw2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
