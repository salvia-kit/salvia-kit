import {
  ReactSnippet,
  ReactSnippetShort,
  ReactSnippetV8,
} from '@/docs/common/snippets';
import { DocType } from '@/utils/globalTypes';
import SvelteIcon from '@/components/icons/svelte';
import { FolderIcon, JsIcon } from '@/components/icons/icons';

const SvelteDocSecondSection = ({ snippet, version }: DocType) => (
  <section className="mb-12">
    <h2 className="text-2xl font-medium">File Structure explained</h2>
    <p className="mt-5">
      We will focus on
      <span className="px-1 font-semibold">dashboard</span>folder and its
      <span className="px-1 font-semibold">subfolders</span> which contain all
      the logic.
    </p>
    <div className="mb-12 mt-5">
      <div className="flex">
        <FolderIcon /> <strong className="px-1">provider</strong>
      </div>
      <div className="flex flex-wrap mt-4 pl-6 md:flex-nowrap">
        <JsIcon className="w-7 h-7" />
        <span className="px-2 font-semibold">click-outside.js</span> :
        <p className="pl-2">handle click outside to the target</p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <SvelteIcon className="w-6 h-6" />
        <span className="px-2 font-semibold">Overlay.svelte</span> :
        <p className="pl-2">
          displays an overlay that will only be visible on small screens to
          emphasize the focus on the sidenav when it is open
        </p>
      </div>
      <div className="flex flex-wrap mt-4 pl-6 md:flex-nowrap">
        <JsIcon className="w-7 h-7" />
        <span className="px-2 font-semibold">store.js</span> :
        <p className="pl-2">the global store to toggle sidenav state</p>
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
          As each
          <span className="px-1 font-semibold">
            {version === 8 ? 'sidenav-section' : 'sidenav-item'}
          </span>
          has an icon, this sub-folder contains the icons of each sidenav-item.
          You don't need this folder if you are using a package for icons such
          as
          <span className="px-1 font-semibold">font-awesome</span>
          or others
        </p>
      </div>
      {version === 8 && (
        <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
          <FolderIcon /> <span className="px-2 font-semibold">collapse</span> :
          <p className="pl-1">
            contains the<span className="px-1 font-bold">Collapse</span>
            component which is used to toggle each section of sidenav.
          </p>
        </div>
      )}
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <JsIcon /> <span className="px-2 font-semibold">data.js</span> :
        <p className="pl-1">
          It's in this file that you will add routes for each sidenav-item. it
          is an array of objects.
        </p>
      </div>
      <div className="flex flex-wrap mt-8 pl-8">
        <div className="lg:w-4/12">
          {snippet === 'short' && <ReactSnippetShort />}
          {snippet === 'long' && version === 8 && <ReactSnippetV8 />}
          {snippet === 'long' && version !== 8 && <ReactSnippet />}
        </div>
        <ul className="pt-8 lg:pl-4 lg:pt-16">
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
        <SvelteIcon className="w-6 h-6" />
        <span className="px-2 font-semibold">header.svelte</span> :
        <p className="pl-1">
          The<span className="px-1 font-semibold">SidenavHeader</span>
          component contains the logo that is displayed on top of the sidenav
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <SvelteIcon className="w-6 h-6" />
        <span className="px-2 font-semibold">Items.svelte</span> :
        <p className="pl-1">
          This<span className="px-1 font-semibold">SidenavItems</span>
          component automatically generates each sidenav-item according to your
          routes coming from the
          <span className="px-1 font-semibold">data.js</span>file
        </p>
      </div>
      <div className="flex flex-wrap mt-6 pl-6 md:flex-nowrap">
        <SvelteIcon className="w-6 h-6" />
        <span className="px-2 font-semibold">Index.svelte</span> :
        <p className="pl-1">
          This<span className="px-1 font-semibold">Sidenavigation</span>
          component contains all the logic of the sidenav.
        </p>
      </div>
    </div>

    <div>
      <div className="flex mt-8">
        <FolderIcon /> <strong className="px-1">topnavigation</strong>
      </div>
      <div className="flex flex-wrap mt-4 pl-6 md:flex-nowrap">
        <SvelteIcon className="w-6 h-6" />
        <span className="px-2 font-semibold">Index.svelte</span> :
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
        <SvelteIcon className="w-6 h-6" />
        <strong className="px-1">Layout.svelte :</strong> Contains the
        <span className="px-1 font-semibold">DashboardLayout</span>
        component used as the layout of the application
      </div>
    </div>
  </section>
);

export default SvelteDocSecondSection;
