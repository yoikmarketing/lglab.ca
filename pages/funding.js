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
      <Heading
        title="Funding Sources"
        lead="The people who make our research a reality."
      />
      {fundingSources.map((fundingSource) => (
        <Funding 
          key={fundingSource.name}
          name={fundingSource.name}
          alt={fundingSource.alt}
          image={fundingSource.image}
        />
      ))
      }
    </Content>
  )
}