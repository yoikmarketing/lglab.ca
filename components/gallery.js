import Post from "@components/post"

export default function Gallery({ posts }) {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {posts.map((post) => (
        <Post
          title={post.title}
          key={post.image}
          description={post.description}
          image={post.image}
          alt={post.alt}
          published={post.published}
        />
      ))}
    </ul>
  )
}
