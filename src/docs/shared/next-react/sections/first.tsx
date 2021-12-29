import { DocType } from '@/utils/globalTypes';
import { FileIcon, FolderIcon, JsIcon } from '@/components/icons/icons';

const SharedNextReactFirstSection = ({
  mainComp,
  styleDir,
  version,
}: DocType) => (
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
        <span className="pl-2">context.js</span>
      </div>
      <div className="flex mb-3 pl-16">
        <JsIcon />
        <span className="pl-2">overlay.js</span>
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
          <JsIcon />
          <span className="pl-2">accordion.js</span>
        </div>
      )}
      <div className="flex mb-3 pl-16">
        <JsIcon />
        <span className="pl-2">data.js</span>
      </div>
      <div className="flex mb-3 pl-16">
        <JsIcon />
        <span className="pl-2">header.js</span>
      </div>
      <div className="flex mb-3 pl-16">
        <JsIcon />
        <span className="pl-2">index.js</span>
      </div>
      {styleDir === 'sidenav' && (
        <div className="flex mb-3 pl-16">
          <FileIcon />
          <span className="pl-3">style.module.css</span>
        </div>
      )}
      <div className="flex mb-3 pl-16">
        <JsIcon />
        <span className="pl-2">items.js</span>
      </div>
      <div className="flex mb-3 pl-11">
        <FolderIcon />
        <span className="pl-2">topnavigation</span>
      </div>
      <div className="flex mb-3 pl-16">
        <JsIcon />
        <span className="pl-2">index.js</span>
      </div>
      <div className="flex mb-3 pl-11">
        <JsIcon />
        <span className="pl-2">layout.js</span>
      </div>
      {styleDir === 'dashboard' && (
        <div className="flex mb-3 pl-11">
          <FileIcon />
          <span className="pl-2">style.module.css</span>
        </div>
      )}
      {mainComp && (
        <div className="flex mb-3 pl-11">
          <JsIcon />
          <span className="pl-2">main.js</span>
        </div>
      )}
    </div>
  </section>
);

export default SharedNextReactFirstSection;
