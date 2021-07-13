import dashboardsData from '@/src/data/dashboards';
import DashboardCard from '@/src/components/dashboard-card';

const HomeSecondSection = () => (
  <section className="mb-16 mt-44 text-custom text-gray-700 md:mb-32">
    <h2 className="text-center text-3xl font-bold">
      Discover Our Latest
      <br />
      Dashboards
    </h2>
    <div className="flex flex-wrap mt-12">
      {dashboardsData.slice(0, 3).map((data) => (
        <DashboardCard
          key={data.id}
          data={data}
          className="pb-12 w-full md:p-3 md:pb-0 md:w-4/12"
        />
      ))}
    </div>
  </section>
);

export default HomeSecondSection;
