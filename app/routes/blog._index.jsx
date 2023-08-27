import { getPosts } from "~/models/posts.server";
import { useLoaderData } from "@remix-run/react";
import ListadoPosts from "~/components/ListadoPosts";

export function meta() {
  return [
    {
      title: "GuitarLA - Blog",
      description: "GuitarLA, Blog de música y venta de guitarras",
    },
  ];
}

export async function loader() {
  const posts = await getPosts();

  return posts?.data;
}

function Blog() {
  const posts = useLoaderData();

  return <ListadoPosts posts={posts} />;
}

export default Blog;
