import Image from "next/image"
import Link from "next/link"
import { FaTwitter, FaLinkedin } from "react-icons/fa"

export default function Member({ title, lead, people }) {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto py-8 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-12">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="text-xl text-gray-500">{lead}</p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
              {people.map((person) => (
                <li key={person.name} id={person.id}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <Image
                        layout="fill"
                        className="object-cover shadow-lg rounded-lg"
                        src={person.image}
                        alt=""
                      />
                    </div>
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.position}</p>
                      <p className="text-indigo-600">
                        Graduated {person.graduated}
                      </p>
                    </div>
                    {person.bio ? (
                      <div className="text-lg">
                        <p className="text-gray-500">{person.bio}</p>
                      </div>
                    ) : (
                      <></>
                    )}

                    <ul className="flex space-x-5">
                      {person.linkedin ? (
                        <li>
                          <a
                            href={person.linkedin}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">LinkedIn</span>
                            <FaLinkedin className="w-5 h-5" />
                          </a>
                        </li>
                      ) : (
                        <></>
                      )}
                      {person.twitter ? (
                        <li>
                          <a
                            href={person.twitter}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Twitter</span>
                            <FaTwitter className="w-5 h-5" />
                          </a>
                        </li>
                      ) : (
                        <></>
                      )}
                    </ul>

                    <ul className="flex flex-wrap">
                      {person.projects.map((project) => (
                        <li key={project.name} className="mx-1 my-0.5">
                          <Link href={`/projects#${project.id}`}>
                            <a>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                {project.name}
                              </span>
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
