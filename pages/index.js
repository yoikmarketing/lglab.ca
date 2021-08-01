import Hero from "@components/hero"
import Nav from "@components/nav"
import Footer from "@components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav className="fixed" />
      <Hero image="/images/uploads/kidneysection1.jpg" />
      <Footer />
    </div>
  )
}
