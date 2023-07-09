import Image from 'next/image';
import useForm from '@/hooks/useForm';
import Button from '@/components/ui/Button';
import NuxtIcon from '@/components/icons/NuxtIcon';
import ReactIcon from '@/components/icons/ReactIcon';
import { VueIcon } from '@/components/icons/others';
import SvelteIcon from '@/components/icons/SvelteIcon';

export default function HomeFifthSection() {
  const form = useForm();
  return (
    <section className="mb-16 md:mb-32">
      <div className="dark:bg-[#1B2A31] bg-[#14445c] py-12 text-white">
        <h2 className="text-center text-3xl font-bold">
          Subscribe to our
          <br />
          newsletter
        </h2>
        <p className="mt-8 px-2 text-center">
          Subscribe to our newsletter to be notified when a new dashboard is
          added.
        </p>
        <form
          className="grid place-items-center mt-8 px-2 space-x-4 md:flex md:justify-center"
          onSubmit={form.handleSubmit}
        >
          {form.error && (
            <div role="alert" className="text-green-500 text-sm font-bold">
              {form.errorMessage}
            </div>
          )}
          <div className="mb-4 md:mb-0 md:w-auto">
            <input
              name="email"
              value={form.value}
              aria-label="Email"
              aria-required={true}
              aria-invalid={form.error}
              placeholder="Enter email"
              className="placeholder-gray-600 text-[#14445c] px-4 py-2 w-48 w-full bg-white"
              onChange={form.handleInputChange}
              onKeyUpCapture={form.handleClearError}
            />
          </div>
          <div className="md:w-auto">
            <Button color="white" type="submit" disabled={form.isSubmitting}>
              Subscribe
            </Button>
          </div>
        </form>
      </div>

      <div className="flex flex-wrap justify-center pt-32 gap-x-20 md:gap-x-32">
        <div className="-mt-1">
          <Image
            src="/svg/tailwindcss.svg"
            height={60}
            width={60}
            alt="Tailwind CSS"
          />
        </div>
        <div className="-mt-1">
          <Image src="/svg/solid.png" height={60} width={60} alt="Solid js" />
        </div>
        <div className="-mt-1">
          <Image src="/svg/angular.png" height={60} width={60} alt="Angular" />
        </div>
        <div>
          <Image
            src="/images/others/next.png"
            height={50}
            width={50}
            alt="next.js"
          />
        </div>
        <div>
          <ReactIcon className="w-12 h-12" />
        </div>
        <div>
          <SvelteIcon className="w-12 h-12" />
        </div>
        <div>
          <VueIcon className="w-12 h-12" />
        </div>
        <div>
          <NuxtIcon className="w-12 h-12" />
        </div>
      </div>
    </section>
  );
}
