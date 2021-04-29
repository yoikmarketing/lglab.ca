import Nav from "./nav"
import Footer from "./footer"

export default function Content(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav research={props.projects} />
      <div className="flex-shrink-0">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}