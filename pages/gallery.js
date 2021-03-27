import Post from '../components/post'
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
    <div>
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
  )
}

