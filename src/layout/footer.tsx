import Image from 'next/image';
import Container from '@/src/components/container';

export default function Footer() {
  return (
    <footer className="relative bottom-0">
      <Container>
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
