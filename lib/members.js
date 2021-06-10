import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { getProjectsForMember } from '../lib/projects'

const memberDirectory = path.join(process.cwd(), 'content/members')

export function getAllMembers(isAlumni) {
  const filenames = fs.readdirSync(memberDirectory)
  const members = filenames.map(filename => {
    const id = filename.replace(/\.md$/, '')

    const fullPath = path.join(memberDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const projects = getProjectsForMember(id)

    const result = matter(fileContents)

    return {
      id,
      ...result.data,
      projects
    }
  })

  return members.filter(member => {
    return member.alumni === isAlumni
  })
}
