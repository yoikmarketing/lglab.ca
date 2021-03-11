import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const memberDirectory = path.join(process.cwd(), 'content/members')
const projectDirectory = path.join(process.cwd(), 'content/projects')

export default function getAllProjects(isAlumni) {
  const filenames = fs.readdirSync(projectDirectory)
  const projects = filenames.map(filename => {
    const id = filename.replace(/\.md$/, '')

    const fullPath = path.join(projectDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const result = matter(fileContents)
    const projectMembers = getProjectMembers(result.data.members)

    return {
      id,
      name: result.data.name,
      description: result.data.description,
      alt: result.data.alt,
      image: result.data.image,
      memebers: projectMembers,
      tags: result.data.tags
    };
  });
  return projects
};

function getProjectMembers(memberList) {
  const filenames = fs.readdirSync(memberDirectory)
  const members = filenames.map(filename => {
    const id = filename.replace(/\.md$/, '')

    const fullPath = path.join(memberDirectory, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const result = matter(fileContents)
    return {
      id,
      ...result.data
    };
  });
  const projectMembers = members.filter(projectMember => {
    return memberList.includes(projectMember.id)
  });
  return projectMembers;
};
