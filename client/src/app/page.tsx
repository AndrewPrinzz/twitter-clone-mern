import { Feed } from "@/components/layout/feed/feed";
import { DisplayPosts } from "@/components/layout/feed/posts";
import { Sidebar } from "@/components/layout/sidebar/sidebar";

export default function Home() {

  return (
    <main className="bg-black container flex">
      <Sidebar />
      <div className="flex flex-col w-[36rem] p-4">
        <Feed />
        <DisplayPosts />
      </div>
      
    </main>
  )
}
