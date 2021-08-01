import Image from "next/image"
import Link from "next/link"
import Content from "@components/content"
import { getAllFundingSources } from "@lib/funding"
import Heading from "@components/heading"

export async function getStaticProps() {
  const fundingSources = await getAllFundingSources()
  return {
    props: {
      fundingSources,
    },
  }
}

export default function FundingPage({ fundingSources }) {
  return (
    <Content>
      <Heading
        title="Funding Sources"
        lead="The people who make our research a reality"
      />
      <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:mt-8">
          {fundingSources.map((funding) => (
            <div
              key={funding.name}
              className="col-span-1 flex justify-center aspect-h-1 aspect-w-1"
            >
              <Image
                layout="fill"
                objectFit="contain"
                objectPosition="center"
                src={funding.image}
                alt={funding.alt}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mb-12 sm:flex">
        <div className="rounded-md mx-auto text-xl text-gray-500">
          If you&apos;re interested in helping fun our research, please&nbsp;
          <Link href="/contact">
            <a className="text-indigo-600 hover:text-indigo-700">contact us.</a>
          </Link>
        </div>
      </div>
    </Content>
  )
}
