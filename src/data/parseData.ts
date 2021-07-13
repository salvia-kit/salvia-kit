import dashboardsData from './dashboards';

function parseData(data: any) {
  return JSON.parse(JSON.stringify(data));
}

export async function getDashboard(slug: string) {
  const dashboards = await dashboardsData.filter((dash) => dash.slug === slug);
  const data = dashboards[0];
  return parseData(data);
}

export function getDoc(slug: string | string[] | undefined) {
  const dashboards: Array<any> = dashboardsData.filter(
    (dash) => dash.slug === slug,
  );
  const techno = dashboards[0]?.techno;

  return { techno };
}
