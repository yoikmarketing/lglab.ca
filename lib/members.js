import fs from 'fs'
import path from 'path'
import matter from 'matter'

const memberDirectory = path.join(process.cwd(), 'content/members')

export function getAllGalleryImages() {
  const filenames = fs.readdirSync(memberDirectory)
  const members = filenames.map(filename => {
    const id = filename.replace(/\.md$/, '')

    const fullPath = path.join(memberDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const result = matter(fileContents)

    return {
      id,
      ...result.data
    }
  })

  return members.filter(member => {
    return member.alumni === alums
  })
}
