export default function About({ title, qualifications, image, alt, body }) {
  return(
    <div>
      <h1>{title}</h1>
      <img
        src={image}
        alt={alt}
        width={300}
        height={300}
      />
      <ul>
        Qualifications: {qualifications.map((qualification) => (
          <li key={qualification}>{qualification}</li>
        ))}
      </ul>
      <p>{body}</p>
    </div>
  )
}

