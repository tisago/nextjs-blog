import PostsList from "@/components/posts-list"
import { Suspense } from "react"

export default async function page() {
  
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
      <Suspense fallback="...">
        <PostsList />
      </Suspense>

    </main>
  )
}
