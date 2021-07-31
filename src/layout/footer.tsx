import Image from 'next/image';
import Container from '@/src/components/container';
import ExternalLink from '@/src/components/externalLink';

export default function Footer() {
  return (
    <footer className="relative bottom-0">
      <Container>
        <div className="flex flex-wrap mt-28">
          <div className="mb-12 w-full md:mb-0 md:w-4/12">
            <h3 className="text-2xl font-bold">Contact</h3>
            <ul className="mt-5">
              <li className="pb-3">
                <ExternalLink href="https://github.com/salvia-kit/salvia-kit-website">
                  Github
                </ExternalLink>
              </li>
              <li className="pb-3">Twitter</li>
              <li className="pb-3">
                <ExternalLink href="mailto:support@salvia-kit.com">
                  Email
                </ExternalLink>
              </li>
            </ul>
          </div>
          <div className="mb-12 w-full md:mb-0 md:w-4/12">
            <h3 className="text-2xl font-bold">About</h3>
            <ul className="mt-5">
              <li className="pb-3">
                <ExternalLink href="https://github.com/salvia-kit/salvia-kit-website/issues/new/choose">
                  Issues
                </ExternalLink>
              </li>
              <li className="pb-3">
                <ExternalLink href="https://github.com/salvia-kit/salvia-kit-website/blob/main/contributing.md">
                  Contributions
                </ExternalLink>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-4/12">
            <h3 className="text-2xl font-bold">Acknowledgements</h3>
            <ul className="mt-5">
              <li className="pb-3">
                <ExternalLink href="https://tailwindcss.com">
                  Tailwind CSS
                </ExternalLink>
              </li>
              <li className="pb-3">
                <ExternalLink href="https://www.tailwind-kit.com">
                  Tail-Kit
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://vercel.com?utm_source=salvia-kit&utm_campaign=oss">
                  <Image
                    width={170}
                    height={50}
                    src="/svg/vercel.svg"
                    alt="Powered By Vercel"
                  />
                </ExternalLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pb-6 text-center text-sm">
          © {new Date().getFullYear()} Salvia-kit All rights reserved. Made with
          love by{' '}
          <ExternalLink className="font-semibold" href="https://enochndika.com">
            Enoch Ndika
          </ExternalLink>
        </div>
      </Container>
    </footer>
  );
}
