import Content from "../components/content"
import Heading from "../components/heading"
import Funding from "../components/funding"
import { getAllFundingSources } from "../lib/funding"

export async function getStaticProps() {
  const fundingSources = getAllFundingSources()
  return {
    props: {
      fundingSources
    }
  }
}

export default function FundingPage({ fundingSources }) {
  return (
    <Content>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Funding Sources
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              The people who make our research a reality.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                >
                  Fund our research
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            {fundingSources.map((fundingSource) => (
              <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                <Funding
                  key={fundingSource.name}
                  name={fundingSource.name}
                  alt={fundingSource.alt}
                  image={fundingSource.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Content>
  )
}
