import Nav from "@components/nav"
import Footer from "@components/footer"

export default function Content({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-shrink-0">{children}</div>
      <Footer />
    </div>
  )
}
