import { DocType } from '@/utils/globalTypes';
import { FolderIcon, JsIcon } from '@/components/icons/icons';
import SvelteIcon from '@/components/icons/svelte';

const SvelteDocFirstSection = ({ version }: DocType) => (
  <section className="mb-12">
    <h2 className="text-2xl font-medium">File Structure</h2>
    <div className="pl-2">
      <div className="flex mb-3 mt-4">
        <FolderIcon />
        <span className="pl-2">src</span>
      </div>
      <div className="flex mb-3 pl-5">
        <FolderIcon />
        <span className="pl-2">components</span>
      </div>
      <div className="flex mb-3 pl-5">
        <FolderIcon />
        <span className="pl-2">dashboard</span>
      </div>
      <div className="flex mb-3 pl-11">
        <FolderIcon />
        <span className="pl-2">provider</span>
      </div>
      <div className="flex mb-3 pl-16">
        <JsIcon />
        <span className="pl-2">click-outside.js</span>
      </div>
      <div className="flex mb-3 pl-16">
        <SvelteIcon className="w-6 h-6" />
        <span className="pl-2">Overlay.svelte</span>
      </div>
      <div className="flex mb-3 pl-16">
        <JsIcon />
        <span className="pl-2">store.js</span>
      </div>
      <div className="flex mb-3 pl-11">
        <FolderIcon />
        <span className="pl-2">sidenavigation</span>
      </div>
      <div className="flex mb-3 pl-16">
        <FolderIcon />
        <span className="pl-2">icons</span>
      </div>
      {version === 8 && (
        <div className="flex mb-3 pl-16">
          <FolderIcon />
          <span className="pl-2">collapse</span>
        </div>
      )}
      <div className="flex mb-3 pl-16">
        <JsIcon />
        <span className="pl-2">data.js</span>
      </div>
      <div className="flex mb-3 pl-16">
        <SvelteIcon className="w-6 h-6" />
        <span className="pl-2">Header.svelte</span>
      </div>
      <div className="flex mb-3 pl-16">
        <SvelteIcon className="w-6 h-6" />
        <span className="pl-2">Index.svelte</span>
      </div>
      <div className="flex mb-3 pl-16">
        <SvelteIcon className="w-6 h-6" />
        <span className="pl-2">Items.svelte</span>
      </div>
      <div className="flex mb-3 pl-11">
        <FolderIcon />
        <span className="pl-2">topnavigation</span>
      </div>
      <div className="flex mb-3 pl-16">
        <SvelteIcon className="w-6 h-6" />
        <span className="pl-2">Index.svelte</span>
      </div>
      <div className="flex mb-3 pl-11">
        <SvelteIcon className="w-6 h-6" />
        <span className="pl-2">Layout.svelte</span>
      </div>
    </div>
  </section>
);

export default SvelteDocFirstSection;
