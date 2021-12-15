import Member from "@components/member"
import Content from "@components/content"
import Heading from "@components/heading"
import { getAllMembers } from "@lib/members"

export async function getStaticProps() {
  const currentMembers = await getAllMembers(false)
  const alumniMembers = await getAllMembers(true)
  return {
    props: {
      currentMembers,
      alumniMembers,
    },
  }
}

export default function Team({ currentMembers, alumniMembers }) {
  return (
    <div>
      <Content>
        <Heading title="The Gunaratnam Lab Team" lead="" />
        <Member title="Current members" people={currentMembers} isAlum={false} />
        <Member title="Alumni" people={alumniMembers} isAlum={true} />
      </Content>
    </div>
  )
}
