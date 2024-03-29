import { useState, useRef } from "react"
import Image from "next/image"

export default function Post({
  title,
  description,
  link,
  image,
  alt,
  published,
}) {
  const [open, setOpen] = useState(false)
  const closeButtonRef = useRef()

  return (
    <li key={image} className="relative">
      <a href={image}>
        <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
          <Image
            layout="fill"
            src={image}
            alt={alt}
            className="group-hover:opacity-75 object-cover pointer-events-none"
          />
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="absolute inset-0"
          >
            <span className="sr-only">View details for {title}</span>
          </button>
        </div>
      </a>
      <div>
        <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
          {title}
        </p>
        <p className="block text-sm font-medium text-gray-500 pointer-events-none">
          {description}
        </p>
      </div>
    </li>
  )
}
