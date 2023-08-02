import { DocType } from '@/utils/globalTypes';
import SvelteIcon from '@/components/icons/SvelteIcon';
import FeaturesSection from '@/docs/common/features';
import { SolidSnippet } from '@/docs/common/snippets';
import { TSIcon, FolderIcon } from '@/components/icons/others';

export function SvelteDoc({ techno, snippet, version }: DocType) {
  return (
    <div className="mt-12 max-w-full">
      <FeaturesSection />

      <section className="mb-12">
        <h2 className="text-2xl font-medium">File Structure</h2>
        <div className="pl-2 mt-3">
          <div className="mb-3 flex pl-5">
            <FolderIcon className="h-6 w-6" />
            <span className="pl-2">dashboard</span>
          </div>
          <div className="mb-3 flex pl-11">
            <FolderIcon />
            <span className="pl-2">sidebar</span>
          </div>
          <div className="mb-3 flex pl-16">
            <FolderIcon />
            <span className="pl-2">icons</span>
          </div>
          <div className="mb-3 flex pl-16">
            <TSIcon />
            <span className="pl-2">data.ts</span>
          </div>

          {version === 8 && (
            <div className="mb-3 flex pl-16">
              <SvelteIcon />
              <span className="pl-2">Collapse.svelte</span>
            </div>
          )}

          <div className="mb-3 flex pl-16">
            <SvelteIcon />
            <span className="pl-2">Sidebar.svelte</span>
          </div>

          {version !== 10 && (
            <div className="mb-3 flex pl-16">
              <SvelteIcon />
              <span className="pl-2">SidebarHeader.svelte</span>
            </div>
          )}

          <div className="mb-3 flex pl-16">
            <SvelteIcon />
            <span className="pl-2">SidebarItems.svelte</span>
          </div>
          <div className="mb-3 flex pl-11">
            <SvelteIcon />
            <span className="pl-2">Layout.svelte</span>
          </div>
          <div className="mb-3 flex pl-11">
            <SvelteIcon />
            <span className="pl-2">Overlay.svelte</span>
          </div>
          <div className="mb-3 flex pl-11">
            <SvelteIcon />
            <span className="pl-2">TopBar.svelte</span>
          </div>
          <div className="mb-3 flex pl-11">
            <TSIcon />
            <span className="pl-2">store.ts</span>
          </div>

          {techno === 'solid' && (
            <div className="mb-3 flex pl-11">
              <TSIcon />
              <span className="pl-3">store.ts</span>
            </div>
          )}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium">File Structure explained</h2>

        <div className="mb-8 mt-4">
          <div className="flex">
            <FolderIcon /> <strong className="px-1">sidebar</strong>
          </div>
          <div className="mt-4 flex flex-wrap pl-6 md:flex-nowrap">
            <FolderIcon className="h-7 w-7" />
            <span className="px-2 font-medium">icons</span> :
            <p className="pl-1">
              Icons used for each sidebar-item. You don't need this folder if
              you can provide your own icons.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
            <TSIcon /> <span className="px-2 font-medium">data.ts</span> :
            <p className="pl-1">
              It's in this file that you will add routes for each sidebar-item.
              it is an array of objects.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap pl-8">
            <div className="md:w-4/12">
              <SolidSnippet type={snippet} />
            </div>
            <ul className="pt-8 md:pl-4 md:pt-20">
              {snippet === 'long' && (
                <li className="mb-2">
                  <span className="px-1">section :</span> Name of the section
                </li>
              )}
              <li className="mb-2">
                <span className="px-1">title :</span> Label for the route
              </li>
              <li className="mb-2">
                <span className="px-1">icon :</span> icon used, imported from
                <strong className="px-1">icons</strong> folder or from your
                library
              </li>
            </ul>
          </div>

          {version === 8 && (
            <div className="mt-10 flex flex-wrap pl-6 md:flex-nowrap">
              <SvelteIcon />{' '}
              <span className="px-2 font-medium">Collapse.svelte</span> :
              <p className="pl-1">used to toggle each sidebar section</p>
            </div>
          )}

          <div className="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
            <SvelteIcon />{' '}
            <span className="px-2 font-medium">Sidebar.svelte</span> :
            <p className="pl-1">responsable of the sidebar.</p>
            <p className="pl-1">
              compose <strong>SidebarHeader</strong> and{' '}
              <strong>SidebarItems</strong> components.
            </p>
          </div>

          {version !== 10 && (
            <div className="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
              <SvelteIcon />{' '}
              <span className="px-2 font-medium">SidebarHeader.svelte</span> :
              <p className="pl-1">
                contains the logo displayed on top of the sidebar
              </p>
            </div>
          )}

          <div className="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
            <SvelteIcon />{' '}
            <span className="px-2 font-medium">SidebarItems.svelte</span> :
            <p className="pl-1">
              automatically generates each sidebar-item according to your routes
              defined in
              <strong className="px-1">data.ts</strong>
            </p>
          </div>
        </div>

        <div>
          <div className="mt-8 flex flex-wrap md:flex-nowrap">
            <SvelteIcon />{' '}
            <span className="px-1 font-medium">Layout.svelte :</span> contains
            the
            <strong className="px-1">DashboardLayout</strong>
            component used as the layout of the application
          </div>
        </div>

        <div>
          <div className="mt-8 flex flex-wrap md:flex-nowrap">
            <SvelteIcon />{' '}
            <span className="px-1 font-medium">Overlay.svelte :</span> displays
            an overlay that will only be visible on small screens to emphasize
            the focus on sidebar when it is open. it's also used to close
            sidebar on click outside
          </div>
        </div>

        <div>
          <div className="mt-8 flex flex-wrap md:flex-nowrap">
            <SvelteIcon />{' '}
            <span className="px-1 font-medium">TopBar.svelte :</span>
            You can customize it or replace it with your own TopBar but don't
            forget to add a button to toggle sidebar on mobile
          </div>
        </div>

        <div className="mt-8 flex flex-wrap md:flex-nowrap">
          <TSIcon className="h-5 w-5" />
          <span className="pl-3 font-medium">store.ts</span> :
          <p className="pl-1">
            where all states for handling opening and closing sidebar are
            defined
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium">Export</h2>
        <p className="mt-4">
          As there is no vendor lock-in, if you already have a dashboard, you
          can copy the
          <strong className="px-1">dashboard</strong>folder into your project
        </p>
        <div className="mt-8">
          <ul className="mt-4 list-disc pl-6">
            <li className="mb-3">
              Add your routes in the
              <strong className="px-1">dashboard/sidebar/data.ts</strong>
              file
            </li>
            <li className="mb-3">
              Replace your layout by theXp
              <strong className="px-1">DashboardLayout</strong>component
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium">Customization</h2>
        <p className="mt-5">
          You can customize everything according to your preferences if it
          doesn't suit you. What we have done is just provide a solid structure
          for better scalability and readability of the code.
        </p>
        <p className="mt-5">
          The sidebar scrollbar is hidden by default but you can still scroll
          with the keyboards if you have several sidebar-items.
        </p>
        <p className="mt-5">
          In the <strong> dashboard/Layout.svelte</strong> file,
          <strong className="pl-1">Sidebar</strong> component has as prop
          <strong className="pl-1">mobileOrientation</strong>, which indicates
          the orientation of the sidebar on small devices (viewport {'<'}{' '}
          1024px).
        </p>
        <p className="pt-5">That prop can have two possible values :</p>
        <ul className="mt-4 list-disc pl-6">
          <li className="mb-3">
            <strong>start :</strong> sidebar will be aligned to the left
          </li>
          <li>
            <strong>end :</strong> sidebar will be aligned to the right
          </li>
        </ul>
      </section>
    </div>
  );
}
