import Image from 'next/image'

export default function Member({ id, name, education, institution, bio, projects, linkedin, image, alt }) {
  return (
    <div>
      <h2>ID: {id}</h2>
      <h2>Name: {name}</h2>
      <ul>
        {education.map((experience) => (
          <li key={experience}>{experience}</li>
        ))}
      </ul>
      <h3>{institution}</h3>
      <h3>{bio}</h3>
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      <a href={linkedin}>LinkedIn</a>
      <Image 
        src={image}
        alt={alt}
        width={500}
        height={500}
      />
  </div>
  )
}

