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
          title="Dr. Gunaratnam Lab Team"
          lead="Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum cras."
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