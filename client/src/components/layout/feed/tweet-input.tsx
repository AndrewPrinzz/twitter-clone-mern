import { addPost, getPosts } from '@/lib/test-posts'
import React from 'react'

function TweetInput() {
  const [tweet, setTweet] = React.useState<string>('')
  const tweetRef = React.useRef<HTMLDivElement>(null)
  
  async function handlePost() {
    const post = await addPost(tweet)
    
    setTweet('')
    if (tweetRef.current) {
      tweetRef.current.textContent = ''
    }
    
  }

  function handlePostChange(e: React.FormEvent<HTMLDivElement>) {    
    setTweet(String(e.currentTarget.textContent))
  }

  return (
    <div className="flex flex-col relative w-full max-w-[32rem] text-xl mb-4">
      {!tweet && <div className="absolute text-slate-500">What's happening</div>}
      <div
        contentEditable="true"
        suppressContentEditableWarning={true}
        className="w-full select-text whitespace-pre-wrap break-words 
        outline-none z-10 relative border-b-[1px] border-interface-gray pb-3 mb-3"
        onInput={(e) => handlePostChange(e)}
        ref={tweetRef}
      ></div>
      <div
        className="bg-interface-blue cursor-pointer text-sm w-fit px-4 py-2 rounded-full font-bold"
        onClick={handlePost}
      >
        Post
      </div>
    </div>
  )
}

export { TweetInput }