const V3ReactFourthSection = () => (
  <section className="mb-12">
    <h2 className="text-2xl font-medium">Export</h2>
    <p className="mt-4">
      As there is no vendor lock-in, if you already have a dashboard, you can
      just copy the small configuration from
      <span className="px-1 font-semibold">tailwind.config.js</span>and paste it
      into your
      <span className="px-1 font-semibold">tailwind.config.js</span>
      configuration file. then copy the
      <span className="px-1 font-semibold">dashboard</span>folder into your
      project
    </p>
    <div className="mt-8">
      <ul className="mt-4 pl-6 list-disc">
        <li className="mb-3">
          Add your routes in the
          <span className="px-1 font-semibold">
            dashboard/sidenavigation/data.js
          </span>
          file
        </li>
        <li className="mb-3">
          Replace your layout by the
          <span className="pl-1 font-semibold">DashboardProvider</span> and
          <span className="pl-1 font-semibold">DashboardLayout</span> components
        </li>
      </ul>
    </div>
  </section>
);

export default V3ReactFourthSection;
