import Project from '../components/project'
import Content from '../components/content'
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
    <Content>
    <div className="flex flex-col flex-nowrap w-max">
      <div>
        {lgLabProjects.map((project) => (
          <Project 
            key = {project.name}
            name = {project.name}
            description = {project.description}
            image = {project.image}
            alt = {project.alt}
            members = {project.members}
            tags = {project.tags}
          />
        ))}
      </div>
    </div>
    </Content>
  )
}
