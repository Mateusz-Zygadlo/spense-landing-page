import React from 'react'
import { BANNER_CONTENT } from '../../content'
import { useWindowSize } from '../../hooks' 
import { TABLET_WIDTH, MOBILE_WIDTH } from '../../constants'

export const Banner = () => {
  const { width } = useWindowSize()
  const { h1, p, a, main_img } = BANNER_CONTENT

  return (
    <div className="px-5 md:px-16 lg:px-24">
      <div className="w-full bg-beige flex flex-col lg:flex-row justify-center lg:justify-between items-center px-10 pt-10 mt-10 rounded-lg">
        <div className="w-full lg:max-w-[30rem] lg:mr-10 lg:pb-10">
          <h1 className="text-3xl lg:text-4xl font-bold">{h1}</h1>
          <p className="mt-2 my-5 text-gray-600">{p}</p>
          <a href='/' className="font-bold text-gray-600 border-b border-gray-600 hover:border-black hover:text-black transition-colors duration-500">{a}</a>
        </div>
        <div className="w-full flex items-center justify-center">
          {width > TABLET_WIDTH ? (
            <img 
              src={main_img.desktop}
              alt="preview page"
            />
          ) : width > MOBILE_WIDTH ? (
            <img 
              src={main_img.tablet}
              alt="preview page"
            />
          ) : (
            <img 
              src={main_img.mobile}
              alt="preview page"
            />
          )}
        </div>
      </div>
    </div>
  )
}
