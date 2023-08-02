import Image from 'next/image';
import teacherImg from '@/public/images/others/teacher.png';

export default function HomeThirdSection() {
  return (
    <section className="mb-16 md:mb-32">
      <h2 className="text-center text-3xl font-bold">No Vendor Lock-in</h2>
      <div className="flex mt-4 md:mt-8">
        <div className="2xl:pt-16 w-full md:pr-2 md:w-6/12">
          <p className="mt-6">
            Salvia-kit is created to solve a problem I often encountered when
            using dashboards owned by third party developers or companies. that
            is <strong>vendor lock-in</strong>.
          </p>
          <p className="mt-6">
            These dashboards often contained many configurations with several
            scripts, which still did not allow to export them and integrate them
            easily into an existing project. Therefore, it was always necessary
            to use the repository provided by the owner of the dashboard.
          </p>
          <p className="mt-6">
            This is what motivated me to create dashboards that can be easily
            integrated into existing projects with simple, readable code and
            documentation designed for developers.
          </p>
          <p className="mt-6">
            Built with <strong>Tailwind CSS</strong>, they are fully
            customizable and without external dependencies. Each dashboard has 7
            templates. one for <strong>React with vite</strong>,{' '}
            <strong>Next.js</strong>, <strong>Svelte kit</strong>,{' '}
            <strong>Vue 3 with vite</strong>, <strong>Nuxt 3</strong>,{' '}
            <strong>Solid</strong> and <strong>Angular</strong>
          </p>
        </div>
        <div className="hidden md:flex md:w-6/12">
          <Image
            src={teacherImg}
            alt="Salvia-kit guide"
            placeholder="blur"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
}
