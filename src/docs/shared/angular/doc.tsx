import { DocType } from '@/utils/globalTypes';
import FeaturesSection from '@/docs/common/features';
import { AngularSnippet } from '@/docs/common/snippets';
import { FolderIcon, AngularIcon } from '@/components/icons/others';

export function AngularDoc({ snippet, version }: DocType) {
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
            <FolderIcon className="h-6 w-6" />
            <span className="pl-2">icons</span>
          </div>
          <div className="mb-3 flex pl-11">
            <FolderIcon className="h-6 w-6" />
            <span className="pl-2">sidebar</span>
          </div>

          {version === 8 && (
            <div className="mb-3 flex pl-16">
              <AngularIcon />
              <span className="pl-2">collapse</span>
            </div>
          )}

          <div className="mb-3 flex pl-16">
            <AngularIcon />
            <span className="pl-2">sidebar</span>
          </div>
          <div className="mb-3 flex pl-16">
            <AngularIcon />
            <span className="pl-2">sidebar-header</span>
          </div>
          <div className="mb-3 flex pl-16">
            <AngularIcon />
            <span className="pl-2">sidebar-item</span>
          </div>

          {snippet === 'long' && (
            <div className="mb-3 flex pl-16">
              <AngularIcon />
              <span className="pl-2">sidebar-item-section</span>
            </div>
          )}

          <div className="mb-3 flex pl-16">
            <AngularIcon />
            <span className="pl-2">sidebar-items</span>
          </div>
          <div className="mb-3 flex pl-11">
            <AngularIcon />
            <span className="pl-2">layout</span>
          </div>
          <div className="mb-3 flex pl-11">
            <AngularIcon />
            <span className="pl-2">overlay</span>
          </div>
          <div className="mb-3 flex pl-11">
            <AngularIcon />
            <span className="pl-2">top-bar</span>
          </div>
          <div className="mb-3 flex pl-11">
            <AngularIcon color="yellow" />
            <span className="pl-2">dashboard.service.ts</span>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium">File Structure explained</h2>
        <div className="mb-8 mt-4">
          <div>
            <div className="flex mb-4">
              <FolderIcon />
              <strong className="px-1">icons</strong> :
              <p className="pl-1">
                Icons used for each sidebar-item. You don't need this folder if
                you can provide your own icons.
              </p>
            </div>
          </div>
          <div className="flex">
            <FolderIcon />
            <strong className="px-1">sidebar</strong>
          </div>

          {version === 8 && (
            <div className="mt-4 flex flex-wrap pl-6 md:flex-nowrap">
              <AngularIcon />
              <span className="px-2 font-medium">collapse</span> :
              <p className="pl-1">used to toggle each sidebar section</p>
            </div>
          )}

          <div className="mt-4 flex flex-wrap pl-6 md:flex-nowrap">
            <AngularIcon />
            <span className="px-2 font-medium">sidebar</span> :
            <p className="pl-1">responsable of the sidebar.</p>
            <p className="pl-1">
              compose <strong>sidebar-header</strong> and
              <strong>sidebar-items</strong> components.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
            <AngularIcon />
            <span className="px-2 font-medium">sidebar-header</span>:
            <p className="pl-1">
              contains the logo displayed on top of the sidebar
            </p>
          </div>
          <div className="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
            <AngularIcon />
            <span className="px-2 font-medium">sidebar-item</span> :
            <p className="pl-1">represents each sidebar-item of the sidebar.</p>
          </div>

          {snippet === 'long' && (
            <div className="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
              <AngularIcon />
              <span className="px-2 font-medium">sidebar-item-section</span> :
              <p className="pl-1">represents each section of sidebar-items</p>
            </div>
          )}

          <div className="mt-6 flex flex-wrap pl-6 md:flex-nowrap">
            <AngularIcon />
            <span className="px-2 font-medium">sidebar-items</span> :
            <p className="pl-1">compose many sidebar-item components</p>
          </div>
          <div className="mt-8 flex flex-wrap pl-8">
            <div>
              <AngularSnippet type={snippet} />
            </div>
          </div>
        </div>

        <div>
          <div className="mt-8 flex flex-wrap md:flex-nowrap">
            <AngularIcon />
            <span className="px-1 font-medium">layout :</span>
            contains the
            <strong className="px-1">dashboard-layout</strong>
            component used as the layout of the application
          </div>
        </div>

        <div>
          <div className="mt-8 flex flex-wrap md:flex-nowrap">
            <AngularIcon />
            <span className="px-1 font-medium">overlay :</span>
            displays an overlay that will only be visible on small screens to
            emphasize the focus on sidebar when it is open. it's also used to
            close sidebar on click outside
          </div>
        </div>

        <div>
          <div className="mt-8 flex flex-wrap md:flex-nowrap">
            <AngularIcon />
            <span className="px-1 font-medium">top-bar :</span>
            You can customize it or replace it with your own TopBar but don't
            forget to add a button to toggle sidebar on mobile
          </div>
        </div>

        <div className="mt-8 flex flex-wrap md:flex-nowrap">
          <AngularIcon color="yellow" />
          <span className="pl-2 pr-1 font-medium">dashboard.service.ts</span> :
          <p className="pl-1">
            where all states for handling opening and closing sidebar are
            defined
          </p>
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
          In the <strong> dashboard-layout</strong> component,
          <strong className="pl-1">sidebar</strong> component has as input
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
