const V4ReactThirdSection = () => (
  <section className="mb-12 px-4 md:px-8">
    <h2 className="text-2xl font-medium">How it works ?</h2>
    <ul className="mt-4 pl-6 list-disc">
      <li className="mb-3">
        Add your routes in the
        <strong className="px-1">dashboard/sidenavigation/data.js</strong>
        file
      </li>
      <li className="mb-3">
        If your routes don't exist yet, create your routes in the
        <strong className="px-1">pages</strong>directory
      </li>
      <li className="mb-3">
        Wrap your routes in <strong>app.js</strong> by the
        <strong className="px-1">DashboardLayout</strong>component
      </li>
    </ul>
  </section>
);

export default V4ReactThirdSection;
