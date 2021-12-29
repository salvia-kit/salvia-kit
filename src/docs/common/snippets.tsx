const ReactSnippet = () => (
  <pre className="dark:bg-[#1B2A31] px-4 py-1 max-w-full font-mono text-sm bg-gray-100 border rounded overflow-x-auto">
    {`[ 
  {
    section : 'Apps',
    content: [
      {
        title: 'All Apps',
        icon: <AllAppsIcon />,
        link: '/admin/all-apps'
      },
      {
        title: 'Updates',
        icon: <UpdatesIcon/>,
        link: '/admin/updates'
      },
    ]
  },
]
`}
  </pre>
);

const ReactSnippetV8 = () => (
  <pre className="dark:bg-[#1B2A31] px-4 py-1 max-w-full font-mono text-sm bg-gray-100 border rounded overflow-x-auto">
    {`[ 
  {
    section : 'Apps',
    icon: <AllAppsIcon />,
    content: [
      {
        title: 'All Apps',
        link: '/admin/all-apps'
      },
      {
        title: 'Updates',
        link: '/admin/updates'
      },
    ]
  },
]
`}
  </pre>
);

const ReactSnippetV9 = () => (
  <pre className="dark:bg-[#1B2A31] px-4 py-1 max-w-full font-mono text-sm bg-gray-100 border rounded overflow-x-auto">
    {`[ 
  {
    section : 'Messages',
    icon: <MessagesIcon />,
    content: [
      {
        title: 'Archived',
        link: '/messages/archived'
      },
      {
        title: 'Unread',
        link: '/messages/unread'
      },
    ]
  },
]
`}
  </pre>
);

const ReactSnippetShort = () => (
  <pre className="dark:bg-[#1B2A31] px-4 py-1 max-w-full font-mono text-sm bg-gray-100 border rounded overflow-x-auto">
    {`[ 
  {
    title: 'All Apps',
    icon: <AllAppsIcon />,
    link: '/admin/all-apps'
  },
  {
    title: 'Updates',
    icon: <UpdatesIcon/>,
    link: '/admin/updates'
  },
]
`}
  </pre>
);

const VueSnippet = () => (
  <pre className="dark:bg-[#1B2A31] px-4 py-4 max-w-full text-green-600 dark:text-white font-mono text-sm bg-gray-100 border rounded overflow-auto">
    {`<sidenav-items-section name="Apps">
  <sidenav-item title="All Apps" to="/">
    <all-apps-icon />
  </sidenav-item>
  
  <sidenav-item title="Updates" to="/admin/updates">
    <updates-icon />
  </sidenav-item>
</sidenav-items-section>
`}
  </pre>
);

const VueSnippetShort = () => (
  <pre className="dark:bg-[#1B2A31] px-4 py-4 max-w-full text-green-600 dark:text-white font-mono text-sm bg-gray-100 border rounded overflow-x-auto">
    {`<sidenav-item title="All Apps" to="/">
    <all-apps-icon />
</sidenav-item>
  
<sidenav-item title="Updates" to="/admin/updates">
  <updates-icon />
</sidenav-item>
`}
  </pre>
);

const VueSnippetAccordion = () => (
  <pre className="dark:bg-[#1B2A31] px-4 py-4 max-w-full text-green-600 dark:text-white font-mono text-sm bg-gray-100 border rounded overflow-x-auto">
    {`    <Accordion>
      <template #item>
        <document-icon /> <span class="pl-3">Documents</span>
      </template>
      <template #panel>
        <sidenav-item title="Taxes" to="/documents/taxes" />
        <sidenav-item title="Travel" to="/documents/travel" />
        <sidenav-item title="Insurance" to="/documents/insurance" />
      </template>
    </Accordion>
`}
  </pre>
);

export {
  ReactSnippet,
  ReactSnippetShort,
  VueSnippet,
  VueSnippetShort,
  VueSnippetAccordion,
  ReactSnippetV9,
  ReactSnippetV8,
};
