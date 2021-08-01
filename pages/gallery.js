import Content from "@components/content"
import { getAllGallery } from "@lib/gallery"
import { getAllProjects } from "@lib/projects"
import Heading from "@components/heading"
import Gallery from "@components/gallery"

export async function getStaticProps() {
  const gallery = getAllGallery()
  const projects = getAllProjects()
  return {
    props: {
      gallery,
      projects,
    },
  }
}

export default function GalleryPage({ gallery, projects }) {
  return (
    <Content projects={projects}>
      <Heading
        title="Gallery"
        lead="See what’s going on in The Gunaratnam Lab!"
      />
      <div className="container mx-auto px-6 py-10 md:py-16">
        <Gallery posts={gallery} />
      </div>
    </Content>
  )
}
