import Member from '../components/member';
import {getAllMembers} from '../lib/members';


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
    return(
        <div>
            <h1>This is our team!</h1>
            <Member currentMembers={currentMembers} alumniMembers={alumniMembers}  />
        </div>
    )
}