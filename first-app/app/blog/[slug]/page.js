export default function BlogPostPage({ params }){
  return (
    <main>
      <h1>Blog Post</h1>
      <h1>{params.slug}</h1>
    </main>
  )
}