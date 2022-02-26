import * as img from './images';
import DocV9Next from '@/docs/v9/next/doc';
import DocV9React from '@/docs/v9/react/doc';
import DocNuxtVue from '@/docs/shared/vue-nuxt/doc';
import DocSvelte from '@/docs/shared/svelte/doc';
import DocNextReact from '@/docs/shared/next-react/doc';

const data = [
  {
    id: 1,
    name: 'Salvia-kit Dashboard v1',
    slug: 'dashboard-v1',
    image: img.dashV1,
    demo: 'https://salvia-kit-dashboard-v1-demo.vercel.app',
    techno: {
      react: {
        name: 'react',
        doc: <DocNextReact styleDir="dashboard" techno="react" />,
        source: 'https://github.com/salvia-kit/dashboard-v1-cra',
      },
      next: {
        name: 'next',
        doc: <DocNextReact styleDir="dashboard" techno="next" />,
        source: 'https://github.com/salvia-kit/dashboard-v1-nextjs',
      },
      vue: {
        name: 'vue',
        doc: <DocNuxtVue techno="vue" section={true} />,
        source: 'https://github.com/salvia-kit/dashboard-v1-vue',
      },
      nuxt: {
        name: 'nuxt',
        doc: <DocNuxtVue techno="nuxt" section={true} />,
        source: 'https://github.com/salvia-kit/dashboard-v1-nuxt',
      },
      svelte: {
        name: 'svelte',
        doc: <DocSvelte snippet="long" />,
        source: 'https://github.com/salvia-kit/dashboard-v1-svelte',
      },
    },
  },
  {
    id: 2,
    name: 'Salvia-kit Dashboard v2',
    slug: 'dashboard-v2',
    image: img.dashV2,
    demo: 'https://salvia-kit-dashboard-v2-demo.vercel.app',
    techno: {
      react: {
        name: 'react',
        doc: <DocNextReact styleDir="dashboard" techno="react" />,
        source: 'https://github.com/salvia-kit/dashboard-v2-cra',
      },
      next: {
        name: 'next',
        doc: <DocNextReact styleDir="dashboard" techno="react" />,
        source: 'https://github.com/salvia-kit/dashboard-v2-nextjs',
      },
      vue: {
        name: 'vue',
        doc: <DocNuxtVue techno="vue" section={true} />,
        source: 'https://github.com/salvia-kit/dashboard-v2-vue',
      },
      nuxt: {
        name: 'nuxt',
        doc: <DocNuxtVue techno="nuxt" section={true} />,
        source: 'https://github.com/salvia-kit/dashboard-v2-nuxt',
      },
      svelte: {
        name: 'svelte',
        doc: <DocSvelte snippet="long" />,
        source: 'https://github.com/salvia-kit/dashboard-v2-svelte',
      },
    },
  },
  {
    id: 3,
    name: 'Salvia-kit Dashboard v3',
    slug: 'dashboard-v3',
    image: img.dashV3,
    demo: 'https://salvia-kit-dashboard-v3-demo.vercel.app',
    techno: {
      react: {
        name: 'react',
        doc: (
          <DocNextReact
            styleDir="sidenav"
            techno="react"
            mainComp={true}
            snippet="short"
          />
        ),
        source: 'https://github.com/salvia-kit/dashboard-v3-cra',
      },
      next: {
        name: 'next',
        doc: (
          <DocNextReact
            styleDir="sidenav"
            techno="next"
            mainComp={true}
            snippet="short"
          />
        ),
        source: 'https://github.com/salvia-kit/dashboard-v3-nextjs',
      },
      vue: {
        name: 'vue',
        doc: <DocNuxtVue techno="vue" />,
        source: 'https://github.com/salvia-kit/dashboard-v3-vue',
      },
      nuxt: {
        name: 'nuxt',
        doc: <DocNuxtVue techno="nuxt" />,
        source: 'https://github.com/salvia-kit/dashboard-v3-nuxt',
      },
      svelte: {
        name: 'svelte',
        doc: <DocSvelte snippet="short" />,
        source: 'https://github.com/salvia-kit/dashboard-v3-svelte',
      },
    },
  },
  {
    id: 4,
    name: 'Salvia-kit Dashboard v4',
    slug: 'dashboard-v4',
    image: img.dashV4,
    demo: 'https://salvia-kit-dashboard-v4-demo.vercel.app',
    techno: {
      react: {
        name: 'react',
        doc: <DocNextReact techno="react" snippet="short" styleDir="sidenav" />,
        source: 'https://github.com/salvia-kit/dashboard-v4-cra',
      },
      next: {
        name: 'next',
        doc: <DocNextReact styleDir="sidenav" techno="next" snippet="short" />,
        source: 'https://github.com/salvia-kit/dashboard-v4-nextjs',
      },
      vue: {
        name: 'vue',
        doc: <DocNuxtVue techno="vue" />,
        source: 'https://github.com/salvia-kit/dashboard-v4-vue',
      },
      nuxt: {
        name: 'nuxt',
        doc: <DocNuxtVue techno="nuxt" />,
        source: 'https://github.com/salvia-kit/dashboard-v4-nuxt',
      },
      svelte: {
        name: 'svelte',
        doc: <DocSvelte snippet="short" />,
        source: 'https://github.com/salvia-kit/dashboard-v4-svelte',
      },
    },
  },
  {
    id: 5,
    name: 'Salvia-kit Dashboard v5',
    demo: 'https://salvia-kit-dashboard-v5-demo.vercel.app',
    slug: 'dashboard-v5',
    image: img.dashV5,
    techno: {
      react: {
        name: 'react',
        doc: <DocNextReact styleDir="sidenav" techno="react" snippet="short" />,
        source: 'https://github.com/salvia-kit/dashboard-v5-cra',
      },
      next: {
        name: 'next',
        doc: <DocNextReact styleDir="sidenav" techno="next" snippet="short" />,
        source: 'https://github.com/salvia-kit/dashboard-v5-nextjs',
      },
      vue: {
        name: 'vue',
        doc: <DocNuxtVue techno="vue" />,
        source: 'https://github.com/salvia-kit/dashboard-v5-vue',
      },
      nuxt: {
        name: 'nuxt',
        doc: <DocNuxtVue techno="nuxt" />,
        source: 'https://github.com/salvia-kit/dashboard-v5-nuxt',
      },
      svelte: {
        name: 'svelte',
        doc: <DocSvelte snippet="short" />,
        source: 'https://github.com/salvia-kit/dashboard-v5-svelte',
      },
    },
  },
  {
    id: 6,
    name: 'Salvia-kit Dashboard v6',
    demo: 'https://salvia-kit-dashboard-v6-demo.vercel.app',
    slug: 'dashboard-v6',
    image: img.dashV6,
    techno: {
      react: {
        name: 'react',
        doc: <DocNextReact styleDir="sidenav" techno="react" snippet="short" />,
        source: 'https://github.com/salvia-kit/dashboard-v6-cra',
      },
      next: {
        name: 'next',
        doc: <DocNextReact styleDir="sidenav" techno="next" snippet="short" />,
        source: 'https://github.com/salvia-kit/dashboard-v6-nextjs',
      },
      vue: {
        name: 'vue',
        doc: <DocNuxtVue techno="vue" />,
        source: 'https://github.com/salvia-kit/dashboard-v6-vue',
      },
      nuxt: {
        name: 'nuxt',
        doc: <DocNuxtVue techno="nuxt" />,
        source: 'https://github.com/salvia-kit/dashboard-v6-nuxt',
      },
      svelte: {
        name: 'svelte',
        doc: <DocSvelte snippet="short" />,
        source: 'https://github.com/salvia-kit/dashboard-v6-svelte',
      },
    },
  },
  {
    id: 7,
    name: 'Salvia-kit Dashboard v7',
    slug: 'dashboard-v7',
    image: img.dashV7,
    demo: 'https://salvia-kit-dashboard-v7-demo.vercel.app',
    techno: {
      react: {
        name: 'react',
        doc: <DocNextReact styleDir="sidenav" techno="react" snippet="long" />,
        source: 'https://github.com/salvia-kit/dashboard-v7-cra',
      },
      next: {
        name: 'next',
        doc: <DocNextReact styleDir="sidenav" techno="next" snippet="long" />,
        source: 'https://github.com/salvia-kit/dashboard-v7-nextjs',
      },
      vue: {
        doc: <DocNuxtVue techno="vue" section={true} />,
        source: 'https://github.com/salvia-kit/dashboard-v7-vue',
      },
      nuxt: {
        name: 'nuxt',
        doc: <DocNuxtVue techno="vue" section={true} />,
        source: 'https://github.com/salvia-kit/dashboard-v7-nuxt',
      },
      svelte: {
        name: 'svelte',
        doc: <DocSvelte snippet="long" />,
        source: 'https://github.com/salvia-kit/dashboard-v7-svelte',
      },
    },
  },
  {
    id: 8,
    name: 'Salvia-kit Dashboard v8',
    slug: 'dashboard-v8',
    image: img.dashV8,
    demo: 'https://salvia-kit-dashboard-v8-demo.vercel.app',
    techno: {
      react: {
        name: 'react',
        doc: (
          <DocNextReact
            styleDir="sidenav"
            techno="react"
            snippet="long"
            version={8}
          />
        ),
        source: 'https://github.com/salvia-kit/dashboard-v8-cra',
      },
      next: {
        name: 'next',
        doc: (
          <DocNextReact
            styleDir="sidenav"
            techno="next"
            snippet="long"
            version={8}
          />
        ),
        source: 'https://github.com/salvia-kit/dashboard-v8-nextjs',
      },
      vue: {
        name: 'vue',
        doc: <DocNuxtVue techno="vue" section={true} version={8} />,
        source: 'https://github.com/salvia-kit/dashboard-v8-vue',
      },
      nuxt: {
        name: 'nuxt',
        doc: <DocNuxtVue techno="vue" section={true} version={8} />,
        source: 'https://github.com/salvia-kit/dashboard-v8-nuxt',
      },
      svelte: {
        name: 'svelte',
        doc: <DocSvelte snippet="long" version={8} />,
        source: 'https://github.com/salvia-kit/dashboard-v8-svelte',
      },
    },
  },
  {
    id: 9,
    name: 'Salvia-kit Dashboard v9',
    slug: 'dashboard-v9',
    image: img.dashV9,
    demo: 'https://salvia-kit-dashboard-v9-demo.vercel.app',
    techno: {
      react: {
        name: 'react',
        doc: <DocV9React />,
        source: 'https://github.com/salvia-kit/dashboard-v9-cra',
      },
      next: {
        name: 'next',
        doc: <DocV9Next />,
        source: 'https://github.com/salvia-kit/dashboard-v9-nextjs',
      },
    },
  },
];

export default data;
