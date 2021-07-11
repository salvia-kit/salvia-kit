const V1NextFifthSection = () => (
  <section className="mb-12 px-4 md:px-8">
    <h2 className="text-2xl font-medium">Auto Format and Linting</h2>
    <div className="mt-4">
      The dashboard is provided with <strong>eslint</strong>,
      <strong className="px-1">prettier</strong>,
      <strong className="px-1">lint-staged</strong>et
      <strong className="px-1">husky.</strong>Before each commit, the
      <strong className="px-1">pre-commit</strong>hook will be triggered to run
      prettier to format the code and eslint to analyze the code for possible
      errors.
    </div>
  </section>
);

export default V1NextFifthSection;
