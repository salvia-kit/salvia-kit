import Image from 'next/image';
import ss from '../../../../public/ss.png';
const HomeSecondSection = () => (
  <section className="flex mb-12 mt-32">
    <div className="w-6/12"></div>
    <div className="w-6/12">
      <Image src={ss} />
    </div>
  </section>
);

export default HomeSecondSection;
