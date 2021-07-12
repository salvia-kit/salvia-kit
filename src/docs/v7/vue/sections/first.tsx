import { FolderIcon, JsIcon, VueIcon } from '@/src/components/icons';

const V7VueFirstSection = () => (
  <section className="mb-12 px-4 md:px-8">
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
        <span className="pl-2">sidenavigation</span>
      </div>
      <div className="flex mb-3 pl-16">
        <FolderIcon />
        <span className="pl-2">icons</span>
      </div>
      <div className="flex mb-3 pl-16">
        <VueIcon />
        <span className="pl-2">Header.vue</span>
      </div>
      <div className="flex mb-3 pl-16">
        <VueIcon />
        <span className="pl-2">Index.vue</span>
      </div>
      <div className="flex mb-3 pl-16">
        <VueIcon />
        <span className="pl-2">Item.vue</span>
      </div>
      <div className="flex mb-3 pl-16">
        <VueIcon />
        <span className="pl-2">items.vue</span>
      </div>
      <div className="flex mb-3 pl-16">
        <VueIcon />
        <span className="pl-2">Section.vue</span>
      </div>
      <div className="flex mb-3 pl-11">
        <FolderIcon />
        <span className="pl-2">topnavigation</span>
      </div>
      <div className="flex mb-3 pl-16">
        <VueIcon />
        <span className="pl-2">Index.vue</span>
      </div>
      <div className="flex mb-3 pl-11">
        <VueIcon />
        <span className="pl-2">Layout.vue</span>
      </div>
      <div className="flex mb-3 pl-3">
        <FolderIcon />
        <span className="pl-2">pages</span>
      </div>
      <div className="flex mb-3 pl-3">
        <JsIcon />
        <span className="pl-2">main.js</span>
      </div>
      <div className="flex mb-3 pl-3">
        <JsIcon />
        <span className="pl-2">routes.js</span>
      </div>
    </div>
  </section>
);
export default V7VueFirstSection;
