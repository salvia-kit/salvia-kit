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
      <div className="flex mt-8 px-2 space-x-4 md:justify-center">
        <input
          className="placeholder-gray-600 px-4 w-48 text-custom sm:w-auto"
          placeholder="Enter email"
        />
        <div className="w-12 md:w-auto">
          <Button color="white">Subscribe</Button>
        </div>
      </div>
    </section>
  );
}
