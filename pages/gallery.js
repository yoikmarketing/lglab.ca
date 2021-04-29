import Content from "../components/content"
import { getAllGalleryImages } from '../lib/gallery'
import { getAllProjects } from "../lib/projects"
import Heading from "../components/heading"
import Gallery from "../components/gallery"

export async function getStaticProps() {
  const galleryImages = getAllGalleryImages()
  const projects = getAllProjects()
  return {
    props: {
      galleryImages,
      projects
    }
  }
}

export default function GalleryPage({ galleryImages, projects }) {
  return(
    <Content projects={projects}>
      <Heading
        title="Gallery"
        lead="See what's going on with the LG Lab team."
      />
      <div className="container mx-auto px-6 py-10 md:py-16">
        <Gallery posts={galleryImages} />
      </div>
    </Content>
  )
}

