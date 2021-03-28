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
        <div className="flex flex-row flex-wrap m-1 justify-center">
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
        <div className="flex flex-row flex-wrap m-1 justify-center">
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

