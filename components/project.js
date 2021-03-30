export default function Project({ name, description, image, alt, members, tags }) {
  return(
    <div className="bg-gray-100 m-10 p-20">
      <h2>Project Name: {name}</h2>
      <h2>Project Description: {description}</h2>
      <img 
        src={image}
        alt={alt}
        width={600}
        height={400}
      />
      <div>
        <h3>Members working on {name}</h3>
        <ul>
          {members.map((member) => (
            <li key={member.memberId}>{member.name}</li>
          ))}
        </ul>
      </div>
      <h4>Project Tags: {tags}</h4>
    </div>
  )
}
