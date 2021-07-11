const V1ReactSnippet = () => (
  <pre className="px-4 py-1 max-w-full text-blue-700 font-mono text-sm bg-gray-100 border rounded overflow-x-auto">
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

export default V1ReactSnippet;
