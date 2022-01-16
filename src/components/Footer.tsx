import React from 'react'

export const Footer = () => {
  return (
    <div className="md:px-16 lg:px-24 px-5 pt-16 pb-5 flex flex-col md:flex-row justify-between bg-black text-gray-500">
      <div className="w-full md:max-w-[20rem] mr-10 mb-5">
        <h1 className="font-bold text-lg text-white">spense.</h1>
        <p>Spense is an open platform for individuals to share their unfiltered thoughts. Discuss the topics you love, and get paid for doing just that.</p>
      </div>
      <div className="flex justify-around flex-wrap">
        <ul className="mx-5 mb-3">
          <li className="font-bold mb-2 text-white">Sitemap</li>
          <li>Homepage</li>
        </ul>
        <ul className="mx-5 mb-3">
          <li className="font-bold mb-2 text-white">Resources</li>
          <li>Support</li>
          <li>Contact</li>
          <li>FAQ</li>
        </ul>
        <ul className="mx-5 mb-3">
          <li className="font-bold mb-2 text-white">Company</li>
          <li>About</li>
          <li>Customers</li>
          <li>Blog</li>
        </ul>
        <ul className="mx-5 mb-3">
          <li className="font-bold mb-2 text-white">Opportunities</li>
          <li>Jobs</li>
        </ul>
      </div>
    </div>
  )
}