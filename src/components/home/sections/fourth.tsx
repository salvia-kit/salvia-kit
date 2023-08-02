import CustomImage from '@/components/CustomImage';
import oceanImg from '@/public/images/others/ocean.jpg';

export default function HomeFourthSection() {
  return (
    <section className="mb-16 md:mb-32">
      <h2 className="text-center text-3xl font-bold">
        With our know-how
        <br />
        We will serve you
      </h2>
      <div className="flex items-center justify-center mt-12">
        <div className="mx-2 md:mx-12">
          <span className="flex justify-center text-2xl font-bold">7</span>
          <span className="block mt-4 text-sm">Technologies</span>
        </div>
        <div className="mx-4 md:mx-12">
          <span className="flex justify-center text-2xl font-bold">10</span>
          <span className="block mt-4 text-sm">Dashboards</span>
        </div>
        <div className="mx-4 md:mx-12">
          <span className="flex justify-center text-2xl font-bold">65+</span>
          <span className="block mt-4 text-sm">Templates</span>
        </div>
      </div>
      <div className="grid mt-8 md:place-items-center">
        <CustomImage src={oceanImg} alt="Ocean" />
      </div>
    </section>
  );
}
