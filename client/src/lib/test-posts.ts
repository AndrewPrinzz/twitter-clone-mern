import type { NextApiRequest, NextApiResponse } from 'next'

// http://localhost:3001/test-posts/new // text: string

async function addPost(postText: string) {
  console.log('postText: ', postText);
  const res = await fetch('http://localhost:3001/test-posts/new', {
    method: "POST",
    headers: {
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({ text: postText })
  }).then(res => res.json())
}

export type PostsData = {
  text: string;
  id: number;
}

async function getPosts(): Promise<PostsData[] | undefined> {
  const res = await fetch('http://localhost:3001/test-posts/')
  
  if (!res.ok) {
    throw new Error('failed to fech data')
  }
  console.log('res: ', res);

  return res.json()
}

export {addPost, getPosts}