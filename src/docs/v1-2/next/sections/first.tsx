import { FileIcon, FolderIcon, JsIcon } from '@/src/components/icons';

const V1NextFirstSection = () => (
  <section className="mb-12 px-4 md:px-8">
    <h2 className="text-2xl font-medium">File Structure</h2>
    <div className="pl-2">
      <div className="flex mb-3 mt-4">
        <FolderIcon />
        <span className="pl-2">pages</span>
      </div>
      <div className="flex mb-3 mt-4">
        <FolderIcon />
        <span className="pl-2">public</span>
      </div>
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
        <span className="pl-2">sidenavigation</span>
      </div>
      <div className="flex mb-3 pl-16">
        <FolderIcon />
        <span className="pl-2">icons</span>
      </div>
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
      <div className="flex mb-3 pl-11">
        <FileIcon />
        <span className="pl-2">style.module.css</span>
      </div>
    </div>
  </section>
);

export default V1NextFirstSection;
