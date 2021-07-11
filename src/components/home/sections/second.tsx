import Image from 'next/image';
import ss from '../../../../public/Vite.png';

const data = {
  img: ss,
};
const HomeSecondSection = () => (
  <section className="flex mb-12 mt-32">
    <div className="w-6/12 bg-red-500"></div>
    <div className="w-6/12">
      <Image src={data.img} alt="jean" />
    </div>
  </section>
);

export default HomeSecondSection;
