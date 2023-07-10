import * as img from './images';
import { SvelteDoc } from '@/docs/shared/svelte/doc';
import { AngularDoc } from '@/docs/shared/angular/doc';
import { VueNuxtDoc } from '@/docs/shared/vue-nuxt/doc';
import { ReactNextSolidDoc } from '@/docs/shared/react-next-solid/doc';

const dashboards = [
  {
    id: 1,
    name: 'Salvia-kit Dashboard v1',
    slug: 'dashboard-v1',
    image: img.dashV1,
    demo: 'https://salvia-kit-dashboard-v1-demo.vercel.app',
    techno: {
      react: {
        name: 'react',
        source:
          'https://github.com/salvia-kit/react-dashboards/tree/main/dashboard-v1',
        doc: <ReactNextSolidDoc version={1} techno="react" snippet="long" />,
      },
      next: {
        name: 'next',
        source:
          'https://github.com/salvia-kit/next-dashboards/tree/main/dashboard-v1',
        doc: <ReactNextSolidDoc version={1} techno="next" snippet="long" />,
      },
      solid: {
        name: 'solid',
        source:
          'https://github.com/salvia-kit/solid-dashboards/tree/main/dashboard-v1',
        doc: <ReactNextSolidDoc version={1} techno="solid" snippet="long" />,
      },
      vue: {
        name: 'vue',
        doc: <VueNuxtDoc techno="vue" version={1} snippet="long" />,
        source:
          'https://github.com/salvia-kit/vue-dashboards/tree/main/dashboard-v1',
      },
      nuxt: {
        name: 'nuxt',
        doc: <VueNuxtDoc techno="nuxt" version={1} snippet="long" />,
        source:
          'https://github.com/salvia-kit/nuxt-dashboards/tree/main/dashboard-v1',
      },
      svelte: {
        name: 'svelte',
        doc: <SvelteDoc snippet="long" version={1} />,
        source:
          'https://github.com/salvia-kit/svelte-dashboards/tree/main/dashboard-v1',
      },
      angular: {
        name: 'angular',
        doc: <AngularDoc snippet="long" version={1} />,
        source:
          'https://github.com/salvia-kit/angular-dashboards/tree/main/dashboard-v1',
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
        doc: <ReactNextSolidDoc techno="react" version={2} snippet="long" />,
        source:
          'https://github.com/salvia-kit/react-dashboards/tree/main/dashboard-v2',
      },
      next: {
        name: 'next',
        doc: <ReactNextSolidDoc techno="next" version={2} snippet="long" />,
        source:
          'https://github.com/salvia-kit/next-dashboards/tree/main/dashboard-v2',
      },
      solid: {
        name: 'solid',
        doc: <ReactNextSolidDoc techno="solid" version={2} snippet="long" />,
        source:
          'https://github.com/salvia-kit/solid-dashboards/tree/main/dashboard-v2',
      },
      vue: {
        name: 'vue',
        doc: <VueNuxtDoc techno="vue" version={2} snippet="long" />,
        source:
          'https://github.com/salvia-kit/vue-dashboards/tree/main/dashboard-v2',
      },
      nuxt: {
        name: 'nuxt',
        doc: <VueNuxtDoc techno="nuxt" version={2} snippet="long" />,
        source:
          'https://github.com/salvia-kit/nuxt-dashboards/tree/main/dashboard-v2',
      },
      svelte: {
        name: 'svelte',
        doc: <SvelteDoc snippet="long" version={2} />,
        source:
          'https://github.com/salvia-kit/svelte-dashboards/tree/main/dashboard-v2',
      },
      angular: {
        name: 'angular',
        doc: <AngularDoc snippet="long" version={2} />,
        source:
          'https://github.com/salvia-kit/angular-dashboards/tree/main/dashboard-v2',
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
        doc: <ReactNextSolidDoc techno="react" version={3} snippet="short" />,
        source:
          'https://github.com/salvia-kit/react-dashboards/tree/main/dashboard-v3',
      },
      next: {
        name: 'next',
        doc: <ReactNextSolidDoc techno="next" version={3} snippet="short" />,
        source:
          'https://github.com/salvia-kit/next-dashboards/tree/main/dashboard-v3',
      },
      solid: {
        name: 'solid',
        doc: <ReactNextSolidDoc techno="solid" version={3} snippet="short" />,
        source:
          'https://github.com/salvia-kit/solid-dashboards/tree/main/dashboard-v3',
      },
      vue: {
        name: 'vue',
        doc: <VueNuxtDoc techno="vue" version={3} snippet="short" />,
        source:
          'https://github.com/salvia-kit/vue-dashboards/tree/main/dashboard-v3',
      },
      nuxt: {
        name: 'nuxt',
        doc: <VueNuxtDoc techno="nuxt" version={3} snippet="short" />,
        source:
          'https://github.com/salvia-kit/nuxt-dashboards/tree/main/dashboard-v3',
      },
      svelte: {
        name: 'svelte',
        doc: <SvelteDoc snippet="short" version={3} />,
        source:
          'https://github.com/salvia-kit/svelte-dashboards/tree/main/dashboard-v3',
      },
      angular: {
        name: 'angular',
        doc: <AngularDoc snippet="short" version={3} />,
        source:
          'https://github.com/salvia-kit/angular-dashboards/tree/main/dashboard-v3',
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
        doc: <ReactNextSolidDoc techno="react" version={4} snippet="short" />,
        source:
          'https://github.com/salvia-kit/react-dashboards/tree/main/dashboard-v4',
      },
      next: {
        name: 'next',
        doc: <ReactNextSolidDoc techno="next" version={4} snippet="short" />,
        source:
          'https://github.com/salvia-kit/next-dashboards/tree/main/dashboard-v4',
      },
      solid: {
        name: 'solid',
        doc: <ReactNextSolidDoc techno="solid" version={4} snippet="short" />,
        source:
          'https://github.com/salvia-kit/solid-dashboards/tree/main/dashboard-v4',
      },
      vue: {
        name: 'vue',
        doc: <VueNuxtDoc techno="vue" version={4} snippet="short" />,
        source:
          'https://github.com/salvia-kit/vue-dashboards/tree/main/dashboard-v4',
      },
      nuxt: {
        name: 'nuxt',
        doc: <VueNuxtDoc techno="nuxt" version={4} snippet="short" />,
        source:
          'https://github.com/salvia-kit/nuxt-dashboards/tree/main/dashboard-v4',
      },
      svelte: {
        name: 'svelte',
        doc: <SvelteDoc snippet="short" version={4} />,
        source:
          'https://github.com/salvia-kit/svelte-dashboards/tree/main/dashboard-v4',
      },
      angular: {
        name: 'angular',
        doc: <AngularDoc snippet="short" version={4} />,
        source:
          'https://github.com/salvia-kit/angular-dashboards/tree/main/dashboard-v4',
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
        doc: <ReactNextSolidDoc techno="react" version={5} snippet="short" />,
        source:
          'https://github.com/salvia-kit/react-dashboards/tree/main/dashboard-v5',
      },
      next: {
        name: 'next',
        doc: <ReactNextSolidDoc techno="next" version={5} snippet="short" />,
        source:
          'https://github.com/salvia-kit/next-dashboards/tree/main/dashboard-v5',
      },
      solid: {
        name: 'solid',
        doc: <ReactNextSolidDoc techno="solid" version={5} snippet="short" />,
        source:
          'https://github.com/salvia-kit/solid-dashboards/tree/main/dashboard-v5',
      },
      vue: {
        name: 'vue',
        doc: <VueNuxtDoc techno="vue" version={5} snippet="short" />,
        source:
          'https://github.com/salvia-kit/vue-dashboards/tree/main/dashboard-v5',
      },
      nuxt: {
        name: 'nuxt',
        doc: <VueNuxtDoc techno="nuxt" version={5} snippet="short" />,
        source:
          'https://github.com/salvia-kit/nuxt-dashboards/tree/main/dashboard-v5',
      },
      svelte: {
        name: 'svelte',
        doc: <SvelteDoc snippet="short" version={5} />,
        source:
          'https://github.com/salvia-kit/svelte-dashboards/tree/main/dashboard-v5',
      },
      angular: {
        name: 'angular',
        doc: <AngularDoc snippet="short" version={5} />,
        source:
          'https://github.com/salvia-kit/angular-dashboards/tree/main/dashboard-v5',
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
        doc: <ReactNextSolidDoc techno="react" version={6} snippet="short" />,
        source:
          'https://github.com/salvia-kit/react-dashboards/tree/main/dashboard-v6',
      },
      next: {
        name: 'next',
        doc: <ReactNextSolidDoc techno="next" version={6} snippet="short" />,
        source:
          'https://github.com/salvia-kit/next-dashboards/tree/main/dashboard-v6',
      },
      solid: {
        name: 'solid',
        doc: <ReactNextSolidDoc techno="solid" version={6} snippet="short" />,
        source:
          'https://github.com/salvia-kit/solid-dashboards/tree/main/dashboard-v6',
      },
      vue: {
        name: 'vue',
        doc: <VueNuxtDoc techno="vue" version={6} snippet="short" />,
        source:
          'https://github.com/salvia-kit/vue-dashboards/tree/main/dashboard-v6',
      },
      nuxt: {
        name: 'nuxt',
        doc: <VueNuxtDoc techno="nuxt" version={6} snippet="short" />,
        source:
          'https://github.com/salvia-kit/nuxt-dashboards/tree/main/dashboard-v6',
      },
      svelte: {
        name: 'svelte',
        doc: <SvelteDoc snippet="short" version={6} />,
        source:
          'https://github.com/salvia-kit/svelte-dashboards/tree/main/dashboard-v6',
      },
      angular: {
        name: 'angular',
        doc: <AngularDoc snippet="short" version={6} />,
        source:
          'https://github.com/salvia-kit/angular-dashboards/tree/main/dashboard-v6',
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
        doc: <ReactNextSolidDoc techno="react" version={7} snippet="long" />,
        source:
          'https://github.com/salvia-kit/react-dashboards/tree/main/dashboard-v7',
      },
      next: {
        name: 'next',
        doc: <ReactNextSolidDoc techno="next" version={7} snippet="long" />,
        source:
          'https://github.com/salvia-kit/next-dashboards/tree/main/dashboard-v7',
      },
      solid: {
        name: 'solid',
        doc: <ReactNextSolidDoc techno="solid" version={7} snippet="long" />,
        source:
          'https://github.com/salvia-kit/solid-dashboards/tree/main/dashboard-v7',
      },
      vue: {
        name: 'vue',
        doc: <VueNuxtDoc techno="vue" version={7} snippet="long" />,
        source:
          'https://github.com/salvia-kit/vue-dashboards/tree/main/dashboard-v7',
      },
      nuxt: {
        name: 'nuxt',
        doc: <VueNuxtDoc techno="nuxt" version={7} snippet="long" />,
        source:
          'https://github.com/salvia-kit/nuxt-dashboards/tree/main/dashboard-v7',
      },
      svelte: {
        name: 'svelte',
        doc: <SvelteDoc snippet="long" version={7} />,
        source:
          'https://github.com/salvia-kit/svelte-dashboards/tree/main/dashboard-v7',
      },
      angular: {
        name: 'angular',
        doc: <AngularDoc snippet="long" version={7} />,
        source:
          'https://github.com/salvia-kit/angular-dashboards/tree/main/dashboard-v7',
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
        doc: <ReactNextSolidDoc techno="react" version={8} snippet="special" />,
        source:
          'https://github.com/salvia-kit/react-dashboards/tree/main/dashboard-v8',
      },
      next: {
        name: 'next',
        doc: <ReactNextSolidDoc techno="next" version={8} snippet="special" />,
        source:
          'https://github.com/salvia-kit/next-dashboards/tree/main/dashboard-v8',
      },
      solid: {
        name: 'solid',
        doc: <ReactNextSolidDoc techno="solid" version={8} snippet="special" />,
        source:
          'https://github.com/salvia-kit/solid-dashboards/tree/main/dashboard-v8',
      },
      vue: {
        name: 'vue',
        doc: <VueNuxtDoc techno="vue" version={8} snippet="special" />,
        source:
          'https://github.com/salvia-kit/vue-dashboards/tree/main/dashboard-v8',
      },
      nuxt: {
        name: 'nuxt',
        doc: <VueNuxtDoc techno="nuxt" version={8} snippet="special" />,
        source:
          'https://github.com/salvia-kit/nuxt-dashboards/tree/main/dashboard-v8',
      },
      svelte: {
        name: 'svelte',
        doc: <SvelteDoc snippet="special" version={8} />,
        source:
          'https://github.com/salvia-kit/svelte-dashboards/tree/main/dashboard-v8',
      },
      angular: {
        name: 'angular',
        doc: <AngularDoc snippet="special" version={8} />,
        source:
          'https://github.com/salvia-kit/angular-dashboards/tree/main/dashboard-v8',
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
        doc: <ReactNextSolidDoc techno="react" version={9} snippet="long" />,
        source:
          'https://github.com/salvia-kit/react-dashboards/tree/main/dashboard-v9',
      },
      next: {
        name: 'next',
        doc: <ReactNextSolidDoc techno="next" version={9} snippet="long" />,
        source:
          'https://github.com/salvia-kit/next-dashboards/tree/main/dashboard-v9',
      },
      solid: {
        name: 'solid',
        doc: <ReactNextSolidDoc techno="solid" version={9} snippet="long" />,
        source:
          'https://github.com/salvia-kit/solid-dashboards/tree/main/dashboard-v9',
      },
      vue: {
        name: 'vue',
        doc: <VueNuxtDoc techno="vue" version={9} snippet="short" />,
        source:
          'https://github.com/salvia-kit/vue-dashboards/tree/main/dashboard-v9',
      },
      nuxt: {
        name: 'nuxt',
        doc: <VueNuxtDoc techno="nuxt" version={9} snippet="short" />,
        source:
          'https://github.com/salvia-kit/nuxt-dashboards/tree/main/dashboard-v9',
      },
      svelte: {
        name: 'svelte',
        doc: <SvelteDoc snippet="long" version={9} />,
        source:
          'https://github.com/salvia-kit/svelte-dashboards/tree/main/dashboard-v9',
      },
      angular: {
        name: 'angular',
        doc: <AngularDoc snippet="short" version={9} />,
        source:
          'https://github.com/salvia-kit/angular-dashboards/tree/main/dashboard-v9',
      },
    },
  },
  {
    id: 10,
    name: 'Salvia-kit Dashboard v10',
    slug: 'dashboard-v10',
    image: img.dashV10,
    demo: 'https://salvia-kit-dashboard-v10-demo.vercel.app',
    techno: {
      react: {
        name: 'react',
        doc: (
          <ReactNextSolidDoc techno="react" version={10} snippet="special" />
        ),
        source:
          'https://github.com/salvia-kit/react-dashboards/tree/main/dashboard-v10',
      },
      next: {
        name: 'next',
        doc: <ReactNextSolidDoc techno="next" version={10} snippet="special" />,
        source:
          'https://github.com/salvia-kit/next-dashboards/tree/main/dashboard-v10',
      },
      solid: {
        name: 'solid',
        doc: (
          <ReactNextSolidDoc techno="solid" version={10} snippet="special" />
        ),
        source:
          'https://github.com/salvia-kit/solid-dashboards/tree/main/dashboard-v10',
      },
      svelte: {
        name: 'svelte',
        doc: <SvelteDoc snippet="short" version={10} />,
        source:
          'https://github.com/salvia-kit/svelte-dashboards/tree/main/dashboard-v10',
      },
    },
  },
];

export { dashboards };
