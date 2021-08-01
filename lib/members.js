import { getCollection } from "@lib/common"
import { getProjectsForMember } from "@lib/projects"

export async function getAllMembers(isAlumni) {
  const results = await getCollection("members")

  const members = []
  for (const result of results) {
    const projects = await getProjectsForMember(result.id)

    members.push({
      id: result.id,
      ...result.data,
      projects,
    })
  }

  return members.filter((member) => {
    return member.alumni === isAlumni
  })
}
