import { createFileRoute, Link } from '@tanstack/react-router'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { services, pageHead } from '@/lib/site-data'

export const Route = createFileRoute('/services/')({
  head: () => pageHead('Elevator Services in Ahmedabad & Baroda | Installation, Maintenance, Modernization & 24/7 Breakdown', 'Comprehensive lift and elevator engineering services in Ahmedabad and Baroda: Turnkey Installation, Annual Maintenance Contracts (AMC), Modernization, Safety Audits, Spares and 24/7 Emergency Support.', '/services'),
  component: Services,
})

function Services() {
  return (
    <main className="mx-auto flex min-h-[calc(100svh-86px)] max-w-[1560px] flex-col justify-center px-5 py-14 md:px-10 xl:px-16">
      <h1 className="mb-12 text-[clamp(44px,6.5vw,96px)] leading-none text-primary">Elevator services for Ahmedabad & Baroda.</h1>
      <div className="border-t border-primary/30">
        {services.map((s, i) => (
          <Link
            to="/services/$slug"
            params={{ slug: s.slug }}
            key={s.slug}
            className="group grid grid-cols-[40px_1fr_24px] items-center gap-4 border-b border-primary/30 py-6 text-primary md:grid-cols-[80px_1fr_24px] md:py-8"
          >
            <span className="text-[12px] text-gray-700">0{i + 1}</span>
            <div>
              <h2 className="text-[clamp(20px,3vw,38px)] leading-tight text-primary">{s.name}</h2>
              <p className="mt-2 text-[12px] text-gray-700">{s.description}</p>
            </div>
            <HugeiconsIcon
              icon={ArrowUpRight01Icon}
              size={22}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        ))}
      </div>
    </main>
  )
}
