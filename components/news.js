import Image from "next/image"

export default function News({ posts }) {
  return (
    <>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div
            key={post.title}
            className="flex flew-row lg:mx-14 lg:my-8 md:mx-10 md:my-4 shadow-lg rounded-lg"
          >
            <div key={post.title} className="flex flex-col flex-1 px-6 py-4">
              <div className="flex justify-center pt-3 pb-5 text-4xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">
                <h1 className="text-center">{post.title}</h1>
              </div>
              {post.image ? (
                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 lg:gap-x-10 md:gap-x-6">
                  <div className="lg:col-span-1 md:col-span-1">
                    <a href={post.image}>
                      <div className="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                        <Image
                          layout="fill"
                          src={post.image}
                          alt={post.alt}
                          className="group-hover:opacity-75 object-cover pointer-events-none"
                        />
                        <button
                          type="button"
                          onClick={() => setOpen(true)}
                          className="absolute inset-0"
                        >
                          <span className="sr-only">
                            View details for {post.title}
                          </span>
                        </button>
                      </div>
                    </a>
                  </div>
                  <div className="lg:relative md:relative lg:col-span-2 md:col-span-2 sm:pt-3 text-xl text-gray-700">
                    <p className="">{post.description}</p>
                    <div>
                      {post.link ? (
                        <div className="lg:absolute lg:bottom-0 lg:left-0 md:absolute md:bottom-0 md:left-0">
                          <a href={post.link} target="_blank" rel="noreferrer">
                            <p>Click here to read more!</p>
                          </a>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 lg:gap-x-10 md:gap-x-6">
                  <div className="lg:relative md:relative lg:col-span-3 md:col-span-3 sm:pt-3 text-xl text-gray-700">
                    <p className="">{post.description}</p>
                    <div>
                      {post.link ? (
                        <div className="lg:absolute lg:bottom-0 lg:left-0 md:absolute md:bottom-0 md:left-0">
                          <a href={post.link} target="_blank" rel="noreferrer">
                            <p>Click here to read more!</p>
                          </a>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col flex-1 px-6 py-4 shadow-xl rounded-lg">
          <div className="flex justify-center pb-2 text-4xl font-extrabold text-gray-900 sm:text-3xl sm:tracking-tight lg:text-4xl">
            <h1>No News</h1>
          </div>
        </div>
      )}
    </>
  )
}
