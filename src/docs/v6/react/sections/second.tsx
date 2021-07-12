import { ReactSnippetShort } from '@/src/docs/common/snippets';
import { FileIcon, FolderIcon, JsIcon } from '@/src/components/icons';

const V6ReactSecondSection = () => (
  <section className="mb-12 px-4 md:px-8">
    <h2 className="text-2xl font-medium">File Structure explained</h2>
    <p className="mt-5">
      We will focus on <strong>dashboard</strong> folder and its
      <strong className="pl-1">subfolders</strong> which contain all the logic.
    </p>

    <div className="mb-12 mt-5">
      <div className="flex">
        <FolderIcon /> <strong className="px-1">provider</strong>
      </div>
      <div className="flex flex-wrap mt-4 pl-6 md:flex-nowrap">
        <JsIcon className="w-7 h-7" />
        <span className="px-2 font-medium">context.js</span> :
        <p className="pl-2">
          contains the
          <strong className="px-1">DashboardProvider</strong>component where all
          the dashboard logic is placed. this will then be reused in other
          components. it handles the closing of the sidenav when the route
          changes or on click outside.
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <JsIcon className="w-5 h-5" />
        <span className="px-2 font-medium">overlay.js</span> :
        <p className="pl-2">
          displays an overlay that will only be visible on small screens to
          emphasize the focus on the sidenav when it is open
        </p>
      </div>
    </div>

    <div className="mb-8">
      <div className="flex">
        <FolderIcon /> <strong className="px-1">sidenavigation</strong>
      </div>
      <div className="flex flex-wrap mt-4 pl-6 md:flex-nowrap">
        <FolderIcon className="w-7 h-7" />
        <span className="px-2 font-medium">icons</span> :
        <p className="pl-1">
          As each <strong>sidenav-item</strong> has an icon, this sub-folder
          contains the icons of each sidenav-item. You don't need this folder if
          you are using a package for icons such as
          <strong className="px-1">react-icons</strong>,
          <strong className="px-1">font-awesome</strong>
          or other
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <JsIcon /> <span className="px-2 font-medium">data.js</span> :
        <p className="pl-1">
          It's in this file that you will add routes for each sidenav-item. it
          is an array of objects.
        </p>
      </div>
      <div className="flex flex-wrap mt-8 pl-8">
        <div className="md:w-72">
          <ReactSnippetShort />
        </div>
        <ul className="pt-8 md:pl-4 md:pt-12">
          <li className="mb-2">
            <span className="px-1">title :</span> text that indicate the route
          </li>
          <li className="mb-2">
            <span className="px-1">icon :</span> the icon, imported from
            <strong className="px-1">icons</strong> folder or from your library
          </li>
          <li className="mb-2">
            <span className="px-1">link :</span> name of the route
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap mt-10 pl-6 md:flex-nowrap">
        <JsIcon /> <span className="px-2 font-medium">header.js</span> :
        <p className="pl-1">
          The<strong className="px-1">SidenavHeader</strong>component contains
          the logo that is displayed on top of the sidenav
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <JsIcon /> <span className="px-2 font-medium">items.js</span> :
        <p className="pl-1">
          This<strong className="px-1">SidenavItems</strong>component
          automatically generates each sidenav-item according to your routes
          coming from the
          <strong className="px-1">data.js</strong>file
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <JsIcon /> <span className="px-2 font-medium">index.js</span> :
        <p className="pl-1">
          This <strong>Sidenavigation</strong> component contains all the logic
          of the sidenav.
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <FileIcon />
        <span className="px-2 font-medium">index.module.css</span> :
        <p className="pl-1">
          This style sheet is used to make the scrollbar invisible for the
          sidenav.
        </p>
      </div>
    </div>

    <div>
      <div className="flex mt-8">
        <FolderIcon /> <strong className="px-1">topnavigation</strong>
      </div>
      <div className="flex flex-wrap mt-4 pl-6 md:flex-nowrap">
        <JsIcon /> <span className="px-2 font-medium">index.js</span> :
        <p className="pl-1">
          Contains the
          <strong className="px-1">Topnavigation</strong>component. You can
          customize it or replace it with your own navbar but don't forget to
          add a button to toggle sidenav on mobile
        </p>
      </div>
    </div>

    <div>
      <div className="flex flex-wrap mt-8 md:flex-nowrap">
        <JsIcon /> <strong className="px-1">layout.js :</strong> Contains the
        <strong className="px-1">DashboardLayout</strong>
        component used as the layout of the application
      </div>
    </div>
  </section>
);

export default V6ReactSecondSection;
