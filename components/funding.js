import Image from "next/image"

export default function Gallery({ fsName, fsAlt, fsImage }) {
  return (
    <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
      <Image
        width={30}
        height={30}
        // layout="fill"
        // objectFit="cover"
        // objectPosition="center"
        className="rounded-lg"
        src={fsImage}
        alt={fsAlt}
      />
    </div>
  )
}
