import { dashboards } from '@/data/dashboards';
import { ChildrenType } from '@/utils/globalTypes';

type TechnoTypes = {
  react: {
    doc: ChildrenType;
    name: string;
  };
  next: {
    doc: ChildrenType;
    name: string;
  };
  vue: {
    doc: ChildrenType;
    name: string;
  };
  nuxt: {
    doc: ChildrenType;
    name: string;
  };
  svelte: {
    doc: ChildrenType;
    name: string;
  };
  solid: {
    doc: ChildrenType;
    name: string;
  };
  angular: {
    doc: ChildrenType;
    name: string;
  };
};

interface Dashboard {
  id: number;
  name: string;
  slug: string;
  image: StaticImageData;
  techno: any;
  demo: string;
}

function parseData(data: any) {
  return JSON.parse(JSON.stringify(data));
}

function getDashboardsByTechnologie(name: keyof TechnoTypes) {
  const data: Array<Dashboard> = dashboards.map((data) => ({
    id: data.id,
    name: data.name,
    slug: data.slug,
    demo: data.demo,
    image: data.image,
    techno: data.techno[name],
  }));
  return data;
}

function getDashboardByTechnologie(name: keyof TechnoTypes, slug: any) {
  const dashboard = dashboards.find((dash) => dash.slug === slug) as Dashboard;
  return {
    name: dashboard?.name,
    slug: dashboard?.slug,
    demo: dashboard?.demo,
    image: dashboard?.image,
    techno: dashboard?.techno[name],
  };
}

async function getDashboard(slug: string) {
  const dashboard = dashboards.find((dash) => dash.slug === slug) as Dashboard;
  return parseData(dashboard);
}

function getTechno(slug: string | string[] | undefined) {
  const dashboard = dashboards.find((dash) => dash.slug === slug) as Dashboard;
  return dashboard?.techno;
}

function isTechno(name: string) {
  const technos = {
    vue: 'Vue',
    nuxt: 'Nuxt',
    react: 'React',
    next: 'Next.js',
    solid: 'Solid',
    angular: 'Angular',
    svelte: 'Svelte kit',
  } as never;

  return technos[name];
}

export {
  isTechno,
  getTechno,
  parseData,
  getDashboard,
  getDashboardByTechnologie,
  getDashboardsByTechnologie,
};
