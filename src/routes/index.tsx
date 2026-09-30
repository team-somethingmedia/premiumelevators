import { createFileRoute, Link } from '@tanstack/react-router'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowDown01Icon, ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { ArrowLink } from '@/components/site-shell'
import { images, lifts, services, pageHead, authorityBacklinks } from '@/lib/site-data'

export const Route = createFileRoute('/')({
  head: () => pageHead('Best Lifts & Elevators in Ahmedabad & Baroda | Premium Elevators', 'Leading lift manufacturer and installer in Ahmedabad and Baroda. Home lifts, passenger elevators, hospital lifts, industrial goods lifts, hydraulic and capsule elevators with BIS compliance and 24/7 maintenance support.', '/'),
  component: Home,
})

function Home() {
  return <main>
    <section className="section-frame relative flex min-h-[calc(100svh-86px)] flex-col justify-between overflow-hidden border-b border-primary/20 px-5 py-10 md:px-10 md:py-16 xl:px-16">
      <img src={images.hero} alt="Modern passenger and home elevator installation in Ahmedabad" width="1536" height="1024" fetchPriority="high" className="editorial-image absolute inset-0 h-full w-full object-cover object-center opacity-35" />
      <div className="absolute inset-0 bg-background/40" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1432px] flex-1 flex-col justify-between">
        <div className="flex justify-end text-[12px] text-primary">Ahmedabad / Baroda</div>
        <div className="max-w-[920px] pb-8 md:pb-12">
          <h1 className="text-[clamp(44px,7.5vw,110px)] leading-[0.98] text-primary">Best Home Lifts & Elevators in Ahmedabad & Baroda.</h1>
          <p className="mt-8 max-w-[620px] text-[12px] text-gray-700">Engineering advanced vertical mobility for private residences, commercial towers, multi-specialty hospitals and industrial manufacturing plants across Gujarat with silent MRL technology, BIS safety compliance and local maintenance teams.</p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <ArrowLink to="/lifts">Explore all lifts</ArrowLink>
            <ArrowLink to="/contact">Discuss your project</ArrowLink>
          </div>
        </div>
        <div className="flex items-end justify-between border-t border-primary/40 pt-5 text-[12px] text-primary">
          <span>Ahmedabad · Baroda · Gujarat</span>
          <a href="#lift-collection" aria-label="Scroll to lift collection"><HugeiconsIcon icon={ArrowDown01Icon} size={22} strokeWidth={1.3}/></a>
        </div>
      </div>
    </section>

    <section id="lift-collection" className="section-frame mx-auto flex min-h-[calc(100svh-86px)] max-w-[1560px] flex-col justify-center px-5 py-16 md:px-10 xl:px-16">
      <div className="mb-10 flex items-end justify-between gap-4">
        <h2 className="text-[clamp(36px,5vw,72px)] leading-[1.05] text-primary">Lifts for every architectural space.</h2>
        <ArrowLink to="/lifts" className="shrink-0">All lifts</ArrowLink>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {lifts.slice(0, 3).map((lift, i) => (
          <Link to="/lifts/$slug" params={{ slug: lift.slug }} key={lift.slug} className="group min-w-0">
            <div className="aspect-[4/3] overflow-hidden bg-primary/10">
              <img src={lift.image} alt={`${lift.name} installation example in Gujarat`} width={i === 0 ? 1024 : i === 1 ? 1536 : 1024} height={1024} loading="lazy" className="editorial-image h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
            </div>
            <div className="flex items-center justify-between border-b border-primary/30 py-4 text-primary">
              <h3 className="text-[20px] text-primary">{lift.name}</h3>
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={19} strokeWidth={1.4}/>
            </div>
            <p className="mt-2 line-clamp-2 text-[12px] text-gray-700">{lift.use}</p>
          </Link>
        ))}
      </div>
    </section>

    <section className="section-frame flex min-h-[calc(100svh-86px)] items-center border-y border-primary/20 px-5 py-16 md:px-10 xl:px-16">
      <div className="mx-auto grid w-full max-w-[1432px] gap-12 md:grid-cols-[1fr_1.2fr] md:gap-20">
        <div>
          <h2 className="text-[clamp(36px,5vw,72px)] leading-[1.05] text-primary">Engineering & service support across Gujarat.</h2>
          <p className="mt-8 max-w-[480px] text-[12px] text-gray-700">From initial shaft dimensions assessment, equipment manufacturing, precision mechanical erection to statutory government inspections and ongoing 24/7 breakdown assistance, our certified technicians support builders, architects and facility managers in Ahmedabad and Baroda.</p>
        </div>
        <div className="border-t border-primary/30">
          {services.slice(0, 4).map(service => (
            <Link to="/services/$slug" params={{ slug: service.slug }} key={service.slug} className="group flex items-center justify-between gap-4 border-b border-primary/30 py-5 text-primary">
              <span className="text-[17px] text-primary md:text-[22px]">{service.name}</span>
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={20} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          ))}
          <div className="mt-8">
            <ArrowLink to="/services">All services</ArrowLink>
          </div>
        </div>
      </div>
    </section>

    <section className="section-frame flex min-h-[calc(100svh-86px)] flex-col justify-center px-5 py-16 md:px-10 xl:px-16">
      <div className="mx-auto w-full max-w-[1432px]">
        <h2 className="max-w-[960px] text-[clamp(40px,6vw,84px)] leading-[1.05] text-primary">Certified safety & standards compliance.</h2>
        <p className="mt-8 max-w-[620px] text-[12px] text-gray-700">Every elevator manufactured and installed by Premium Elevators conforms to Indian Standard IS 14665, National Building Code (NBC 2016) regulations and Gujarat Lift Inspection Authority directives for fail-safe vertical transit.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {authorityBacklinks.map(auth => (
            <a key={auth.url} href={auth.url} target="_blank" rel="noopener noreferrer" className="group border border-primary/25 p-5 transition-colors hover:border-primary">
              <div className="flex items-center justify-between text-primary">
                <span className="text-[14px] text-primary">{auth.name}</span>
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} />
              </div>
              <p className="mt-3 text-[12px] text-gray-700">{auth.description}</p>
            </a>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-7">
          <ArrowLink to="/contact">Request a site survey</ArrowLink>
          <ArrowLink to="/about">About Premium Elevators</ArrowLink>
        </div>
      </div>
    </section>
  </main>
}
