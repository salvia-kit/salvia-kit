const V1NuxtFifthSection = () => (
  <section className="px-4 md:px-8">
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
      <span className="px-1 font-semibold">
        dashboard/sidenavigation/Index.vue
      </span>
      file
    </p>
    <p className="mt-5">
      In the <span className="font-semibold"> dashboard/Layout.vue</span> file,
      the
      <span className="pl-1 font-semibold">side-navigation</span> component has
      as prop
      <span className="pl-1 font-semibold">mobile-position</span>, which
      indicates the positioning of the sidenav on mobile.
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

export default V1NuxtFifthSection;
