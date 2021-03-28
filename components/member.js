export default function Member({ id, name, education, institution, bio, projects, linkedin, image, alt }) {
  return (
    <div className="p-20">
      <h3>Name: {name}</h3>
      <img src={image} alt={alt}/>
      <ul>
        Education: {education.map((experience) => (
          <li key={experience}>{experience}</li>
        ))}
      </ul>
      <h4>Institution: {institution}</h4>
      <p>Bio: {bio}</p>
      <ul>
        Projects: {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      <a href={linkedin}>LinkedIn</a>
  </div>
  )
}

