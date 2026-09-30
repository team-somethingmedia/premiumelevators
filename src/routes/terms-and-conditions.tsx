import { createFileRoute } from '@tanstack/react-router'
import { ArrowLink } from '@/components/site-shell'
import { email, pageHead } from '@/lib/site-data'

export const Route = createFileRoute('/terms-and-conditions')({
  head: () =>
    pageHead(
      'Terms & Conditions | Premium Elevators Ahmedabad & Baroda',
      'Read the website terms for information about lifts and engineering services from Premium Elevators in Ahmedabad and Baroda.',
      '/terms-and-conditions'
    ),
  component: Terms,
})

function Terms() {
  return (
    <main className="mx-auto min-h-[calc(100svh-86px)] max-w-[900px] px-5 py-20 md:px-10">
      <h1 className="text-[clamp(44px,6vw,80px)] text-primary">Terms & conditions.</h1>
      <div className="mt-12 space-y-7 text-[12px] text-gray-700">
        <p>
          This website provides architectural and technical specifications about Premium Elevators, our lift categories, customization options and engineering maintenance services across Ahmedabad and Baroda, Gujarat.
        </p>
        <p>
          Elevator suitability, shaft dimensions, load capacity, pricing and manufacturing lead times are finalized following a physical civil site assessment and formal engineering proposal.
        </p>
        <p>
          For formal project quotations and technical queries, reach our engineering desk at{' '}
          <a className="text-primary underline" href={`mailto:${email}`}>
            {email}
          </a>.
        </p>
      </div>
      <div className="mt-12">
        <ArrowLink to="/contact">Contact us</ArrowLink>
      </div>
    </main>
  )
}
