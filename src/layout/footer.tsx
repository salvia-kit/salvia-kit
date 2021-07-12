import Image from 'next/image';
import Container from '@/src/components/container';
import { NuxtIcon, ReactIcon, VueIcon } from '@/src/components/icons';

export default function Footer() {
  return (
    <footer className="relative bottom-0">
      <Container>
        <div className="flex flex-wrap justify-center space-x-4 md:space-x-24 lg:space-x-32">
          <div>
            <Image
              src="/images/next.png"
              height={50}
              width={50}
              alt="next.js"
            />
          </div>
          <div className="-mt-1">
            <Image
              src="/svg/tailwindcss.svg"
              height={60}
              width={60}
              alt="Tailwind CSS"
            />
          </div>
          <div>
            <ReactIcon className="w-12 h-12" />
          </div>
          <div>
            <VueIcon className="w-12 h-12" />
          </div>
          <div>
            <NuxtIcon className="w-12 h-12" />
          </div>
        </div>

        <div className="flex flex-wrap mt-32 text-custom">
          <div className="mb-12 w-full md:mb-0 md:w-4/12">
            <h4 className="text-custom text-2xl font-bold">Salvia-kit</h4>
            <ul className="mt-5">
              <li className="pb-3">Github</li>
              <li className="pb-3">Twitter</li>
              <li className="pb-3">Instagram</li>
            </ul>
          </div>
          <div className="mb-12 w-full md:mb-0 md:w-4/12">
            <h4 className="text-custom text-2xl font-bold">About</h4>
            <ul className="mt-5">
              <li className="pb-3">Issues</li>
              <li className="pb-3">Contributions</li>
              <li className="pb-3">Dashboard Versions</li>
            </ul>
          </div>
          <div className="w-full md:w-4/12">
            <h4 className="text-custom text-2xl font-bold">Acknowledgements</h4>
            <ul className="mt-5">
              <li className="pb-3">Tailwind CSS</li>
              <li>
                <a href="https://vercel.com?utm_source=salvia-kit&utm_campaign=oss">
                  <Image
                    width={170}
                    height={50}
                    src="/svg/vercel.svg"
                    alt="Powered By Vercel"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pb-6 text-center text-custom">
          © {new Date().getFullYear()} Salvia-kit All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
