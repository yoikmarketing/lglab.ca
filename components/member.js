import { SiLinkedin } from "react-icons/si"

export default function Member({ id, name, education, institution, bio, projects, linkedin, image, alt }) {
  return (
    <li>
      <div class="flex flex-col h-full">
        <div class="flex flex-col space-y-4 mb-4">
          <div class="aspect-w-1 aspect-h-1">
            <img class="object-cover shadow-lg rounded-lg" src={image} alt={alt} />
          </div>
          <div class="text-lg leading-6 font-medium space-y-1">
            <h3>{name}</h3>
            <p class="text-indigo-600">{education}</p>
          </div>
          <div class="text-lg">
            <p class="text-gray-500">{bio}</p>
          </div>
        </div>

        <ul class="flex space-x-5 mt-auto">
          <li>
            <a href={linkedin} class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">LinkedIn</span>
              <SiLinkedin class="w-5 h-5" />
            </a>
          </li>
        </ul>
      </div>
    </li>
  )
}

