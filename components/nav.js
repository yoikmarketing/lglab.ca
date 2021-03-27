import { useState } from "react"
import Link from "next/link"
import { HiOutlineMenu, HiChevronDown, HiOutlineX, HiOutlinePhotograph, HiOutlineDocument } from "react-icons/hi"
import { Transition } from "@headlessui/react"

// Quick and easy way of adding additional items to the "research" submenu.
// Could be fetched in "getStaticProps" to display a list of current projects.
const research = [
  {
    label: "The Kidneys",
    description: "Nam sodales augue vitae semper mattis. Nulla dictum ex eget mi aliquet scelerisque. Nam sit amet ante molestie, tristique augue vel, pellentesque lectus. Nam mattis finibus ligula, a porttitor libero iaculis quis. Ut in lectus eu augue consequat sagittis. Nunc hendrerit gravida gravida.",
    uri: "/"
  },
  {
    label: "Our Focus",
    description: "Quisque blandit vel nunc vel commodo. Donec et magna ut nunc convallis hendrerit sit amet vitae eros. Cras vehicula, sem ut sollicitudin commodo, sapien arcu varius justo, et semper orci nulla ac urna. Aliquam erat volutpat.",
    uri: "/"
  },
  {
    label: "Cancer",
    description: "Nunc feugiat pellentesque tempus. Duis vitae purus tristique, posuere ipsum quis, auctor magna. Aliquam ipsum eros, fringilla ut finibus scelerisque, tempor id arcu. Sed sed facilisis felis.",
    uri: "/"
  }
]

// Quick and easy way of adding additional items to the "more" submenu.
const more = [
  {
    label: "Publications",
    description: "Quisque blandit vel nunc vel commodo. Donec et magna ut nunc convallis hendrerit sit amet vitae eros. Cras vehicula, sem ut sollicitudin commodo, sapien arcu varius justo, et semper orci nulla ac urna. Aliquam erat volutpat.",
    uri: "/publications",
    Icon: HiOutlineDocument
  },
  {
    label: "Gallery",
    description: "Nunc feugiat pellentesque tempus. Duis vitae purus tristique, posuere ipsum quis, auctor magna. Aliquam ipsum eros, fringilla ut finibus scelerisque, tempor id arcu. Sed sed facilisis felis.",
    uri: "/gallery",
    Icon: HiOutlinePhotograph
  }
]

const recentPosts = [
  {
    title: "Boost your conversion rate",
    slug: "boost-your-conversion-rate"
  },
  {
    title: "How to use search engine optimization to drive traffic to your site",
    slug: "how-to-use-search-engine-optimization-to-drive-traffic-to-your-site"
  },
  {
    title: "Improve your customer experience",
    slug: "improve-your-customer-experience"
  }
]

export default function Nav() {

  const [isResearchOpen, setIsResearchOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  function toggleResearch() {
    setIsResearchOpen(!isResearchOpen)
    setIsMoreOpen(false)
  }

  function toggleMore() {
    setIsMoreOpen(!isMoreOpen)
    setIsResearchOpen(false)
  }

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-start items-center border-b-2 border-gray-100 py-6 md:space-x-10">
          <div className="flex justify-start">
            <a href="#">
              <span className="sr-only">The Gunaratnam Lab</span>
              <img className="h-8 w-auto sm:h-10" src="/images/logo.webp" alt="" />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden ml-auto">
            <button type="button" onClick={() => setIsMobileMenuOpen(true)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
              <span className="sr-only">Open menu</span>
              <HiOutlineMenu className="h-6 w-6" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">

            <Link href="/">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Dr. Gunaratnam
              </a>
            </Link>

            <div className="relative">
              <button type="button" onClick={toggleResearch} className={`${isResearchOpen ? "text-gray-900" : "text-gray-500"} group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`} aria-expanded="false">
                <span>Research</span>
                <HiChevronDown className={`${isResearchOpen ? "text-gray-600" : "text-gray-400"} ml-2 h-5 w-5 group-hover:text-gray-500`} />
              </button>

              <Transition
                show={isResearchOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
                className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {research.map(item => (
                      <Link key={item.label} href={item.uri}>
                        <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              {item.label}
                            </p>
                            <p className="mt-1 text-sm text-gray-500 line-clamp-3">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </Transition>
            </div>

            <div className="relative">
              <button type="button" onClick={toggleMore} className={`${isMoreOpen ? "text-gray-900" : "text-gray-500"} group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`} aria-expanded="false">
                <span>More</span>
                <HiChevronDown className={`${isMoreOpen ? "text-gray-600" : "text-gray-400"} ml-2 h-5 w-5 group-hover:text-gray-500`} />
              </button>

              <Transition
                show={isMoreOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
                className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0"
              >
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {more.map(item => (
                      <Link key={item.label} href={item.uri}>
                        <a className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                          <item.Icon className="flex-shrink-0 h-6 w-6 text-indigo-600" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              {item.label}
                            </p>
                            <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                              {item.description}
                            </p>
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                  <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                    <div>
                      <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                        Recent Posts
                      </h3>
                      <ul className="mt-4 space-y-4">

                        {recentPosts.map(post => (
                          <li key={post.slug} className="text-base truncate">
                            <Link href={`/blog/${post.slug}`}>
                              <a className="font-medium text-gray-900 hover:text-gray-700">
                                {post.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-5 text-sm">
                      <Link href="/blog">
                        <a className="font-medium text-indigo-600 hover:text-indigo-500"> View all posts <span aria-hidden="true">&rarr;</span></a>
                      </Link>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>

            <Link href="/team">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Team
              </a>
            </Link>

            <Link href="/contact">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Contact
              </a>
            </Link>

          </nav>
        </div>
      </div>

      <Transition
        show={isMobileMenuOpen}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src="/images/logo.webp" alt="The Gunaratnam Lab" />
              </div>
              <div className="-mr-2">
                <button type="button" onClick={() => setIsMobileMenuOpen(false)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close menu</span>
                  <HiOutlineX className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">

                <h2 className="text-gray-600 text-lg mt-2">About</h2>

                <Link href="/">
                  <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Dr. Gunaratnam
                    </span>
                  </a>
                </Link>

                <Link href="/">
                  <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">
                      The Team
                    </span>
                  </a>
                </Link>

                <h2 className="text-gray-600 text-lg mt-2">Research</h2>

                {research.map(item => (
                  <Link key={item.label} href={item.uri}>
                    <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.label}
                      </span>
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="pt-6 pb-8 px-5 space-y-6">
            <h2 className="text-gray-600 text-lg mt-2">More</h2>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8">

              <Link href="/publications">
                <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Publications
                </a>
              </Link>

              <Link href="/gallery">
                <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Gallery
                </a>
              </Link>

              <Link href="/blog">
                <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Blog
                </a>
              </Link>

              <Link href="/contact">
                <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Contact
                </a>
              </Link>

            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}
