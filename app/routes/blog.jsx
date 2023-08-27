import { getPosts } from "~/models/posts.server"
import { useLoaderData } from "@remix-run/react"
import Post from "~/components/Post.jsx"
import ListadoPosts from "~/components/ListadoPosts"
import styles from "~/styles/blog.css"


export function meta(){
  return [{
    title: "GuitarLA - Blog",
    description: "GuitarLA, Blog de música y venta de guitarras"
  }]
}

export function links(){
  return [{
    rel:"stylesheet",
    href: styles
  }]
}

export async function loader(){
  const posts = await getPosts()

  return posts?.data
}

function Blog() {

  const posts = useLoaderData()

  return (
    <main className="contenedor">
      <h2 className="heading">Blog</h2>
      <ListadoPosts
      posts={posts}
      />
    </main>
  )
}

export default Blog