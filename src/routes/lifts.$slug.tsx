import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLink } from '@/components/site-shell'
import { lifts, pageHead } from '@/lib/site-data'

export const Route = createFileRoute('/lifts/$slug')({
  loader: ({ params }) => {
    const lift = lifts.find(x => x.slug === params.slug)
    if (!lift) throw notFound()
    return lift
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead(
          `Best ${loaderData.name} in Ahmedabad & Baroda | Premium Elevators`,
          `Explore high-performance ${loaderData.name.toLowerCase()} in Ahmedabad and Baroda. ${loaderData.description} Contact Premium Elevators for dimensions, pricing and site survey.`,
          `/lifts/${loaderData.slug}`,
          'product'
        )
      : pageHead('Lift Not Found | Premium Elevators', 'This elevator page is unavailable. Explore our lift collection in Ahmedabad and Baroda.', '/lifts'),
  component: LiftDetail,
})

function LiftDetail() {
  const lift = Route.useLoaderData()
  return (
    <main>
      <section className="section-frame mx-auto grid min-h-[calc(100svh-86px)] max-w-[1560px] items-center gap-12 px-5 py-12 md:grid-cols-2 md:px-10 xl:px-16">
        <div>
          <Link to="/lifts" className="mb-10 inline-block border-b border-primary pb-1 text-[12px] text-primary">
            ← All lifts
          </Link>
          <h1 className="max-w-[700px] text-[clamp(38px,5vw,72px)] leading-[1.06] text-primary">
            {lift.name} in Ahmedabad & Baroda.
          </h1>
          <p className="mt-8 max-w-[500px] text-[12px] text-gray-700">{lift.description}</p>
          
          {lift.specs && (
            <div className="mt-8 grid gap-2 border-t border-primary/20 pt-4">
              {lift.specs.map(s => (
                <div key={s.label} className="flex justify-between border-b border-primary/10 py-1.5 text-[12px]">
                  <span className="text-primary">{s.label}</span>
                  <span className="text-gray-700">{s.value}</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-10 flex flex-wrap gap-8">
            <ArrowLink to="/contact">Request pricing & site survey</ArrowLink>
            <ArrowLink to="/services">Installation & AMC support</ArrowLink>
          </div>
        </div>
        <div className="aspect-[4/5] max-h-[640px] overflow-hidden bg-primary/10">
          <img
            src={lift.image}
            alt={`${lift.name} installation example in Ahmedabad and Baroda`}
            width="1024"
            height="1024"
            className="editorial-image h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="section-frame flex min-h-[calc(100svh-86px)] flex-col justify-center border-t border-primary/20 px-5 py-16 md:px-10 xl:px-16">
        <div className="mx-auto w-full max-w-[1432px]">
          <h2 className="mb-8 text-[clamp(32px,4vw,60px)] leading-[1.05] text-primary">Explore other lifts for Gujarat properties.</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lifts
              .filter(x => x.slug !== lift.slug)
              .slice(0, 6)
              .map(x => (
                <Link
                  key={x.slug}
                  to="/lifts/$slug"
                  params={{ slug: x.slug }}
                  className="ruled-link flex justify-between py-4 text-[16px] text-primary"
                >
                  <span>{x.name}</span>
                  <span>↗</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}
