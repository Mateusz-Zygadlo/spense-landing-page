import React from 'react'
import {  
  Navbar,
} from '../components'
import {
  Main,
  Companies,
  Banner,
} from '../components/home'
import { INFORMATION_BAR_CONTENT } from '../content'

export const Home = () => {
  const { p } = INFORMATION_BAR_CONTENT

  return (
    <div className="w-full max-w-screen-2xl 2xl:mx-auto">
      <div className="bg-black text-white font-semibold flex items-center justify-center py-1 px-10 text-center">{p}</div>
      <Navbar />
      <Main />
      <Companies />
      <Banner />
    </div>
  )
}
