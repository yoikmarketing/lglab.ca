import Member from '../components/member'
import { getAllMembers } from '../lib/members'
import { getAllProjects } from '../lib/projects'
import Content from '../components/content'
import Heading from '../components/heading'

export async function getStaticProps() {
  const currentMembers = getAllMembers(false)
  const alumniMembers = getAllMembers(true)
  const projects = getAllProjects()
  return {
    props: {
      currentMembers,
      alumniMembers,
      projects
    }
  }
}

export default function Team({ currentMembers, alumniMembers, projects }) {

  return (
    <div>
      <Content projects={projects}>
        <Heading
          title="The Gunaratnam Lab Team"
          lead=""
        />
        <Member
          title="Current members"
          people={currentMembers}
        />
        <Member
          title="Alumni"
          people={alumniMembers}
        />
      </Content>
    </div>
  )
}