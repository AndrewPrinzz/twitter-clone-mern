import { PostsData } from "@/lib/test-posts";
import Image from "next/image";

function PostItem(data: PostsData) {
  const {text} = data
  // background-color: rgba(255, 255, 255, 0.03);
  return (
    <div className="flex border-b-[1px] border-interface-gray py-3 cursor-pointer hover:bg-interface-post-hover duration-100">
      {/* avatar */}
      <div>
        <Image
          src="/images/profile/profile.jpg"
          className="w-[40px] h-[40px] rounded-full"
          height="40"
          width="40"
          alt="avatar"
        />
      </div>
      {/* data */}
      <div className="flex flex-col ml-3">
        {/* user data */}
        <div className="flex">
          <div>Andrew&nbsp;</div>
          <div>@andrew&nbsp;</div>
          <div>· 2 h</div>
        </div>
        {/* post text */}
        <div>
          {text}
        </div>
      </div>
    </div>
  )
}

export {PostItem}