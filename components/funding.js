
export default function Gallery({ fsName, fsAlt, fsImage }) {
  return (
    <div className="p-4 bg-white border border-black border-opacity-5 rounded-lg shadow flex flex-col">
      <h3 className="mb-3 text-xl font-medium text-gray-600 flex-shrink-0">{ fsName }</h3>
      <div className="p-6 h-full flex justify-center items-center">
        <img className="rounded-lg" src={fsImage} alt={fsAlt}/>
      </div>
    </div>
  )
}
