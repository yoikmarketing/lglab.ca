import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const memberDirectory = path.join(process.cwd(), 'content/members')
const projectDirectory = path.join(process.cwd(), 'content/projects')

export function getAllProjects() {
  const filenames = fs.readdirSync(projectDirectory)
  const projects = filenames.map(filename => {
    const id = filename.replace(/\.md$/, '')

    const fullPath = path.join(projectDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const result = matter(fileContents)
    const projectMembers = getProjectMembers(result.data.members)

    return {
      id,
      ...result.data,
      members: projectMembers,
    };
  });
  return projects
};

function getProjectMembers(memberList) {
  return memberList.map(memberId => {
    const fullPath = path.join(memberDirectory, `${memberId}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    const result = matter(fileContents)
    
    return {
      id,
      ...result.data
    }
  })
};
