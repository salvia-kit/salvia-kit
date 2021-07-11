const V1NextFourthSection = () => (
  <section className="mb-12 px-4 md:px-8">
    <h2 className="text-2xl font-medium">How it works ?</h2>
    <ul className="mt-4 pl-6 list-disc">
      <li className="mb-3">
        Add your routes in the
        <span className="px-1 font-semibold">
          dashboard/sidenavigation/data.js
        </span>
        file
      </li>
      <li className="mb-3">
        If your routes don't exist yet, create your routes in the
        <span className="px-1 font-semibold">pages</span>directory
      </li>
      <li className="mb-3">
        Wrap your<span className="px-1 font-semibold">pages/_app.js</span>with
        the
        <span className="px-1 font-semibold">DashboardLayout</span>component
      </li>
    </ul>
  </section>
);

export default V1NextFourthSection;
