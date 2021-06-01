import Project from '../components/project'
import Content from '../components/content'
import Heading from "../components/heading"
import { getAllProjects } from '../lib/projects'

export async function getStaticProps() {
  const lgLabProjects = getAllProjects()
  return {
    props: {
      lgLabProjects
    }
  }
}

export default function Projects({ lgLabProjects }) {
  return(
    <Content projects={lgLabProjects}>
      <Heading
        title="LG Lab Research"
        lead="Find out more about the research we do at the Gunaratnam Lab"
      />

      {lgLabProjects.map((project) => (
        <Project
          key={project.name}
          id={project.id}
          name={project.name}
          description={project.description}
          image={project.image}
          alt={project.alt}
          members={project.members}
          tags={project.tags}
        />
      ))}
    </Content>
  )
}

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ]
  }
  ```
*/
