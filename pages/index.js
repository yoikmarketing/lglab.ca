import Landing from "../components/landing"
import Content from "../components/content"

export default function Home() {
  return (
    <div>
      <Landing />
      <Content>
        <h4 className="text-5xl text-center text-gray-700 dark:text-gray-300">
          More information Section
        </h4>
      </Content>
    </div>
    
  )
}
