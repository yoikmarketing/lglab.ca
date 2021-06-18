import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const newsDirectory = path.join(process.cwd(), 'content/news')

export function getAllNews() {
  const filenames = fs.readdirSync(newsDirectory)
  const images = filenames.map(filename => {
    const id = filename.replace(/\.md$/, '')

    const fullPath = path.join(newsDirectory, filename)
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