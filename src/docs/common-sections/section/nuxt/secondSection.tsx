import {
  VueSnippet,
  VueSnippetShort,
} from '@/src/docs/common-sections/snippets';
import { VueIcon, FolderIcon } from '@/src/components/icons/icons';

const NuxtCommonSecondSectionV1AndV7 = () => (
  <section className="mb-12">
    <h2 className="text-2xl font-medium">File Structure explained</h2>
    <p className="mt-5">
      We will focus on <span className="font-semibold">dashboard</span> folder
      and its <span className="font-semibold">subfolders</span> which contain
      all the logic.
    </p>

    <div className="mb-12 mt-5">
      <div className="flex">
        <FolderIcon />
        <strong className="px-1">provider</strong>
      </div>
      <div className="flex flex-wrap mt-4 pl-6 md:flex-nowrap">
        <VueIcon className="w-7 h-7" />
        <span className="px-2 font-semibold">Provider.vue</span> :
        <p className="pl-2">
          contains the
          <span className="pl-1 font-semibold">dashboard-provider</span>{' '}
          component where all the dashboard logic is placed. this will then be
          reused in other components. it handles the closing of the sidenav when
          the route changes or on click outside.
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <VueIcon />
        <span className="px-2 font-semibold">Overlay.vue</span> :
        <p className="pl-2">
          displays an overlay that will only be visible on small screens to
          emphasize the focus on the sidenav when it is open
        </p>
      </div>
    </div>

    <div className="mb-8">
      <div className="flex">
        <FolderIcon />
        <strong className="px-1">sidenavigation</strong>
      </div>
      <div className="flex flex-wrap mt-4 pl-6 md:flex-nowrap">
        <FolderIcon className="w-7 h-7" />
        <span className="px-2 font-semibold">icons</span> :
        <p className="pl-1">
          As each <span className="font-semibold">sidenav-item</span> has an
          icon, this sub-folder contains the icons of each sidenav-item. You
          don't need this folder if you are using a package for icons such as
          <span className="px-1 font-semibold">font-awesome</span>
          or other
        </p>
      </div>
      <div className="flex flex-wrap mt-10 pl-6 md:flex-nowrap">
        <VueIcon />
        <span className="px-2 font-semibold">Header.vue</span> :
        <p className="pl-1">
          The <span className="font-semibold"> sidenav-header</span> component
          contains the logo that is displayed on top of the sidenav
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <VueIcon />
        <span className="px-2 font-semibold">Item.vue</span> :
        <p className="pl-1">
          Contains the <span className="font-semibold">sidenav-item</span>{' '}
          component which represents each item of the sidenav.
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <VueIcon />
        <span className="px-2 font-semibold">Section.vue</span> :
        <p className="pl-1">
          Contains the
          <strong className="px-1 font-semibold">sidenav-items-section</strong>
          component which represents each section of the sidenav.
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <VueIcon />
        <span className="px-2 font-semibold">Items.vue</span> :
        <p className="pl-1">
          This <span className="font-semibold">sidenav-items</span> component
          contains the
          <span className="font-semibold"> sidenav-items-section</span> and the
          <span className="pl-1 font-semibold"> sidenav-item</span> components
        </p>
      </div>
      <div className="flex flex-wrap mb-12 mt-8 pl-8">
        <div className="max-w-full overflow-x-auto lg:w-6/12">
          <VueSnippet />
        </div>
        <ul className="pt-8 lg:pl-4 lg:pt-0 lg:w-6/12">
          <li className="mb-2">
            <span className="px-1 font-bold">Props</span>
          </li>
          <li className="mb-2">
            <span className="px-1 font-semibold">name :</span> name of the
            section
          </li>
          <li className="mb-2">
            <span className="px-1 font-semibold">title :</span> text that
            indicate the route
          </li>
          <li className="mb-2">
            <span className="px-1 font-semibold">to :</span> name of the route
          </li>
          <li className="mb-2">
            <span className="px-1 font-semibold">sidenav-item slot :</span> the
            icon, imported from
            <span className="px-1 font-semibold">icons</span> folder or from
            your library
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <VueIcon />
        <span className="px-2 font-semibold">Index.vue</span> :
        <p className="pl-1">
          This <span className="font-semibold">side-navigation</span> component
          contains all the logic of the sidenav.
        </p>
      </div>
    </div>

    <div>
      <div className="flex mt-8">
        <FolderIcon />
        <strong className="px-1">topnavigation</strong>
      </div>
      <div className="flex flex-wrap mt-4 pl-6 md:flex-nowrap">
        <VueIcon />
        <span className="px-2 font-semibold">Index.vue</span> :
        <p className="pl-1">
          Contains the
          <span className="font-semibold"> top-navigation</span> component. You
          can customize it or replace it with your own navbar but don't forget
          to add a button to toggle sidenav on mobile
        </p>
      </div>
    </div>

    <div>
      <div className="flex flex-wrap mt-8 md:flex-nowrap">
        <VueIcon />
        <strong className="px-1">Layout.vue :</strong> Contains the
        <span className="px-1 font-semibold">dashboard-layout</span> component
        used as the layout of the application
      </div>
    </div>
  </section>
);

const NuxtCommonSecondSectionV3AndV4AndV6 = () => (
  <section className="mb-12">
    <h2 className="text-2xl font-medium">File Structure explained</h2>
    <p className="mt-5">
      We will focus on <span className="font-semibold">dashboard</span> folder
      and its <span className="font-semibold">subfolders</span> which contain
      all the logic.
    </p>

    <div className="mb-12 mt-5">
      <div className="flex">
        <FolderIcon />
        <strong className="px-1">provider</strong>
      </div>
      <div className="flex flex-wrap mt-4 pl-6 md:flex-nowrap">
        <VueIcon className="w-7 h-7" />
        <span className="px-2 font-semibold">Provider.vue</span> :
        <p className="pl-2">
          contains the
          <span className="pl-1 font-semibold">dashboard-provider</span>{' '}
          component where all the dashboard logic is placed. this will then be
          reused in other components. it handles the closing of the sidenav when
          the route changes or on click outside.
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <VueIcon />
        <span className="px-2 font-semibold">Overlay.vue</span> :
        <p className="pl-2">
          displays an overlay that will only be visible on small screens to
          emphasize the focus on the sidenav when it is open
        </p>
      </div>
    </div>

    <div className="mb-8">
      <div className="flex">
        <FolderIcon />
        <strong className="px-1">sidenavigation</strong>
      </div>
      <div className="flex flex-wrap mt-4 pl-6 md:flex-nowrap">
        <FolderIcon className="w-7 h-7" />
        <span className="px-2 font-semibold">icons</span> :
        <p className="pl-1">
          As each <span className="font-semibold">sidenav-item</span> has an
          icon, this sub-folder contains the icons of each sidenav-item. You
          don't need this folder if you are using a package for icons such as
          <span className="px-1 font-semibold">font-awesome</span>
          or other
        </p>
      </div>
      <div className="flex flex-wrap mt-10 pl-6 md:flex-nowrap">
        <VueIcon />
        <span className="px-2 font-semibold">Header.vue</span> :
        <p className="pl-1">
          The <span className="font-semibold"> sidenav-header</span> component
          contains the logo that is displayed on top of the sidenav
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <VueIcon />
        <span className="px-2 font-semibold">Item.vue</span> :
        <p className="pl-1">
          Contains the <span className="font-semibold">sidenav-item</span>{' '}
          component which represents each item of the sidenav.
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <VueIcon />
        <span className="px-2 font-semibold">Items.vue</span> :
        <p className="pl-1">
          This <span className="font-semibold">sidenav-items</span> component
          contains the
          <span className="font-semibold"> sidenav-item</span> component
        </p>
      </div>
      <div className="flex flex-wrap mb-12 mt-8 pl-8">
        <div className="max-w-full overflow-x-auto lg:w-6/12">
          <VueSnippetShort />
        </div>
        <ul className="pt-8 lg:pl-4 lg:pt-0 lg:w-6/12">
          <li className="mb-2">
            <span className="px-1 font-bold">Props</span>
          </li>
          <li className="mb-2">
            <span className="px-1 font-semibold">title :</span> text that
            indicate the route
          </li>
          <li className="mb-2">
            <span className="px-1 font-semibold">to :</span> name of the route
          </li>
          <li className="mb-2">
            <span className="px-1 font-semibold">sidenav-item slot :</span> the
            icon, imported from
            <span className="px-1 font-semibold">icons</span> folder or from
            your library
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <VueIcon />
        <span className="px-2 font-semibold">Index.vue</span> :
        <p className="pl-1">
          This <span className="font-semibold">side-navigation</span> component
          contains all the logic of the sidenav.
        </p>
      </div>
    </div>

    <div>
      <div className="flex mt-8">
        <FolderIcon />
        <strong className="px-1">topnavigation</strong>
      </div>
      <div className="flex flex-wrap mt-4 pl-6 md:flex-nowrap">
        <VueIcon />
        <span className="px-2 font-semibold">Index.vue</span> :
        <p className="pl-1">
          Contains the
          <span className="font-semibold"> top-navigation</span> component. You
          can customize it or replace it with your own navbar but don't forget
          to add a button to toggle sidenav on mobile
        </p>
      </div>
    </div>

    <div>
      <div className="flex flex-wrap mt-8 md:flex-nowrap">
        <VueIcon />
        <strong className="px-1">Layout.vue :</strong> Contains the
        <span className="px-1 font-semibold">dashboard-layout</span> component
        used as the layout of the application
      </div>
    </div>
  </section>
);

export { NuxtCommonSecondSectionV1AndV7, NuxtCommonSecondSectionV3AndV4AndV6 };
