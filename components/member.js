function displayMember(members) {
  return members.map(({ id, name, education, institution, bio, projects, linkedin, image, alumni }) => (
    <div>
      <h2>ID: {id}</h2>
      <h2>Name: {name}</h2>
      <h3>{displayList(education)}</h3>
      <h3>{institution}</h3>
      <h3>{bio}</h3>
      <h3>{displayList(projects)}</h3>
      <a href={linkedin}>LinkedIn</a>
      <img href={image}></img>
      <h3>Is alumni: {alumni}</h3>
    </div>
  ));
}

function displayList(list) {
  return list.map((item) => (
    <div>
      <h4>{item}</h4>
    </div>
  ));
}

export default function Member({ currentMembers, alumniMembers }) {
  return (
    <div>
      <div>
        <h1>Current members</h1>
        {displayMember(currentMembers)}
      </div>
      <div>
        <h2>Alumni members</h2>
        {displayMember(alumniMembers)}
      </div>
    </div>
  )
}

