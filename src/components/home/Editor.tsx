import React from 'react'
import { EDITOR_CONTENT } from '../../content'

export const Editor = () => {
  const { main_img, h1, p, a } = EDITOR_CONTENT

  return (
    <div className="px-5 md:px-16 lg:px-24 py-10 flex flex-col-reverse lg:flex-row justify-between items-center">
      <div className="w-full">
        <img 
          src={main_img}
          alt="text editor"
        />
      </div>
      <div className="w-full lg:max-w-[30rem] lg:mr-10 lg:pb-10 mb-10 lg:mb-0">
        <h1 className="text-3xl lg:text-4xl font-bold">{h1}</h1>
        <p className="mt-2 my-5 text-gray-600">{p}</p>
        <a href='/' className="font-bold text-gray-600 border-b border-gray-600 hover:border-black hover:text-black transition-colors duration-500">{a}</a>
      </div>
    </div>
  )
}
