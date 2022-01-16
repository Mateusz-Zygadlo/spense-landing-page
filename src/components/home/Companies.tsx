import React from 'react'
import { COMPANIES_CONTENT } from '../../content'

export const Companies = () => {
  return (
    <div className="flex justify-between flex-wrap pt-10 px-5 md:px-16 lg:px-24">
      {COMPANIES_CONTENT.map((company, index: number) => (
        <img 
          key={index}
          src={company}
          alt="company"
          className="w-28 mx-1 my-2"
        />
      ))}
    </div>
  )
}
