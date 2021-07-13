import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
} from '@/src/components/ui/accordion';
import Button from '@/src/components/ui/button';
import { NuxtIcon, ReactIcon, VueIcon } from '@/src/components/icons';

interface IDOcAccordionProps {
  techno: any;
}

export default function AccordionDocMobile({ techno }: IDOcAccordionProps) {
  if (window.innerWidth > 768) return null;

  return (
    <>
      <Accordion>
        <div className="mt-12">
          <div>
            <span className="grid place-items-center">
              <ReactIcon className="w-9 h-9" />
              <span className="mb-5 mt-2 text-custom font-semibold">React</span>
            </span>
            <div className="flex justify-center space-x-2">
              <Button color="blue-sky" size="sm">
                Preview
              </Button>
              <AccordionItem color="blue-sky" toggle={techno.react.name}>
                Doc
              </AccordionItem>
              <Button color="blue-sky" size="sm">
                Source
              </Button>
            </div>
            <div>
              <AccordionPanel id={techno.react.name}>
                {techno.react.doc}
              </AccordionPanel>
            </div>
          </div>

          <div className="mt-12">
            <span className="grid place-items-center">
              <Image
                src="/images/next.png"
                width={36}
                height={36}
                alt="Next.js"
              />
              <span className="mb-5 mt-2 text-custom font-semibold">Next</span>
            </span>
            <div className="flex justify-center space-x-2">
              <Button color="black" size="sm">
                Preview
              </Button>
              <AccordionItem color="black" toggle={techno.next.name}>
                Doc
              </AccordionItem>
              <Button color="black" size="sm">
                Source
              </Button>
            </div>
            <div>
              <AccordionPanel id={techno.next.name}>
                {techno.next.doc}
              </AccordionPanel>
            </div>
          </div>

          {techno?.vue && (
            <div className="mt-12">
              <span className="grid place-items-center">
                <VueIcon className="w-9 h-9" />
                <span className="mb-5 mt-2 text-custom font-semibold">Vue</span>
              </span>
              <div className="flex justify-center space-x-2">
                <Button color="green" size="sm">
                  Preview
                </Button>
                <AccordionItem color="green" toggle={techno.vue.name}>
                  Doc
                </AccordionItem>
                <Button color="green" size="sm">
                  Source
                </Button>
              </div>
              <div>
                <AccordionPanel id={techno.vue.name}>
                  {techno.vue.doc}
                </AccordionPanel>
              </div>
            </div>
          )}

          {techno.nuxt && (
            <div className="mt-12">
              <span className="grid place-items-center">
                <NuxtIcon className="w-9 h-9" />
                <span className="mb-5 mt-2 text-custom font-semibold">
                  Nuxt
                </span>
              </span>
              <div className="flex justify-center space-x-2">
                <Button color="green" size="sm">
                  Preview
                </Button>
                <AccordionItem color="green" toggle={techno.nuxt.name}>
                  Doc
                </AccordionItem>
                <Button color="green" size="sm">
                  Source
                </Button>
              </div>
              <div>
                <AccordionPanel id={techno.nuxt.name}>
                  {techno.nuxt.doc}
                </AccordionPanel>
              </div>
            </div>
          )}
        </div>
      </Accordion>
    </>
  );
}
