export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5e89f23f5412ed8ec6133125',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-pmv4hqij',
                  apiId: 'c9c1b51c-553a-40e5-93a0-ad139d221263'
                },
                {
                  buildHookId: '5e89f23f5ab22f22c3277714',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-qtrjvvii',
                  apiId: '5357a56a-1652-460f-a01d-de8912de70cf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/scottyzen/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-qtrjvvii.netlify.com', category: 'apps'}
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
