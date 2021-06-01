
export default function Gallery({ fsName, fsAlt, fsImage }) {
  return (
    <div>
      <h1>{ fsName }</h1>
      <img src={fsImage} alt={fsAlt}/>
    </div>
  )
}
