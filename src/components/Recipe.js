import React from 'react'

const Recipe = () => {
  return (
    <div className='w-full h-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28 pb-8 xl:mt-72 lg:mt-72'>
        <div className='xl:pt-10 xl:w-7/12 lg:w-7/12 md:w-8/12 sm:w-full w-full mx-auto xl:float-right'>
            <h1 className='font-serif font-bold xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl uppercase xl:text-left text-center' id='color'>
              FOOD DIARIES
            </h1>
            <p className='text-justify leading-loose font-mono text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl pt-6 text-black' id='height'>
              Cooking is one of my favorite ways to show love, and I'm thrilled to share some of my favorite recipes with you. These dishes are sprinkled with stories and a dash of my personality, so get ready to cook up some love!
            </p>
        </div>
    </div>
  )
}

export default Recipe
