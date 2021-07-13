import { ReactSnippet } from '@/src/docs/common/snippets';
import { FileIcon, FolderIcon, JsIcon } from '@/src/components/icons/icons';

const V8ReactSecondSection = () => (
  <section className="mb-12">
    <h2 className="text-2xl font-medium">File Structure explained</h2>
    <p className="mt-5">
      We will focus on<span className="px-1 font-semibold">dashboard</span>
      folder and its
      <strong className="px-1 font-semibold">subfolders</strong>which contain
      all the logic.
    </p>

    <div className="mb-12 mt-5">
      <div className="flex">
        <FolderIcon /> <strong className="px-1">provider</strong>
      </div>
      <div className="flex flex-wrap mt-4 pl-6 md:flex-nowrap">
        <JsIcon className="w-7 h-7" />
        <span className="px-2 font-semibold">context.js</span> :
        <p className="pl-2">
          contains the
          <span className="px-1 font-semibold">DashboardProvider</span>
          component where all the dashboard logic is placed. this will then be
          reused in other components. it handles the closing of the sidenav when
          the route changes or on click outside.
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <JsIcon className="w-5 h-5" />
        <span className="px-2 font-semibold">overlay.js</span> :
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
        <span className="px-2 font-semibold">icons</span> :
        <p className="pl-1">
          As each<span className="px-1 font-semibold">sidenav-section</span> has
          an icon, this sub-folder contains the icons of each sidenav-section.
          You don't need this folder if you are using a package for icons such
          as
          <span className="px-1 font-semibold">react-icons</span>,
          <span className="px-1 font-semibold">font-awesome</span>
          or other
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <JsIcon /> <span className="px-2 font-semibold">accordion.js</span> :
        <p className="pl-1">
          contains the<span className="px-1 font-semibold">Accordion</span>
          component which is used to toggle each section of sidenav.
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <JsIcon /> <span className="px-2 font-semibold">data.js</span> :
        <p className="pl-1">
          It's in this file that you will add routes for each sidenav-item. it
          is an array of objects.
        </p>
      </div>
      <div className="flex flex-wrap mt-8 pl-8">
        <div className="md:w-5/12">
          <ReactSnippet />
        </div>
        <ul className="pt-8 md:pl-4 md:pt-20">
          <li className="mb-2">
            <span className="px-1">section :</span> Name of the section
          </li>
          <li className="mb-2">
            <span className="px-1">icon :</span> the icon, imported from
            <strong className="px-1">icons</strong> folder or from your library
          </li>
          <li className="mb-2">
            <span className="px-1">title :</span> text that indicate the route
          </li>
          <li className="mb-2">
            <span className="px-1">link :</span> name of the route
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap mt-10 pl-6 md:flex-nowrap">
        <JsIcon /> <span className="px-2 font-semibold">header.js</span> :
        <p className="pl-1">
          The<span className="px-1 font-semibold">SidenavHeader</span>
          component contains the logo that is displayed on top of the sidenav
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <JsIcon /> <span className="px-2 font-semibold">items.js</span> :
        <p className="pl-1">
          This<span className="px-1 font-semibold">SidenavItems</span>
          component automatically generates each sidenav-item according to your
          routes coming from the
          <span className="px-1 font-semibold">data.js</span>file
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <JsIcon /> <span className="px-2 font-semibold">index.js</span> :
        <p className="pl-1">
          This <span className="px-1 font-semibold">Sidenavigation</span>
          component contains all the logic of the sidenav.
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <FileIcon />
        <span className="px-1 font-semibold">index.module.css</span> :
        <p className="pl-1">
          This style sheet is used to make the scrollbar invisible for the
          sidenav
        </p>
      </div>
    </div>

    <div>
      <div className="flex mt-8">
        <FolderIcon /> <strong className="px-1">topnavigation</strong>
      </div>
      <div className="flex flex-wrap mt-4 pl-6 md:flex-nowrap">
        <JsIcon /> <span className="px-2 font-semibold">index.js</span> :
        <p className="pl-1">
          Contains the
          <span className="px-1 font-semibold">Topnavigation</span>component.
          You can customize it or replace it with your own navbar but don't
          forget to add a button to toggle sidenav on mobile
        </p>
      </div>
    </div>

    <div>
      <div className="flex flex-wrap mt-8 md:flex-nowrap">
        <JsIcon /> <strong className="px-1">layout.js :</strong> Contains the
        <span className="px-1 font-semibold">DashboardLayout</span>
        component used as the layout of the application
      </div>
    </div>
  </section>
);

export default V8ReactSecondSection;
