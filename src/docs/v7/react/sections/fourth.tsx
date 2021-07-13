const V7ReactFourthSection = () => (
  <section className="mb-12">
    <h2 className="text-2xl font-medium">Export</h2>
    <p className="mt-4">
      As there is no vendor lock-in, if you already have a dashboard, you can
      just copy the small configuration from
      <strong className="px-1">tailwind.config.js</strong>and paste it into your
      <strong className="px-1">tailwind.config.js</strong>configuration file.
      then copy the
      <strong className="px-1">dashboard</strong>folder into your project
    </p>
    <div className="mt-8">
      <ul className="mt-4 pl-6 list-disc">
        <li className="mb-3">
          Add your routes in the
          <strong className="px-1">dashboard/sidenavigation/data.js</strong>
          file
        </li>
        <li className="mb-3">
          Replace your layout by the
          <strong className="px-1">DashboardLayout</strong>component
        </li>
      </ul>
    </div>
  </section>
);

export default V7ReactFourthSection;
