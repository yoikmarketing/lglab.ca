import { SiLinkedin } from "react-icons/si"

// export default function Member({ id, name, education, institution, bio, projects, linkedin, image, alt }) {
//   return (
//     <li>
//       <div class="flex flex-col h-full">
//         <div class="flex flex-col space-y-4 mb-4">
//           <div class="aspect-w-1 aspect-h-1">
//             <img class="object-cover shadow-lg rounded-lg" src={image} alt={alt} />
//           </div>
//           <div class="text-lg leading-6 font-medium space-y-1">
//             <h3>{name}</h3>
//             <p class="text-indigo-600">{education}</p>
//           </div>
//           <div class="text-lg">
//             <p class="text-gray-500">{bio}</p>
//           </div>
//         </div>

//         <ul class="flex space-x-5 mt-auto">
//           <li>
//             <a href={linkedin} class="text-gray-400 hover:text-gray-500">
//               <span class="sr-only">LinkedIn</span>
//               <SiLinkedin class="w-5 h-5" />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </li>
//   )
// }

export default function Example({ title, lead, people }) {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title || "Our Team"}</h2>
            <p className="text-xl text-gray-500">
              {lead || "Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum cras."}
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img className="object-cover shadow-lg rounded-lg" src={person.image} alt="" />
                    </div>
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3 id={person.id}>{person.name}</h3>
                      <p className="text-indigo-600">{person.education}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500">{person.bio}</p>
                    </div>

                    <ul className="flex space-x-5">
                      <li>
                        <a href={person.linkedin} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
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


