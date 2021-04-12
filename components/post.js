export default function Post({ title, description, image, alt, published }) {
  return (
    <div className="bg-blue-400 rounded-lg">
      <div className="p-2">
        <div className="aspect-w-4 aspect-h-3 relative">
          <img className="object-cover shadow-lg rounded-lg" src={image} alt={alt}/>
          <div className="grid absolute content-end">
            <h2 className="text-center opacity-75 bg-gray-400 object-cover shadow-lg rounded-lg">{title}</h2>
          </div>
        </div>
        <div className="text-center">
          <h3>{description}</h3>
          <h3>Published: {published}</h3>
        </div>
      </div>
    </div>
  )
}

