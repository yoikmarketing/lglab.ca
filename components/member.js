
function displayMember(members){
    return members.map(({id, name}) =>(
        <div>
            <h2>{id}</h2>
            <h3>{name}</h3>
        </div>
    ));
}


export default function Member({ currentMembers, alumniMembers }){
    return(
        <div>
           <div>
            <h1>Current members</h1>
            {displayMember(currentMembers)}
        </div>
        <div>
            <h2>Alumni members</h2>
        </div> 
        </div>
    )
}