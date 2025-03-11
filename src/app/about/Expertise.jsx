import React from 'react'
import Accordion from './Accordion';

const Expertise = () => {

  return (
    <>
    <div className="bg-white py-2 lg:py-12">
       {/* Section Header */}
    <section className="relative flex items-center justify-center pt-12">
      <section className="container flex items-center justify-center md:mt-0">

        <div className="max-w-6xl 2xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start lg:items-start justify-between w-full space-y-8 md:space-y-0">
          {/* Left Side - Button */}
          <div className="max-w-4xl flex-shrink-0 md:mr-12">
            <button className="text-xl px-5 py-3 border-2 border-brownColor rounded-full text-black  shadow-sm  transition-all duration-300 ease-in-out font-bold">
            Technical Expertise
            </button>
          </div>
  
          {/* Right Side - Content */}
          <div className="max-w-4xl text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Empowering Innovation Through Advanced Tech </h1>
            
            <p>Creating AI agents requires a combination of software engineering, data science, and AI/ML- specific skills. Below is a breakdown of the key skills our software engineers have to develop AI agents:</p>

            <div>
                {/* Accordion Section */}
                <Accordion/>
            </div>
          </div>
        </div>
      </section>
      </section>

      </div>
    </>
  )
}

export default Expertise;
