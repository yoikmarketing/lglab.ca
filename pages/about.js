import Content from "@components/content"
import About from "@components/about"
import Heading from "@components/heading"
import { getPage } from "@lib/pages"

export async function getStaticProps() {
  const aboutInfo = await getPage("about")
  return {
    props: {
      aboutInfo,
    },
  }
}

export default function AboutPage({ aboutInfo }) {
  return (
    <Content>
      <div>
        <Heading title={aboutInfo.title} lead={aboutInfo.qualification} />
        <About
          key={aboutInfo.title}
          image={aboutInfo.image}
          alt={aboutInfo.alt}
          body={aboutInfo.content}
        />
      </div>
    </Content>
  )
}
