import { createPost } from "@/actions/actions";
import AuthContainer from "../../components/auth-container";

export default async function CreatePosts() {

  return (
    <main className="text-center pt-16 flex flex-col">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create posts</h1>
      <form action={createPost}
      className="flex flex-col min-w-[400px] mx-auto gap-2 my-10">
        <input 
          type="text"
          name="title"
          placeholder="Title"
          required
          className="border rounded px-3 h-10" 
        />
        <textarea 
          name="body"
          placeholder="body content"
          className="border rounded px-3 py-2"
          rows={6} 
        />
        <button className="h-10 bg-blue-500 px-5 text-white rounded">Create</button>
      </form>
      <AuthContainer/>

    </main>
    
  )
}
