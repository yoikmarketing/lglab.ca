export default function Post({ title, description, image, alt, published }) {
  return (
    <div>
      <h3>Title: {title}</h3>
      <h3>Desciption: {description}</h3>
      <img src={image} alt={alt} />
      <h3>Published: {published}</h3>
    </div>
  )
}

