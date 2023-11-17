"use client"

import React from 'react'

import Image from "next/image"
import { TweetInput } from "./tweet-input"

function Feed() {

  return (
    <>
      <div className="flex w-full">
        <div className="mr-4 min-w-[2.5rem]">
          <Image
            width={40}
            height={40}
            src="/images/profile/profile.jpg"
            alt="profile image"
            className="rounded-full"
          />
        </div>
        <TweetInput />
      </div>
    </>
  )
}

export { Feed }