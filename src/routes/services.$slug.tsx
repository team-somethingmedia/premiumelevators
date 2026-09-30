import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLink } from '@/components/site-shell'
import { services, images, pageHead } from '@/lib/site-data'

export const Route = createFileRoute('/services/$slug')({
  loader: ({ params }) => {
    const service = services.find(s => s.slug === params.slug)
    if (!service) throw notFound()
    return service
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead(
          `${loaderData.name} in Ahmedabad & Baroda | Premium Elevators`,
          `${loaderData.description} Contact Premium Elevators for professional ${loaderData.name.toLowerCase()} in Ahmedabad and Baroda.`,
          `/services/${loaderData.slug}`
        )
      : pageHead('Service Not Found | Premium Elevators', 'This service page is unavailable. Explore our elevator services in Ahmedabad and Baroda.', '/services'),
  component: ServiceDetail,
})

function ServiceDetail() {
  const service = Route.useLoaderData()
  return (
    <main>
      <section className="section-frame mx-auto grid min-h-[calc(100svh-86px)] max-w-[1560px] items-center gap-12 px-5 py-12 md:grid-cols-2 md:px-10 xl:px-16">
        <div>
          <Link to="/services" className="mb-10 inline-block border-b border-primary pb-1 text-[12px] text-primary">
            ← All services
          </Link>
          <h1 className="text-[clamp(36px,5vw,68px)] leading-[1.08] text-primary">
            {service.name} in Ahmedabad & Baroda.
          </h1>
          <p className="mt-8 max-w-[500px] text-[12px] text-gray-700">{service.description}</p>
          
          {service.deliverables && (
            <div className="mt-8 border-t border-primary/20 pt-4">
              <div className="text-[12px] text-primary mb-2">Scope of Engineering Deliverables:</div>
              <ul className="space-y-1.5 text-[12px] text-gray-700">
                {service.deliverables.map(d => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="text-primary">—</span> {d}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 flex flex-wrap gap-8">
            <ArrowLink to="/contact">Discuss with our service team</ArrowLink>
            <ArrowLink to="/lifts">Explore lift models</ArrowLink>
          </div>
        </div>
        <div className="aspect-[4/5] max-h-[640px] overflow-hidden bg-primary/10">
          <img
            src={images.hero}
            alt={`${service.name} engineering in Ahmedabad and Baroda`}
            width="1536"
            height="1024"
            className="editorial-image h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="section-frame flex min-h-[calc(100svh-86px)] flex-col justify-center border-t border-primary/20 px-5 py-16 md:px-10 xl:px-16">
        <div className="mx-auto w-full max-w-[1432px]">
          <h2 className="mb-8 text-[clamp(32px,4vw,60px)] leading-[1.05] text-primary">Explore other engineering services.</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services
              .filter(s => s.slug !== service.slug)
              .map(s => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="ruled-link flex justify-between py-4 text-[16px] text-primary"
                >
                  <span>{s.name}</span>
                  <span>↗</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
