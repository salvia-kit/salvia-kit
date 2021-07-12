import Button from '@/src/components/ui/button';

export default function HomeFifthSection() {
  return (
    <section className="mb-16 py-12 text-white bg-custom md:mb-32">
      <h2 className="text-center text-3xl font-bold">
        Subscribe to our
        <br />
        newsletter
      </h2>
      <p className="mt-8 text-center">
        Subscribe to our newsletter to be notified when a new dashboard is
        added.
      </p>
      <div className="flex justify-center mt-8">
        <input
          className="placeholder-gray-600 mr-4 px-4 text-custom"
          placeholder="Enter email"
        />
        <Button color="white">Subscribe</Button>
      </div>
    </section>
  );
}
