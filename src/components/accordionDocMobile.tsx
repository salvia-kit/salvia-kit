import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
} from '@/components/ui/accordion';
import Button from '@/components/ui/button';
import NuxtIcon from '@/components/icons/nuxt';
import ReactIcon from '@/components/icons/react';
import { VueIcon } from '@/components/icons/icons';
import ExternalLink from '@/components/externalLink';
import SvelteIcon from '@/components/icons/svelte';

interface IDOcAccordionProps {
  techno: any;
}

export default function AccordionDocMobile({ techno }: IDOcAccordionProps) {
  if (window.innerWidth > 1024) return null;

  return (
    <>
      <Accordion>
        <div className="mt-12">
          <div className="w-56">
            <span className="grid place-items-center">
              <ReactIcon className="w-9 h-9" />
              <span className="mb-5 mt-2 font-semibold">React</span>
            </span>
            <div className="flex justify-center space-x-2">
              <AccordionItem color="custom" toggle={techno.react.name}>
                Doc
              </AccordionItem>
              <ExternalLink href={techno.react.source}>
                <Button color="custom" size="sm">
                  Source
                </Button>
              </ExternalLink>
            </div>
          </div>
          <AccordionPanel id={techno.react.name}>
            {techno.react.doc}
          </AccordionPanel>

          <div className="mt-12 w-56">
            <span className="grid place-items-center">
              <Image
                src="/images/others/next.png"
                width={36}
                height={36}
                alt="Next.js"
              />
              <span className="mb-5 mt-2 font-semibold">Next</span>
            </span>
            <div className="flex justify-center space-x-2">
              <AccordionItem color="black" toggle={techno.next.name}>
                Doc
              </AccordionItem>
              <ExternalLink href={techno.next.source}>
                <Button color="black" size="sm">
                  Source
                </Button>
              </ExternalLink>
            </div>
          </div>
          <AccordionPanel id={techno.next.name}>
            {techno.next.doc}
          </AccordionPanel>

          {techno?.vue && (
            <>
              <div className="mt-12 w-56">
                <span className="grid place-items-center">
                  <VueIcon className="w-9 h-9" />
                  <span className="mb-5 mt-2 font-semibold">Vue</span>
                </span>
                <div className="flex justify-center space-x-2">
                  <AccordionItem color="green" toggle={techno.vue.name}>
                    Doc
                  </AccordionItem>
                  <ExternalLink href={techno.vue.source}>
                    <Button color="green" size="sm">
                      Source
                    </Button>
                  </ExternalLink>
                </div>
              </div>
              <AccordionPanel id={techno.vue.name}>
                {techno.vue.doc}
              </AccordionPanel>
            </>
          )}

          {techno?.nuxt && (
            <>
              <div className="mt-12 w-56">
                <span className="grid place-items-center">
                  <NuxtIcon className="w-9 h-9" />
                  <span className="mb-5 mt-2 font-semibold">Nuxt</span>
                </span>
                <div className="flex justify-center space-x-2">
                  <AccordionItem color="green" toggle={techno.nuxt.name}>
                    Doc
                  </AccordionItem>
                  <ExternalLink href={techno.nuxt.source}>
                    <Button color="green" size="sm">
                      Source
                    </Button>
                  </ExternalLink>
                </div>
              </div>
              <AccordionPanel id={techno.nuxt.name}>
                {techno.nuxt.doc}
              </AccordionPanel>
            </>
          )}
          {techno?.svelte && (
            <>
              <div className="mt-12 w-56">
                <span className="grid place-items-center">
                  <SvelteIcon className="w-9 h-9" />
                  <span className="mb-5 mt-2 font-semibold">Svelte</span>
                </span>
                <div className="flex justify-center space-x-2">
                  <AccordionItem color="red" toggle={techno.svelte.name}>
                    Doc
                  </AccordionItem>
                  <ExternalLink href={techno.svelte.source}>
                    <Button color="red" size="sm">
                      Source
                    </Button>
                  </ExternalLink>
                </div>
              </div>
              <AccordionPanel id={techno.svelte.name}>
                {techno.svelte.doc}
              </AccordionPanel>
            </>
          )}
        </div>
      </Accordion>
    </>
  );
}
