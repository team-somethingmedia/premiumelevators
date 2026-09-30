import { createFileRoute } from '@tanstack/react-router'
import { ArrowLink } from '@/components/site-shell'
import { images, pageHead, address, hoAddress, email, otherEmail } from '@/lib/site-data'

export const Route = createFileRoute('/about')({
  head: () => pageHead('About Premium Elevators | Lift Manufacturer in Ahmedabad & Baroda', 'Learn about Premium Elevators, leading elevator engineers delivering custom home lifts, commercial passenger elevators, hospital stretchers and industrial freight lifts across Ahmedabad and Baroda, Gujarat.', '/about'),
  component: About,
})

function About() {
  return <main>
    <section className="section-frame mx-auto grid min-h-[calc(100svh-86px)] max-w-[1560px] items-center gap-12 px-5 py-14 md:grid-cols-2 md:px-10 xl:px-16">
      <div>
        <h1 className="text-[clamp(44px,6vw,88px)] leading-[1.04] text-primary">About Premium Elevators.</h1>
        <p className="mt-8 max-w-[500px] text-[12px] text-gray-700">Premium Elevators is a specialized vertical mobility engineering company serving residential developers, architectural consultants, hospital administrators, industrial enterprises and private homeowners across Ahmedabad and Baroda, Gujarat.</p>
        <p className="mt-4 max-w-[500px] text-[12px] text-gray-700">We design, manufacture, install and maintain machine-room-less (MRL) gearless lifts, hydraulic home elevators, heavy industrial freight lifts and panoramic glass capsules built strictly to Bureau of Indian Standards (IS 14665) specifications.</p>
        <div className="mt-10 flex flex-wrap gap-8">
          <ArrowLink to="/lifts">Explore our lift systems</ArrowLink>
          <ArrowLink to="/contact">Contact engineering team</ArrowLink>
        </div>
      </div>
      <div className="aspect-[4/5] max-h-[640px] overflow-hidden bg-primary/10">
        <img src={images.hero} alt="Premium Elevators architectural installation in Gujarat" width="1536" height="1024" className="editorial-image h-full w-full object-cover" />
      </div>
    </section>

    <section className="section-frame flex min-h-[calc(100svh-86px)] items-center border-t border-primary/20 px-5 py-16 md:px-10 xl:px-16">
      <div className="mx-auto grid w-full max-w-[1432px] gap-12 md:grid-cols-2 md:gap-20">
        <div>
          <h2 className="text-[clamp(36px,5vw,72px)] leading-[1.05] text-primary">Engineering principles & local commitment.</h2>
          <p className="mt-8 text-[12px] text-gray-700">Our engineering methodology prioritizes passenger safety, energy efficiency through regenerative VVVF drives, smooth vibration-free acceleration and shallow-pit compact footprint designs tailored for contemporary Gujarat architecture.</p>
        </div>
        <div className="space-y-6 border-t border-primary/30 pt-6">
          <div className="border-b border-primary/20 pb-4">
            <div className="text-[14px] text-primary">Ahmedabad Corporate Office</div>
            <p className="mt-1 text-[12px] text-gray-700">{hoAddress}</p>
          </div>
          <div className="border-b border-primary/20 pb-4">
            <div className="text-[14px] text-primary">Baroda Regional Operations</div>
            <p className="mt-1 text-[12px] text-gray-700">{address}</p>
          </div>
          <div>
            <div className="text-[14px] text-primary">Direct Communication</div>
            <p className="mt-1 text-[12px] text-gray-700">{email} · {otherEmail}</p>
          </div>
          <div className="pt-2">
            <ArrowLink to="/services">View engineering services</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  </main>
}
