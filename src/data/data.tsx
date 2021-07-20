import * as Doc from './docs';
import * as img from './images';

const data = [
  {
    id: 1,
    name: 'Salvia-kit Dashboard v1',
    slug: 'dashboard-v1',
    image: img.imgV1,
    demo: 'https://salvia-kit-dashboard-v1-demo.vercel.app',
    techno: {
      react: {
        name: 'react',
        doc: <Doc.DocV1AndV2React />,
        source: 'https://github.com/salvia-kit/dashboard-v1-cra',
      },
      next: {
        name: 'next',
        doc: <Doc.DocV1AndV2Next />,
        source: 'https://github.com/salvia-kit/dashboard-v1-nextjs',
      },
      vue: {
        name: 'vue',
        doc: <Doc.DocV1AndV2Vue />,
        source: 'https://github.com/salvia-kit/dashboard-v1-vue',
      },
      nuxt: {
        name: 'nuxt',
        doc: <Doc.DocV1AndV2Nuxt />,
        source: 'https://github.com/salvia-kit/dashboard-v1-nuxt',
      },
    },
  },
  {
    id: 2,
    name: 'Salvia-kit Dashboard v2',
    slug: 'dashboard-v2',
    image: img.imgV2,
    demo: 'https://salvia-kit-dashboard-v2-demo.vercel.app',
    techno: {
      react: {
        name: 'react',
        doc: <Doc.DocV1AndV2React />,
        source: 'https://github.com/salvia-kit/dashboard-v2-cra',
      },
      next: {
        name: 'next',
        doc: <Doc.DocV1AndV2Next />,
        source: 'https://github.com/salvia-kit/dashboard-v2-nextjs',
      },
      vue: {
        name: 'vue',
        doc: <Doc.DocV1AndV2Vue />,
        source: 'https://github.com/salvia-kit/dashboard-v2-vue',
      },
      nuxt: {
        name: 'nuxt',
        doc: <Doc.DocV1AndV2Nuxt />,
        source: 'https://github.com/salvia-kit/dashboard-v2-nuxt',
      },
    },
  },
  {
    id: 3,
    name: 'Salvia-kit Dashboard v3',
    slug: 'dashboard-v3',
    image: img.imgV3,
    demo: 'https://salvia-kit-dashboard-v3-demo.vercel.app',
    techno: {
      react: {
        name: 'react',
        doc: <Doc.DocV3React />,
        source: 'https://github.com/salvia-kit/dashboard-v3-cra',
      },
      next: {
        name: 'next',
        doc: <Doc.DocV3Next />,
        source: 'https://github.com/salvia-kit/dashboard-v3-nextjs',
      },
      vue: {
        name: 'vue',
        doc: <Doc.DocV3Vue />,
        source: 'https://github.com/salvia-kit/dashboard-v3-vue',
      },
      nuxt: {
        name: 'nuxt',
        doc: <Doc.DocV3Nuxt />,
        source: 'https://github.com/salvia-kit/dashboard-v3-nuxt',
      },
    },
  },
  {
    id: 4,
    name: 'Salvia-kit Dashboard v4',
    slug: 'dashboard-v4',
    image: img.imgV4,
    demo: 'https://salvia-kit-dashboard-v4-demo.vercel.app',
    techno: {
      react: {
        name: 'react',
        doc: <Doc.DocV4AndV5React />,
        source: 'https://github.com/salvia-kit/dashboard-v4-cra',
      },
      next: {
        name: 'next',
        doc: <Doc.DocV4AndV5Next />,
        source: 'https://github.com/salvia-kit/dashboard-v4-nextjs',
      },
      vue: {
        name: 'vue',
        doc: <Doc.DocV4AndV5Vue />,
        source: 'https://github.com/salvia-kit/dashboard-v4-vue',
      },
      nuxt: {
        name: 'nuxt',
        doc: <Doc.DocV4AndV5Nuxt />,
        source: 'https://github.com/salvia-kit/dashboard-v4-nuxt',
      },
    },
  },
  {
    id: 5,
    name: 'Salvia-kit Dashboard v5',
    demo: 'https://salvia-kit-dashboard-v5-demo.vercel.app',
    slug: 'dashboard-v5',
    image: img.imgV5,
    techno: {
      react: {
        name: 'react',
        doc: <Doc.DocV4AndV5React />,
        source: 'https://github.com/salvia-kit/dashboard-v5-cra',
      },
      next: {
        name: 'next',
        doc: <Doc.DocV4AndV5Next />,
        source: 'https://github.com/salvia-kit/dashboard-v5-nextjs',
      },
      vue: {
        name: 'vue',
        doc: <Doc.DocV4AndV5Vue />,
        source: 'https://github.com/salvia-kit/dashboard-v5-vue',
      },
      nuxt: {
        name: 'nuxt',
        doc: <Doc.DocV4AndV5Nuxt />,
        source: 'https://github.com/salvia-kit/dashboard-v5-nuxt',
      },
    },
  },
  {
    id: 6,
    name: 'Salvia-kit Dashboard v6',
    demo: 'https://salvia-kit-dashboard-v6-demo.vercel.app',
    slug: 'dashboard-v6',
    image: img.imgV6,
    techno: {
      react: {
        name: 'react',
        doc: <Doc.DocV6React />,
        source: 'https://github.com/salvia-kit/dashboard-v6-cra',
      },
      next: {
        name: 'next',
        doc: <Doc.DocV6Next />,
        source: 'https://github.com/salvia-kit/dashboard-v6-nextjs',
      },
      vue: {
        name: 'vue',
        doc: <Doc.DocV6Vue />,
        source: 'https://github.com/salvia-kit/dashboard-v6-vue',
      },
      nuxt: {
        name: 'nuxt',
        doc: <Doc.DocV6Nuxt />,
        source: 'https://github.com/salvia-kit/dashboard-v6-nuxt',
      },
    },
  },
  {
    id: 7,
    name: 'Salvia-kit Dashboard v7',
    slug: 'dashboard-v7',
    image: img.imgV7,
    demo: 'https://salvia-kit-dashboard-v7-demo.vercel.app',
    techno: {
      react: {
        name: 'react',
        doc: <Doc.DocV7React />,
        source: 'https://github.com/salvia-kit/dashboard-v7-cra',
      },
      next: {
        name: 'next',
        doc: <Doc.DocV7Next />,
        source: 'https://github.com/salvia-kit/dashboard-v7-nextjs',
      },
      vue: {
        name: 'vue',
        doc: <Doc.DocV7Vue />,
        source: 'https://github.com/salvia-kit/dashboard-v7-vue',
      },
      nuxt: {
        name: 'nuxt',
        doc: <Doc.DocV7Nuxt />,
        source: 'https://github.com/salvia-kit/dashboard-v7-nuxt',
      },
    },
  },
  {
    id: 8,
    name: 'Salvia-kit Dashboard v8',
    slug: 'dashboard-v8',
    image: img.imgV8,
    demo: 'https://salvia-kit-dashboard-v8-demo.vercel.app',
    techno: {
      react: {
        name: 'react',
        doc: <Doc.DocV8React />,
        source: 'https://github.com/salvia-kit/dashboard-v8-cra',
      },
      next: {
        name: 'next',
        doc: <Doc.DocV8Next />,
        source: 'https://github.com/salvia-kit/dashboard-v8-nextjs',
      },
      vue: {
        name: 'vue',
        doc: <Doc.DocV8Vue />,
        source: 'https://github.com/salvia-kit/dashboard-v8-vue',
      },
      nuxt: {
        name: 'nuxt',
        doc: <Doc.DocV8Nuxt />,
        source: 'https://github.com/salvia-kit/dashboard-v8-nuxt',
      },
    },
  },
];

export default data;
