export default function BlogPost({ params }: { params: { id: string } }) {
  const posts = [
    { id: "1", title: "First Blog Post" },
    { id: "2", title: "Second Blog Post" },
    { id: "3", title: "Third Blog Post" },
  ];

  const post = posts.find((post) => post.id === params.id);

  if (!post) {
    return <h1>Post not found</h1>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>Post ID: {post.id}</p>
    </div>
  );
}
