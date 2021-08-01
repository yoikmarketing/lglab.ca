import fs from "fs"
import path from "path"
import matter from "gray-matter"

import { getCollection, getItem } from "@lib/common"

const memberDirectory = path.join(process.cwd(), "content/members")
const projectDirectory = path.join(process.cwd(), "content/projects")

export async function getAllProjects() {
  const results = await getCollection("projects")

  const projects = []
  for (const result of results) {
    const members = await getProjectMembers(result.data.members)
    projects.push({
      id: result.id,
      ...result.data,
      members,
    })
  }

  return projects
}

export async function getProjectsForMember(memberId) {
  const projects = await getAllProjects()
  return projects.filter((project) => {
    const memberIds = project.members.map((member) => member.memberId)
    return memberIds.includes(memberId)
  })
}

async function getProjectMembers(memberList) {
  const members = []
  for (const memberId of memberList) {
    const result = await getItem("members", memberId)
    members.push({
      memberId,
      ...result.data,
    })
  }
  return members
}
