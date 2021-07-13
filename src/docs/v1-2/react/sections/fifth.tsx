const V1ReactFifthSection = () => (
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

export default V1ReactFifthSection;
