import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
} from '@/src/components/ui/accordion';
import Button from '@/src/components/ui/button';
import NuxtIcon from '@/src/components/icons/nuxt';
import ReactIcon from '@/src/components/icons/react';
import { VueIcon } from '@/src/components/icons/icons';

interface IAccordionDocProps {
  techno: any;
}

export default function AccordionDoc({ techno }: IAccordionDocProps) {
  return (
    <div className="hidden lg:block">
      <Accordion>
        <div className="flex flex-nowrap mt-12 lg:space-x-3 xl:space-x-2">
          <div className="md:w-6/12 lg:w-3/12">
            <span className="grid place-items-center">
              <ReactIcon className="w-9 h-9" />
              <span className="mb-5 mt-2 font-semibold">React</span>
            </span>
            <div className="flex justify-center space-x-2">
              <AccordionItem color="blue-sky" toggle={techno.react.name}>
                Doc
              </AccordionItem>
              <a href={techno.react.source}>
                <Button color="blue-sky" size="sm">
                  Source
                </Button>
              </a>
            </div>
          </div>

          <div className="md:w-6/12 lg:w-3/12">
            <span className="grid place-items-center">
              <Image
                src="/images/next.png"
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
              <a href={techno.next.source}>
                <Button color="black" size="sm">
                  Source
                </Button>
              </a>
            </div>
          </div>

          <div className="mt-8 md:w-6/12 lg:mt-0 lg:w-3/12">
            <span className="grid place-items-center">
              <VueIcon className="w-9 h-9" />
              <span className="mb-5 mt-2 font-semibold">Vue</span>
            </span>
            <div className="flex justify-center space-x-2">
              <AccordionItem color="green" toggle={techno.vue.name}>
                Doc
              </AccordionItem>
              <a href={techno.vue.source}>
                <Button color="green" size="sm">
                  Source
                </Button>
              </a>
            </div>
          </div>

          <div className="mt-8 md:w-6/12 lg:mt-0 lg:w-3/12">
            <span className="grid place-items-center">
              <NuxtIcon className="w-9 h-9" />
              <span className="mb-5 mt-2 font-semibold">Nuxt</span>
            </span>
            <div className="flex justify-center space-x-2">
              <AccordionItem color="green" toggle={techno.nuxt.name}>
                Doc
              </AccordionItem>
              <a href={techno.nuxt.source}>
                <Button color="green" size="sm">
                  Source
                </Button>
              </a>
            </div>
          </div>
        </div>

        <AccordionPanel id={techno.react.name}>
          {techno.react.doc}
        </AccordionPanel>
        <AccordionPanel id={techno.next.name}>{techno.next.doc}</AccordionPanel>
        <AccordionPanel id={techno.vue.name}>{techno.vue.doc}</AccordionPanel>
        <AccordionPanel id={techno.nuxt.name}>{techno.nuxt.doc}</AccordionPanel>
      </Accordion>
    </div>
  );
}
