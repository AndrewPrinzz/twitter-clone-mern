import { getPosts } from "@/lib/test-posts"
import { PostItem } from "./post-item";


async function DisplayPosts() {
  const posts = await getPosts()
  
  return (
    <>
      <div className="flex flex-col">
        {posts && posts.map((item, index) => <PostItem key={index} text={item.text} id={item.id} />)}
      </div>
    </>
  )
}

export {DisplayPosts}