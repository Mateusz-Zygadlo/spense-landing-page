import React from 'react'

export const Button: React.FC = ({ children }) => {
  return(
    <button className='px-5 py-2 font-semibold flex justify-center items-center bg-violet border-black text-white bg-black hover:text-black hover:bg-white rounded-lg border-2 transition-colors duration-500'>
      {children}
    </button>
  )
}