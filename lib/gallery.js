import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const galleryDirectory = path.join(process.cwd(), 'content/gallery')

export function getAllGallery() {
  const filenames = fs.readdirSync(galleryDirectory)
  const images = filenames.map(filename => {
    const id = filename.replace(/\.md$/, '')

    const fullPath = path.join(galleryDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    const result = matter(fileContents)
    return {
      id,
      ...result.data,
      published: result.data.published.toISOString()
    }
  })

  return images.sort((a, b) => {
    const apub = new Date(a.published)
    const bpub = new Date(b.published)
    if (apub < bpub) {
      return 1
    } else {
      return -1
    }
  })
}