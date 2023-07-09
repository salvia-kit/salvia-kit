import Image from 'next/image';
import Container from '@/components/Container';
import ExternalLink from '@/components/ExternalLink';

export default function Footer() {
  return (
    <footer className="relative bottom-0">
      <Container>
        <div className="grid gap-10 grid-cols-1 mt-28 w-full md:grid-cols-2 lg:gap-0 lg:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold">Contact</h3>
            <ul className="mt-5">
              <li className="pb-3">
                <ExternalLink href="https://github.com/salvia-kit/salvia-kit-website">
                  Github
                </ExternalLink>
              </li>
              <li className="pb-3">Twitter</li>
              <li className="pb-3">
                <ExternalLink href="mailto:contact@salvia-kit.com">
                  Email
                </ExternalLink>
              </li>
            </ul>
          </div>
          <div>
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
          <div>
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
              <li className="pb-3">
                <ExternalLink href="https://illustrationkit.com">
                  Illustration-Kit
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
          <div className="lg:pl-10">
            <h3 className="text-2xl font-bold">Sponsors</h3>
            <div className="mt-5">
              Thanks to our amazing sponsors for supporting Salvia-kit
            </div>
            <ul className="mt-5 pl-4 list-disc">
              <li className="pb-3">
                <ExternalLink href="https://www.jetbrains.com">
                  Jetbrains
                </ExternalLink>
              </li>
              <li className="pb-3">
                <ExternalLink href="https://vercel.com/?utm_source=salvia-kit&utm_campaign=oss">
                  Vercel
                </ExternalLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pb-6 text-center text-sm">
          © {new Date().getFullYear()} Salvia-kit All rights reserved. Made with
          love by{' '}
          <ExternalLink
            className="font-semibold"
            href="https://github.com/enochndika"
          >
            Enoch Ndika
          </ExternalLink>
        </div>
      </Container>
    </footer>
  );
}
