const ReactNextFifthSection = () => (
  <section className="mb-12">
    <h2 className="text-2xl font-medium">Customization</h2>
    <p className="mt-5">
      You can customize everything according to your preferences if it doesn't
      suit you. What we have done is just provide a solid structure for better
      scalability and readability of the code.
    </p>
    <p className="mt-5">
      The sidenav scrollbar is hidden by default but you can still scroll with
      the keyboards if you have several sidenav-items. If you are not a fan of
      this approach, you can always change its style in the
      <strong className="px-1">style.module.css</strong>file
    </p>
    <p className="mt-5">
      In the <strong> dashboard/layout.js</strong> file, the
      <strong className="pl-1">Sidenavigation</strong> component has as prop
      <strong className="pl-1">mobilePosition</strong>, which indicates the
      positioning of the sidenav on mobile.
    </p>
    <p className="pt-5">This prop can have two possible values :</p>
    <ul className="mt-4 pl-6 list-disc">
      <li className="mb-3">
        <strong>left :</strong> sidenav will be aligned to the left
      </li>
      <li>
        <strong>right :</strong> sidenav will be aligned to the right
      </li>
    </ul>
  </section>
);

const V9ReactNextFifthSection = () => (
  <section className="mb-12">
    <h2 className="text-2xl font-medium">Customization</h2>
    <p className="mt-4">
      As there is no vendor lock-in, if you already have a dashboard, you can
      just copy the small configuration from
      <span className="px-1 font-medium">tailwind.config.js</span>and paste it
      into your
      <span className="px-1 font-medium">tailwind.config.js</span>
      configuration file. Then copy the
      <span className="px-1 font-medium">dashboard</span>folder into your
      project. You'll also need to install
      <span className="px-1 font-medium">@reach/portal</span> which allows to
      create and append a DOM node to the end of document.body and renders a
      React tree into it. it is useful in this case because we have many modal
      to renders.
    </p>
    <div className="mt-8">
      <ul className="mt-4 pl-6 list-disc">
        <li className="mb-3">
          Add your routes in the
          <span className="px-1 font-medium">dashboard/office/data.js</span>
          file
        </li>
        <li className="mb-3">
          Replace your layout by the
          <span className="px-1 font-medium">DashboardLayout</span>component
        </li>
      </ul>
    </div>
  </section>
);

export { V9ReactNextFifthSection };

export default ReactNextFifthSection;
