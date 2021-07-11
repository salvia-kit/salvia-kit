const V7NuxtThirdSection = () => (
  <section className="mb-12 px-4 md:px-8">
    <h2 className="text-2xl font-medium">How it works ?</h2>
    <ul className="mt-4 pl-6 list-disc">
      <li className="mb-3">
        Add your routes and items in the
        <span className="px-1 font-semibold">
          dashboard/sidenavigation/items.vue
        </span>
        file
      </li>
      <li className="mb-3">
        If your routes don't exist yet, create your routes in the
        <span className="pl-1 font-semibold">pages</span> directory
      </li>
      <li className="mb-3">
        Wrap the <span className="font-semibold">layouts/default.vue</span> by
        the
        <span className="pl-1 font-semibold">dashboard-layout</span> component
      </li>
    </ul>
  </section>
);

export default V7NuxtThirdSection;
