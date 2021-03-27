export default function Post({ title, description, image, alt, published }) {
  return (
    <div>
      <div className="flex-1 bg-gray-400 p-10">
        <div>
          <h2>Title: {title}</h2>
        </div>
        <div>
          <img src={image} alt={alt}/>
        </div>
        <div>
          <h3>Desciption: {description}</h3>
          <h3>Published: {published}</h3>
        </div>
      </div>
    </div>
  )
}

