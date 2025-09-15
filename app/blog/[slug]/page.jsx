
export default function BlogPost({ params }) {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
    </div>
  );
}
