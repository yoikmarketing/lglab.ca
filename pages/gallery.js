import Post from '../components/post'
import Content from "../components/content"
import { getAllGalleryImages } from '../lib/gallery'

export async function getStaticProps() {
  const galleryImages = getAllGalleryImages()
  return {
    props: {
      galleryImages
    }
  }
}

export default function Gallery({ galleryImages }) {
  return(
    <Content>
      <div className="p-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((post) => (
          <Post 
            key = {post.title}
            title = {post.title}
            description = {post.description}
            image = {post.image}
            alt = {post.alt}
            published = {post.published}
          />
        ))}
      </div>
    </Content>
  )
}

