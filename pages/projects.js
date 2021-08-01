import Project from "@components/project"
import Content from "@components/content"
import Heading from "@components/heading"
import { getAllProjects } from "@lib/projects"

export async function getStaticProps() {
  const lgLabProjects = getAllProjects()
  return {
    props: {
      lgLabProjects,
    },
  }
}

export default function Projects({ lgLabProjects }) {
  return (
    <Content projects={lgLabProjects}>
      <Heading
        title="The Gunaratnam Lab Research"
        lead="Here in The Gunaratnam Lab we apply basic and translational research to decipher the role of Kidney Injury Molcule-1 in acute kidney injury (AKI), renal transplantation and Renal Cell Carcinoma (RCC)."
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
