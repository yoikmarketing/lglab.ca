import Content from "../components/content"
import { getAllNews } from '../lib/news'
import { getAllProjects } from "../lib/projects"
import Heading from "../components/heading"
import News from "../components/news"

export async function getStaticProps() {
  const news = getAllNews()
  const projects = getAllProjects()
  return {
    props: {
      news,
      projects
    }
  }
}

export default function NewsPage({ news, projects }) {
  return(
    <Content projects={projects}>
      <Heading
        title="News"
        lead="See what's going on with the LG Lab."
      />
      <div className="container mx-auto px-6 py-10 md:py-16">
        <News posts={news} />
      </div>
    </Content>
  )
}

