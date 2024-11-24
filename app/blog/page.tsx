import Link from "next/link";

export default function Blog() {
  // Array of blog posts
  const posts = [
    { id: "1", title: "First Blog Post" },
    { id: "2", title: "Second Blog Post" },
    { id: "3", title: "Third Blog Post" },
  ];

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
