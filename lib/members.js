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

  return members.sort((a, b) => {
    const boolAlumA = a.alumni;
    const boolAlumB = b.alumni;
    if (boolAlumA === boolAlumB) return 0;   //both either alum or not alum, returns 0
    if (boolAlumB) return 1;                //b is alum, a is greater, returns 1
    if (boolAlumA) return -1;               //a is alum, b is greater, returns -1
  })
}