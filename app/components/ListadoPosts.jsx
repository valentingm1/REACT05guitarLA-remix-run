import Post from "./Post"

function ListadoPosts({posts}) {
  return (
    <>
    <div className="blog">
        {posts.map(post => (
          <Post
          post={post.attributes}
          key={post.id}
          />
        ))}
      </div>
    </>
  )
}

export default ListadoPosts