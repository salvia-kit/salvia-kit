import Link from 'next/link';
import Image from 'next/image';
import css from './first.module.css';
import Button from '@/components/ui/Button';

const HomeFirstSection = () => (
  <section className="mt-32 xl:mt-64 2xl:mt-72 2xl:pb-20 text-white">
    <img
      src="/svg/overlay.svg"
      alt="Overlay"
      className={`absolute left-0 top-0 w-full object-cover ${css.image}`}
    />
    <div className="relative h-auto">
      <div>
        <span className="font-bold">Discover your future workspace</span>
        <h1 className="mb-12 mt-4 text-4xl lg:text-7xl">
          Explore The <br /> Most{' '}
          <b>
            Beautiful <br /> Dashboards
          </b>
        </h1>
      </div>
      <div className="flex flex-col-reverse md:flex-col">
        <div className="mr-auto">
          <Link href="/dashboard/all">
            <a>
              <Button color="custom" className="font-bold" size="lg">
                Explore
              </Button>
            </a>
          </Link>
        </div>
        <div className="bg-[#14445c] flex items-center mb-8 px-4 py-6 w-full md:-mt-16 md:mb-0 md:ml-auto md:w-80">
          <div>
            <span className="block mb-2 text-sm font-bold">
              We got what <br />
              you're looking for!
            </span>
            <Image
              src="/svg/tailwindcss.svg"
              height={30}
              width={30}
              alt="Tailwind CSS"
            />
          </div>
          <div>
            <Image
              src="/images/others/pc.png"
              height={90}
              width={145}
              alt="Salvia-kit have what you're looking for"
              className={css.infoImg}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HomeFirstSection;
