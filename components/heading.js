export default function Heading({ title, lead }) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {title || "Take control of your team."}
          </h1>
          { lead ? (
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              {lead}
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}
