import { dashboards } from '@/data/dashboards';
import DashboardCard from '@/components/DashboardCard';

const HomeSecondSection = () => (
  <section className="mb-16 md:mb-32">
    <h2 className="text-center text-3xl font-bold">
      Discover Our Current
      <br />
      Trends
    </h2>
    <div className="flex flex-wrap mt-12">
      {dashboards.slice(3, 6).map((dashboard) => (
        <DashboardCard
          data={dashboard}
          key={dashboard.id}
          className="pb-12 w-full md:p-3 md:pb-0 md:w-4/12"
        />
      ))}
    </div>
  </section>
);

export default HomeSecondSection;
