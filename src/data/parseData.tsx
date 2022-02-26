import data from './data';
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
};

interface IProps {
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
  const dashboards: Array<IProps> = data.map((data) => ({
    id: data.id,
    name: data.name,
    slug: data.slug,
    image: data.image,
    demo: data.demo,
    techno: data.techno[name],
  }));
  return dashboards;
}

function getDashboardByTechnologie(name: keyof TechnoTypes, slug: any) {
  const dashboards: Array<IProps> = data.filter((dash) => dash.slug === slug);
  return {
    name: dashboards[0]?.name,
    slug: dashboards[0]?.slug,
    image: dashboards[0]?.image,
    demo: dashboards[0]?.demo,
    techno: dashboards[0]?.techno[name],
  };
}

async function getDashboard(slug: string) {
  const dashboards: Array<IProps> = data.filter((dash) => dash.slug === slug);
  const dashboard = dashboards[0];
  return parseData(dashboard);
}

function getTechno(slug: string | string[] | undefined) {
  const dashboards: Array<IProps> = data.filter((dash) => dash.slug === slug);
  return dashboards[0]?.techno;
}

function isTechno(name: string) {
  switch (name) {
    case 'react':
      return 'React';
    case 'next':
      return 'Next.js';
    case 'vue':
      return 'Vue';
    case 'nuxt':
      return 'Nuxt.js';
    case 'svelte':
      return 'Svelte Kit';
    default:
      return null;
  }
}

export {
  isTechno,
  getTechno,
  parseData,
  getDashboard,
  getDashboardByTechnologie,
  getDashboardsByTechnologie,
};
