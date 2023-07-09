const ReactSnippet = ({ type }: { type?: 'long' | 'short' | 'special' }) => (
  <div>
    {type === 'long' && (
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
    )}

    {type === 'special' && (
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
    )}

    {type === 'short' && (
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
    )}
  </div>
);

const SolidSnippet = ({ type }: { type?: 'long' | 'short' | 'special' }) => (
  <div>
    {type === 'long' && (
      <pre className="dark:bg-[#1B2A31] px-4 py-1 max-w-full font-mono text-sm bg-gray-100 border rounded overflow-x-auto">
        {`[ 
  {
    section : 'Apps',
    content: [
      {
        title: 'All Apps',
        icon: AllAppsIcon,
        link: '/admin/all-apps'
      },
      {
        title: 'Updates',
        icon: UpdatesIcon,
        link: '/admin/updates'
      },
    ]
  },
]
`}
      </pre>
    )}

    {type === 'special' && (
      <pre className="dark:bg-[#1B2A31] px-4 py-1 max-w-full font-mono text-sm bg-gray-100 border rounded overflow-x-auto">
        {`[ 
  {
    section : 'Apps',
    icon: AllAppsIcon,
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
    )}

    {type === 'short' && (
      <pre className="dark:bg-[#1B2A31] px-4 py-1 max-w-full font-mono text-sm bg-gray-100 border rounded overflow-x-auto">
        {`[ 
  {
    title: 'All Apps',
    icon: AllAppsIcon,
    link: '/admin/all-apps'
  },
  {
    title: 'Updates',
    icon: UpdatesIcon,
    link: '/admin/updates'
  },
]
`}
      </pre>
    )}
  </div>
);

const VueSnippet = ({ type }: { type?: 'long' | 'short' | 'special' }) => (
  <div>
    {type === 'long' && (
      <pre className="dark:bg-[#1B2A31] px-4 py-4 max-w-full text-green-600 dark:text-white font-mono text-sm bg-gray-100 border rounded overflow-auto">
        {`   <SidebarItemSection name="Applications">
      <SidebarItem title="Users" to="/">
        <UsersIcon />
      </SidebarItem>
      <SidebarItem title="Medias" to="/admin/medias">
        <MediaIcon />
      </SidebarItem>
      <SidebarItem title="Contacts" to="/admin/contacts">
        <ContactIcon />
      </SidebarItem>
    </SidebarItemSection>
`}
      </pre>
    )}

    {type === 'short' && (
      <pre className="dark:bg-[#1B2A31] px-4 py-4 max-w-full text-green-600 dark:text-white font-mono text-sm bg-gray-100 border rounded overflow-x-auto">
        {`<SidebarItem title="Home" to="/">
      <HomeIcon />
    </SidebarItem>

    <SidebarItem title="Status" to="/admin/status">
      <StatusIcon />
    </SidebarItem>
`}
      </pre>
    )}

    {type === 'special' && (
      <pre className="dark:bg-[#1B2A31] px-4 py-4 max-w-full text-green-600 dark:text-white font-mono text-sm bg-gray-100 border rounded overflow-x-auto">
        {`<Collapse>
      <template #item>
        <DocIcon /> <span class="pl-3">Documents</span>
      </template>
      <template #panel>
        <SidebarItem title="Taxes" to="/documents/taxes" />
        <SidebarItem title="Travel" to="/documents/travel" />
        <SidebarItem title="Insurance" to="/documents/insurance" />
      </template>
    </Collapse>
`}
      </pre>
    )}
  </div>
);

const AngularSnippet = ({ type }: { type?: 'long' | 'short' | 'special' }) => (
  <div>
    {type === 'long' && (
      <pre className="dark:bg-[#1B2A31] px-4 py-4 max-w-full text-green-600 dark:text-white font-mono text-sm bg-gray-100 border rounded overflow-auto">
        {`  <sidebar-item-section name="Applications">
    <sidebar-item title="Users" routerLink="/">
      <user-icon></user-icon>
    </sidebar-item>
    <sidebar-item title="Medias" routerLink="/admin/medias">
      <media-icon></media-icon>
    </sidebar-item>
    <sidebar-item title="Contacts" routerLink="/admin/contacts">
      <contact-icon></contact-icon>
    </sidebar-item>
  </sidebar-item-section>
`}
      </pre>
    )}

    {type === 'short' && (
      <pre className="dark:bg-[#1B2A31] px-4 py-4 max-w-full text-green-600 dark:text-white font-mono text-sm bg-gray-100 border rounded overflow-x-auto">
        {`  <sidebar-item title="Home" routerLink="/">
    <home-icon></home-icon>
  </sidebar-item>

  <sidebar-item title="Status" routerLink="/admin/status">
    <status-icon></status-icon>
  </sidebar-item>
`}
      </pre>
    )}

    {type === 'special' && (
      <pre className="dark:bg-[#1B2A31] px-4 py-4 max-w-full text-green-600 dark:text-white font-mono text-sm bg-gray-100 border rounded overflow-x-auto">
        {`<collapse>
    <div item class="flex">
      <doc-icon></doc-icon> <span class="pl-3">Documents</span>
    </div>
    <div panel>
      <sidebar-item title="Taxes" routerLink="/documents/taxes" />
      <sidebar-item title="Travel" routerLink="/documents/travel" />
      <sidebar-item title="Insurance" routerLink="/documents/insurance" />
    </div>
  </collapse>
`}
      </pre>
    )}
  </div>
);

export { ReactSnippet, VueSnippet, SolidSnippet, AngularSnippet };
