import { FaTwitter } from "react-icons/fa"

const name = "Gunaratnam Lab"
const links = [
  {
    name: "Twitter",
    url: "https://twitter.com/lglab_lhsc",
    Icon: FaTwitter
  }
]

export default function Footer() {

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {links.map(link => (
            <a key={link.name} className="text-gray-400 hover:text-gray-500" href={link.url}>
              <span className="sr-only">{link.name}</span>
              <link.Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; {currentYear} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}