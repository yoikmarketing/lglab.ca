import Member from '../components/member';
import { getAllMembers } from '../lib/members';


export async function getStaticProps() {
  const currentMembers = getAllMembers(false)
  const alumniMembers = getAllMembers(true)
  return {
    props: {
      currentMembers,
      alumniMembers
    }
  }
}

export default function Members({ currentMembers, alumniMembers }) {
  return (
    <div>
      <h1>This is our team!</h1>
      <div>
        <h2>Current Members</h2>
        <div className="p-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {currentMembers.map((member) => (
            <Member
              key = {member.name}
              id = {member.id} 
              name = {member.name}
              education = {member.education}
              institution = {member.institution}
              bio = {member.bio}
              projects = {member.projects}
              linkedin = {member.linkedin}
              image = {member.image}
              alt = {member.alt}
            />
          ))}
        </div>
      </div>
      <div>
        <h2>Alumni Members</h2>
        <div className="p-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {alumniMembers.map((member) => (
            <Member 
              key = {member.name}
              id = {member.id} 
              name = {member.name}
              education = {member.education}
              institution = {member.institution}
              bio = {member.bio}
              projects = {member.projects}
              linkedin = {member.linkedin}
              image = {member.image}
              alt = {member.alt}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

