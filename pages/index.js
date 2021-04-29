import Hero from "../components/hero"
import Nav from "../components/nav"
import Footer from "../components/footer"
import { getAllProjects } from "../lib/projects"

export default function Home({ projects }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav
        className="fixed"
        research={projects}
      />
      <Hero
        image="/images/uploads/kidneysection1.jpg"
      />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const projects = getAllProjects()
  return {
    props: {
      projects
    }
  }
}
