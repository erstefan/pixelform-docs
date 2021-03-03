module.exports = {
  title: 'Pixelform',
  themeConfig: {
    sidebar: [
      {
        title: 'Getting started', // required
        path: '/', // optional, link of the title, which should be an absolute path and must exist
        // collapsable: false, // optional, defaults to true
        // sidebarDepth: 1, // optional, defaults to 1
        // children: ['/'],
      },
      {
        title: 'The basics', // required
        path: '/the-basics', // optional, link of the title, which should be an absolute path and must exist
      
      },
      {
        title: 'Digging deeper', // required
        path: '/digging-deeper', // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: [
            'validation',
            'styling',
            'upload',
            'email-templates',
            'spam-protection',
            'data-retention',
            'webhooks', 
            'file-storage',
            'code-editor',
        ],
      },
      {
        title: 'Integrations', // required
        path: '/', // optional, link of the title, which should be an absolute path and must exist
        collapsable: true, // optional, defaults to true
        sidebarDepth: 1, // optional, defaults to 1
        children: [
            'twilio',
            'google-tag-manager',
            'facebook-pixel',
            'drift',
            'crisp',
            'pure-chat',

            'google-analytics',
            'google-drive',
            'google-sheets',
        ],
      },
    ],
  },
}
