import Content from '../components/content'
import About from '../components/about'
import Heading from "../components/heading"
import { getPage } from '../lib/pages'
import { getAllProjects } from "../lib/projects"

export async function getStaticProps() {
  const aboutInfo = await getPage("about")
  const projects = getAllProjects()
  return {
    props: {
      aboutInfo,
      projects
    }
  }
}

export default function AboutPage({ aboutInfo, projects }) {
  return(
    <Content projects={projects}>
      <div>
        <Heading
          title={aboutInfo.title}
          lead={aboutInfo.qualifications}
        />
        <About
          key = {aboutInfo.title}
          image = {aboutInfo.image}
          alt = {aboutInfo.alt}
          body = {aboutInfo.content}
        />
      </div>
    </Content>
  )
}

