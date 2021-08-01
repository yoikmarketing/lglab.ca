import Content from "@components/content"
import { getAllGallery } from "@lib/gallery"
import Heading from "@components/heading"
import Gallery from "@components/gallery"

export async function getStaticProps() {
  const gallery = await getAllGallery()
  return {
    props: {
      gallery,
    },
  }
}

export default function GalleryPage({ gallery }) {
  return (
    <Content>
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
