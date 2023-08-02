import { dashboards } from '@/data/dashboards';
import DashboardCard from '@/components/DashboardCard';

const HomeArrivalSection = () => (
  <section className="mb-16 mt-44 md:mb-32">
    <h2 className="text-center text-3xl font-bold">
      Discover Our Latest
      <br />
      Dashboard
    </h2>
    <div className="flex justify-center mt-12">
      <DashboardCard
        data={dashboards[9]}
        className="pb-12 w-full md:p-3 md:pb-0 md:w-6/12"
      />
    </div>
  </section>
);

export default HomeArrivalSection;
