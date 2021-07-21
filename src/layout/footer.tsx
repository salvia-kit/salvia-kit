import Image from 'next/image';
import Container from '@/src/components/container';

export default function Footer() {
  return (
    <footer className="relative bottom-0">
      <Container>
        <div className="flex flex-wrap mt-28">
          <div className="mb-12 w-full md:mb-0 md:w-4/12">
            <h3 className="text-2xl font-bold">Contact</h3>
            <ul className="mt-5">
              <li className="pb-3">
                <a href="https://github.com/salvia-kit/salvia-kit-website">
                  Github
                </a>
              </li>
              <li className="pb-3">Twitter</li>
              <li className="pb-3">
                <a href="mailto:support@salvia-kit.com">Email</a>
              </li>
            </ul>
          </div>
          <div className="mb-12 w-full md:mb-0 md:w-4/12">
            <h3 className="text-2xl font-bold">About</h3>
            <ul className="mt-5">
              <li className="pb-3">
                <a href="https://github.com/salvia-kit/salvia-kit-website/issues/new/choose">
                  Issues
                </a>
              </li>
              <li className="pb-3">
                <a href="https://github.com/salvia-kit/salvia-kit-website/blob/main/contributing.md">
                  Contributions
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-4/12">
            <h3 className="text-2xl font-bold">Acknowledgements</h3>
            <ul className="mt-5">
              <li className="pb-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tailwindcss.com"
                >
                  Tailwind CSS
                </a>
              </li>
              <li className="pb-3">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.tailwind-kit.com"
                >
                  Tail-Kit
                </a>
              </li>
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
        <div className="mt-16 pb-6 text-center text-sm">
          © {new Date().getFullYear()} Salvia-kit All rights reserved. Made with
          love by{' '}
          <a className="font-semibold" href="https://enochndika.com">
            Enoch Ndika
          </a>
        </div>
      </Container>
    </footer>
  );
}
