import Head from "next/head"
import Image from "next/image"

import styles from "../styles/Home.module.css"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function Home() {
  return ( 
    <div className="container mx-auto px-4"> 
      <img className="object-inherit object-top bg-yellow-300 w-[100vw] h-[80vh]" src="bg3.jpg" alt="" /> 
  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">JEE Prep Books: Your Path to Success</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Discover the books that helped me crack the JEE exam.</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Welcome to my online shop! <br />As a former JEE aspirant, I understand the challenges and the importance of having the right resources. That&aposs why I&aposve curated a collection of books that were instrumental in my journey to cracking the JEE exam.

Whether you&aposre just starting your preparation or looking for advanced material, you&aposll find something valuable here. <b>Explore our collection now!</b></p>
    </div>
    <div className="flex flex-wrap justify-content-center">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Physics</h2>
        <p className="leading-relaxed text-base mb-4">Master the laws of motion, thermodynamics, optics, and more. Our Physics collection covers all essential topics for JEE preparation.</p>
        <a href="/products" className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Chemistry</h2>
        <p className="leading-relaxed text-base mb-4">Dive deep into inorganic, organic, and physical chemistry. Our books provide in-depth explanations and practice problems.</p>
        <a href="/products" className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Maths</h2>
        <p className="leading-relaxed text-base mb-4">Build a strong foundation in calculus, algebra, geometry, and trigonometry. Our Maths books offer comprehensive coverage and problem-solving techniques.</p>
        <a href="/products" className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Miscellaneous</h2>
        <p className="leading-relaxed text-base mb-4">Explore a curated collection of books on various other topics. Expand your knowledge and horizons.</p>
        <a href="/products" className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <a href="/products">
    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Start Shopping</button>
  </a>
  </div>
</section>
 
    </div>
  )
}