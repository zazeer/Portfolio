import React from 'react'

function Video() {
  return (
    <div className='flex flex-col h-full w-full'>
            <video
            autoPlay
            muted
            loop
            className='absolute rotate-180 top-[-380px] left-0 z-[0] w-full h-full object-cover'
            >
                <source src='/videos/blackhole.webm'></source>
            </video>
    </div>
  )
}

export default Video
