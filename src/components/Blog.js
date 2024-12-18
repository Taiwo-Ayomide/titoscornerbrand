import React from 'react'

const Blog = () => {
  return (
    <div className='w-full h-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28 pb-8 relative'>
        <div className='xl:w-7/12 lg:w-7/12 md:w-8/12 sm:w-full w-full mx-auto xl:float-left lg:float-left relative' id='color'>
            <h1 className='font-serif font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl uppercase xl:text-left text-center'>
              TITOS BLOG
            </h1>
            <p className='text-justify leading-loose text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pt-6 text-black' id='height'>
              Blog Adventures: Life is full of twists and turns, and my blog is where I chat about it all. Whether it's a funny mishap or a moment of reflection, I write about the things that make life beautifully messy and utterly relatable.
            </p>
        </div>
    </div>
  )
}

export default Blog
