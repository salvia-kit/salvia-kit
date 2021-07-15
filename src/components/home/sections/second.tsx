import data from '@/src/data/data';
import DashboardCard from '@/src/components/dashboardCard';

const HomeSecondSection = () => (
  <section className="mb-16 mt-44 md:mb-32">
    <h2 className="text-center text-3xl font-bold">
      Discover Our Latest
      <br />
      Dashboards
    </h2>
    <div className="flex flex-wrap mt-12">
      {data.slice(0, 3).map((dash) => (
        <DashboardCard
          key={dash.id}
          data={dash}
          className="pb-12 w-full md:p-3 md:pb-0 md:w-4/12"
        />
      ))}
    </div>
  </section>
);

export default HomeSecondSection;
