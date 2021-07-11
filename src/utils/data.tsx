import DocV1Vue from '@/src/docs/v1-2/vue/doc';
import DocV1Nuxt from '@/src/docs/v1-2/nuxt/doc';
import DocV1Next from '@/src/docs/v1-2/next/doc';
import DocV1React from '@/src/docs/v1-2/react/doc';

const data = [
  {
    name: 'Salvia-kit Dashboard V1',
    image: '',
    techno: {
      react: {
        demo: '',
        doc: <DocV1React />,
      },
      next: {
        demo: '',
        doc: <DocV1Next />,
      },
      vue: {
        demo: '',
        doc: <DocV1Vue />,
      },
      nuxt: {
        demo: '',
        doc: <DocV1Nuxt />,
      },
    },
  },
  {
    name: 'Salvia-kit Dashboard V2',
    image: '',
    techno: {
      react: {
        demo: '',
        doc: <DocV1React />,
      },
      next: {
        demo: '',
        doc: <DocV1Next />,
      },
      vue: {
        demo: '',
        doc: <DocV1Vue />,
      },
      nuxt: {
        demo: '',
        doc: <DocV1Nuxt />,
      },
    },
  },
];

export default data;
