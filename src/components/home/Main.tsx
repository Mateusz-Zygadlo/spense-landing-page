import React from 'react'
import { MOBILE_WIDTH, TABLET_WIDTH } from '../../constants'
import { MAIN_CONTENT } from '../../content'
import { Button } from '../Button'
import { useWindowSize } from '../../hooks'

export const Main = () => {
  const { h1, p, reasons, button_text, main_img } = MAIN_CONTENT
  const { width } = useWindowSize()

  return (
    <div className="bg-beige flex flex-col-reverse lg:flex-row items-center justify-between pb-10 px-5 md:px-16 lg:px-24 pt-4">
      <div className="w-full lg:max-w-[40rem] md:pr-5 mt-10 lg:mt-0">
        <h1 className="text-4xl lg:text-6xl font-bold">{h1}</h1>
        <p className="mt-3">{p}</p>
        <ul className="mt-4 mb-5">
          {reasons.map((reason, index: number) => (
            <li
              key={index}
              className="flex items-center my-2"
            >
              <img 
                src={reason.img}
                alt="checkmark"
              />
              <p className="ml-3">{reason.p}</p>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <input 
            type="email"
            name="email"
            placeholder="john@example.com"
            className="py-2 w-44 mr-3 sm:w-52 border-2 rounded-md indent-4"
          />
          <Button>{button_text}</Button>
        </div>
      </div>
      <div className="w-full lg:max-w-[30rem]">
        {width > TABLET_WIDTH ? (
          <img 
            src={main_img.desktop}
            alt="hero"
          />
        ) : width > MOBILE_WIDTH ? (
          <img 
            src={main_img.tablet}
            alt="hero"
          />
        ) : (
          <img 
            src={main_img.mobile}
            alt="hero"
          />
        )}
      </div>
    </div>
  )
}
