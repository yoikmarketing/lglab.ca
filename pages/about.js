import Content from '../components/content'
import About from '../components/about'
import { getPage } from '../lib/pages'

export async function getStaticProps() {
  const aboutInfo = await getPage("about")
  console.log(aboutInfo)
  return {
    props: {
      aboutInfo
    }
  }
}

export default function AboutPage({ aboutInfo }) {
  return(
    <Content>
      <div>
        <About
          key = {aboutInfo.title}
          title = {aboutInfo.title}
          qualifications = {aboutInfo.qualifications}
          image = {aboutInfo.image}
          alt = {aboutInfo.alt}
          body = {aboutInfo.content}
        />
      </div>
    </Content>
  )
}

