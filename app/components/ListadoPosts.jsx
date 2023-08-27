import Post from "./Post";

function ListadoPosts({ posts }) {
  return (
    <>
      <h2 className="heading">Nuestro Blog</h2>
      <div className="blog">
        {posts.map((post) => (
          <Post post={post.attributes} key={post.id} />
        ))}
      </div>
    </>
  );
}

export default ListadoPosts;
