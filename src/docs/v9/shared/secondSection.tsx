import { ReactSnippetV9 } from '@/src/docs/common/snippets';
import { FileIcon, FolderIcon, JsIcon } from '@/src/components/icons/icons';

const V9NextReactSecondSection = () => (
  <section className="mb-12">
    <h2 className="text-2xl font-medium">File Structure explained</h2>
    <p className="mt-5">
      We will focus on<span className="px-1 font-medium">dashboard</span>
      folder and its
      <strong className="px-1 font-medium">subfolders</strong>which contain all
      the logic.
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
          <span className="px-1 font-medium">DashboardProvider</span>
          component where all the dashboard logic is placed. this will then be
          reused in other components. it handles the opening and closing of the
          modal. Also when the route changes.
        </p>
      </div>
    </div>

    <div className="mb-8">
      <div className="flex">
        <FolderIcon /> <strong className="px-1">office</strong>
      </div>
      <div className="flex flex-wrap mt-4 pl-6 md:flex-nowrap">
        <FolderIcon className="w-7 h-7" />
        <span className="px-2 font-medium">icons</span> :
        <p className="pl-1">
          As each<span className="px-1 font-medium">section</span> of data has
          an icon, this sub-folder contains the icons of each section. You don't
          need this folder if you are using a package for icons such as
          <span className="px-1 font-medium">react-icons</span>,
          <span className="px-1 font-medium">font-awesome</span>
          or other. it also contains a subfolder
          <span className="px-1 font-medium">system</span>which contains all
          system icons used in all the application
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <JsIcon /> <span className="px-2 font-medium">data.js</span> :
        <p className="pl-1">
          It's in this file that you will add your routes. it is an array of
          objects.
        </p>
      </div>
      <div className="flex flex-wrap mt-8 pl-8">
        <div className="overflow-hidden md:w-5/12">
          <ReactSnippetV9 />
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
        <JsIcon /> <span className="px-2 font-medium">modal.js</span> :
        <p className="pl-1">
          Contains the modal used to show windows menu or to show content of
          each section of Taskbar
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <JsIcon className="w-6 h-6 md:-mt-1 md:w-8 md:h-8" />{' '}
        <span className="px-2 font-medium">office.js</span> :
        <div className="pl-1">
          <p className="mb-3">
            Contains a constant named
            <span className="px-1 font-medium">OFFICE.</span>This constant is a
            link that represents the desktop. For example if the home page is
            your desktop, no content will be displayed on that page, only the
            desktop.
          </p>
          <p>
            If you have nested layout or if you want to change your desktop
            link... For example if your back-office entry point is
            <span className="px-1 font-medium">/admin/dashboard,</span> you can
            update the value of
            <span className="px-1 font-medium">OFFICE</span>
            by giving it the route of your back-office entry point.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <JsIcon /> <span className="px-2 font-medium">taskbar.js</span> :
        <p className="pl-1">Display the Taskbar on bottom.</p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <JsIcon /> <span className="px-2 font-medium">topbar.js</span> :
        <p className="pl-1">
          Display the Topbar when route is not
          <span className="px-1 font-medium">OFFICE</span>. The topbar displays
          the name of the route and a closing icon. when you click on that
          closing icon, you will be redirected to the
          <span className="px-1 font-medium">OFFICE</span>.
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <JsIcon /> <span className="px-2 font-medium">windowsMenu.js</span>:
        <p className="pl-1">
          Display the start menu when you click on windows icon. The start menu
          displays each section with his content.
        </p>
      </div>
    </div>
    <div>
      <div className="flex flex-wrap mt-8 md:flex-nowrap">
        <JsIcon /> <strong className="px-1">layout.js :</strong> Contains the
        <span className="px-1 font-medium">DashboardLayout</span>
        component used as the layout of the application
      </div>
    </div>
    <div>
      <div className="flex flex-wrap mt-8 md:flex-nowrap">
        <JsIcon /> <strong className="px-1">main.js :</strong>This
        <span className="px-1 font-medium">Main</span>
        component is the content of the route/view. it will render if the route
        in not<span className="px-1 font-medium">OFFICE</span>
      </div>
    </div>
    <div>
      <div className="flex flex-wrap mt-8 md:flex-nowrap">
        <FileIcon /> <strong className="px-1">style.module.css :</strong>
        This style sheet is used to change the scrollbar appearance for
        <span className="px-1 font-medium">Modal</span>and
        <span className="px-1 font-medium">Main</span> components
      </div>
    </div>
  </section>
);

export default V9NextReactSecondSection;
