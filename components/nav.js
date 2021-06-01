import { useState } from "react"
import Link from "next/link"
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"
import { Transition } from "@headlessui/react"

export default function Nav() {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="relative z-50 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-start items-center py-6 md:space-x-10">
          <div className="flex justify-start">
            <Link href="/">
              <a>
                <span className="sr-only">The Gunaratnam Lab</span>
                <img className="h-8 w-auto sm:h-10" src="/images/logo.webp" alt="The Gunaratnam Lab logo" />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden ml-auto">
            <button type="button" onClick={() => setIsMobileMenuOpen(true)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
              <span className="sr-only">Open menu</span>
              <HiOutlineMenu className="h-6 w-6" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">

            <Link href="/about">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Dr. Gunaratnam
              </a>
            </Link>

            <Link href="/projects">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Research
              </a>
            </Link>

            <Link href="/team">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Team
              </a>
            </Link>

            <Link href="/gallery">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Gallery
              </a>
            </Link>

            <Link href="/funding">
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Funding Sources
              </a>
            </Link>

            <a
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              href="https://www.ncbi.nlm.nih.gov/pubmed/?term=Gunaratnam+L"
            >
              Publications
            </a>

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
        className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-30"
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

                <Link href="/about">
                  <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Dr. Gunaratnam
                    </span>
                  </a>
                </Link>

                <Link href="/team">
                  <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">
                      The Team
                    </span>
                  </a>
                </Link>

                <Link href="/projects">
                  <a className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Our Research
                    </span>
                  </a>
                </Link>
                
              </nav>
            </div>
          </div>
          <div className="pt-6 pb-8 px-5 space-y-6">
            <h2 className="text-gray-600 text-lg mt-2">More</h2>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8">

              <Link href="/gallery">
                <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                  Gallery
                </a>
              </Link>

              <a
                className="text-base font-medium text-gray-900 hover:text-gray-700"
                href="https://www.ncbi.nlm.nih.gov/pubmed/?term=Gunaratnam+L"
              >
                Publications
              </a>

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
