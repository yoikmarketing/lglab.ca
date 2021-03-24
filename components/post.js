import Image from 'next/image'

export default function Post({ title, description, image, alt, published }) {
  return (
    <div>
      <h3>Title: {title}</h3>
      <h3>Desciption: {description}</h3>
      <Image 
        src={image}
        alt={alt}
        width={500}
        height={500}
        />
      <h3>Published: {published}</h3>
    </div>
  )
}

